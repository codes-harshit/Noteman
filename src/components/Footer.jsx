import React from 'react'

function Footer(){
    const date = new Date(); 


    return(
        <footer>
            <p>CopyRight 	&#169; {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer