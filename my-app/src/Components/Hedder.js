import React from 'react';
import Navigation from './Naivgation';


function Header(){
    return(
        <header className='border-b font-bold p-3'>
            This is the header
            <Navigation/>
        </header>
    )
}

export default Header;