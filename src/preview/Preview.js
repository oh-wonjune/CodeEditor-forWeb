import React, {useState, useEffect} from 'react';

const Preview = (props) => {
    const {compiledCode} = props
    const [code, setCode] = useState(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
            <title>Preview</title>
        </head>
        <body>
            <div id="root"></div>
            <script>
                ReactDOM.render(<App />, document.getElementById('root'));
            </script>
        </body>
        </html>
    `)

    useEffect(() => {
        // 간단한 위험 패턴 찾기
        const isUnsafe = /alert|localStorage|sessionStorage|cookie|document\.write/.test(compiledCode);
        if (isUnsafe) {
            debugger
        }

        // Babel을 사용하여 코드 변환
        let transformedCode;
        try {
            transformedCode = window.Babel.transform(compiledCode, {
                presets: ['react']
            }).code.replace(/export /g, "");
        } catch (error) {
            debugger
        }

        let sanitizedCode = transformedCode.split('\n').filter(line => !line.trim().startsWith('default')).join('\n');

        sanitizedCode = sanitizedCode
            .replace(/import React from 'react';/g, 'const React = window.React;')
            .replace(/import {([^}]+)} from 'react';/g, (match, p1) => {
                // named exports를 분리 (useState, useEffect, ...)
                const names = p1.split(',').map(name => name.trim());
                return names.map(name => `const ${name} = window.React.${name};`).join('\n');
            });


        let match = sanitizedCode.match(/function (\w+)|class (\w+)|const (\w+) = \(.*\)\s*=>\s*{?\s*return/);
        let componentName = match && (match[1] || match[2] || match[3]);

        if (!componentName) {
            console.error("컴포넌트 이름을 찾을 수 없습니다.");
            return;
        }

        const htmlCode = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
                <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
                <title>Preview</title>
            </head>
            <body>
                <div id="root"></div>
                <script>
                    ${sanitizedCode}
                    window.${componentName} = ${componentName};
                    ReactDOM.render(React.createElement(window.${componentName}), document.getElementById('root'));
                </script>
            </body>
            </html>
        `;

        const blob = new Blob([htmlCode], {type: 'text/html'});
        const blobURL = URL.createObjectURL(blob);

        setCode(blobURL);
    }, [compiledCode])

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <iframe
                title="Compiled Code Output"
                src={code}
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
}

export default Preview;