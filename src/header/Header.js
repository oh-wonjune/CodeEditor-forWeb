import React from 'react';

const Header = (props) => {
    const {rendering} = props

  return (
        <div style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
            fontSize: '24px'
        }}>
            My Header
            <button onClick={rendering}>랜더링</button>
        </div>
    );
}

export default Header;