// monacoThemes.js

import { editor } from 'monaco-editor';

editor.defineTheme('myCustomTheme', {
    base: 'vs',
    inherit: true,
    rules: [
        { token: 'keyword', foreground: 'FF8800' },
        { token: 'delimiter.html', foreground: 'FFFF00' }
    ]
});
