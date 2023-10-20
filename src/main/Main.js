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

// import React, { useState } from 'react';
//
// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState('');
//
//   const handleInputChange = (e) => {
//     setTaskInput(e.target.value);
//   };
//
//   const handleAddTask = () => {
//     if (taskInput) {
//       setTasks([...tasks, taskInput]);
//       setTaskInput('');
//     }
//   };
//
//   const handleRemoveTask = (index) => {
//     const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
//     setTasks(newTasks);
//   };
//
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2>Simple To-Do App</h2>
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           value={taskInput}
//           onChange={handleInputChange}
//           placeholder="Enter new task..."
//           style={{ marginRight: '10px' }}
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} style={{ marginBottom: '10px' }}>
//             {task}
//             <button
//               onClick={() => handleRemoveTask(index)}
//               style={{ marginLeft: '10px', background: 'red', color: 'white' }}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//
// export default App;