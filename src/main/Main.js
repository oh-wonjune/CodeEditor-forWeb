import React, {useState} from 'react';
import SplitPane from 'react-split-pane';
import {CodeEditor} from "../codeeditor";
import {Preview} from "../preview";
import {Header} from "../header";
import Loading from "../Loading";
import Alert from "../alert/Alert";

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
    const [isLoading, setIsLoading] = useState(false)
    const [renderAble,setRenderAble] = useState(true)
    const [isAlert, setIsAlert] = useState(false)
    const handleCodeChange = (newCode) => {
        setCode(newCode);
        setRenderAble(true)
    };

    const onClickRendering = ()=>{
        if(!renderAble){
            setIsAlert(true)
        }else{
            setCompiledCode(code)
            setIsLoading(true)
            setRenderAble(false)
        }
    }

    const onClickAlertClose =()=>{
        setIsAlert(false)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header
                rendering={onClickRendering}
                setIsLoading={setIsLoading}
            />
            <div style={{flex: 1, display: 'flex'}}>
                <SplitPane split="vertical" defaultSize="55%">
                    <CodeEditor
                        code={code}
                        onChange={handleCodeChange}
                    />
                    <Preview
                        compiledCode={compiledCode}
                        setIsLoading={setIsLoading}
                    />
                </SplitPane>
            </div>
            {isLoading &&
                <Loading/>
            }
            {isAlert &&
                <Alert
                    onClickAlertClose={onClickAlertClose}
                />
            }
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