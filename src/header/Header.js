import React from 'react';

const Header = (props) => {
    const {rendering} = props

  return (
        <div style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
            fontSize: '24px',
            display:"flex",
            justifyContent:"space-between"
        }}>
            <span style={{fontFamily: "monospace",fontSize: "20px", fontWeight: "bold",color: "white"}}>
                <span style={{color:"#fdba28"}}>&#60;&#47;&#62;</span>&#32;code<span style={{color:"#fdba28"}}>Dev</span>
            </span>
            <button onClick={rendering} style={{borderRadius:"6px", height:"32px", width:"100px",fontSize:"14px", fontWeight:"bold", fontFamily:"monospace", cursor:"pointer"}}>
                Rendering
            </button>
        </div>
    );
}

export default Header;