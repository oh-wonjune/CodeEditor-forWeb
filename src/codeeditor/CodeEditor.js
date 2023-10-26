import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = (props) => {
    const {onChange,code} = props



    const handleEditorChange = (newCode) => {
        onChange(newCode);
    };
    const editorDidMount = (editor) => {
        // Set top padding to the editor
        editor.updateOptions({ padding: { top: 20 } });
    };

  return (
      <div style={{ height: '100%', width: '100%'}}>
        <MonacoEditor
            language="javascript"
            theme="hc-black"
            value={code}
            options={{selectOnLineNumbers: true}}
            onChange={handleEditorChange}
            editorDidMount={(editor, monaco) => editorDidMount(editor)}
        />
      </div>
  );
}

export default CodeEditor;