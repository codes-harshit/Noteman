import React from 'react'
import notes from "../Assets/notes.png"

function Header(){

    return(
    <header>
      <div className = "headingText">NoteMan</div>
      <div className = "logo">
        <img src = {notes} alt = "Notes"/>
      </div>
    </header>
    )

}

export default Header;