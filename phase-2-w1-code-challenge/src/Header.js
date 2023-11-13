import React from 'react';


function Header() {
    const headerStyle={
        backgroundColor: '#CD5C5C',
        color:'fff',
        padding:'1rem',
        textAlign:'center',
    };
    return (
        <header style={headerStyle} >
            <h1>THE BANK OF GOLD</h1>
        </header>
    )
}

export default Header;