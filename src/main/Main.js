import React, {useState} from 'react';
import SplitPane from 'react-split-pane';
import {CodeEditor} from "../codeeditor";
import {Preview} from "../preview";

const Main = () => {
    const [code, setCode] = useState("function SampleComponent() {\n" +
        "    return (\n" +
        "        <div style={{ backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px' }}>\n" +
        "            Hello from SampleComponent!\n" +
        "        </div>\n" +
        "    );\n" +
        "}\n" +
        "\n" +
        "export default SampleComponent;")

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };


    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <SplitPane split="vertical" defaultSize="55%">
                    <CodeEditor
                        code={code}
                        onChange={handleCodeChange}
                    />
                    <Preview
                        compiledCode={code}
                    />
            </SplitPane>
        </div>
    );
}

export default Main;