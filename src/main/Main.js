import React, {useState} from 'react';
import SplitPane from 'react-split-pane';
import {CodeEditor} from "../codeeditor";
import {Preview} from "../preview";
import {Header} from "../header";

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
    const [compiledCode, setCompiledCode] = useState("")

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const onClickRendering = ()=>{
        setCompiledCode(code)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header
                rendering={onClickRendering}
            />
            <div style={{ flex: 1, display: 'flex' }}>
            <SplitPane split="vertical" defaultSize="55%">
                    <CodeEditor
                        code={code}
                        onChange={handleCodeChange}
                    />
                    <Preview
                        compiledCode={compiledCode}
                    />
            </SplitPane>
            </div>
        </div>
    );
}

export default Main;


//
// import { useState, useEffect } from 'react';
//
// function SampleComponent() {
//
//     const [msg, setMsg] = useState("hello")
//     const onClickbtn =()=>{
//         setMsg("hahahaha")
//     }
//
//     return (
//         <div>
//         <div style={{ backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px' }}>
//             {msg}
//         </div>
//         <button onClick={onClickbtn}>테스트 </button>
//         </div>
//     );
// }
//
// export default SampleComponent;