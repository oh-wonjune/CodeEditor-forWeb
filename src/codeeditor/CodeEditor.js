import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = (props) => {
    const {onChange,code} = props

    const handleEditorChange = (newCode) => {
        onChange(newCode);
    };

  return (
    <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{selectOnLineNumbers: true}}
        onChange={handleEditorChange}
      />
  );
}

export default CodeEditor;