import "./index.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CreateArea from "./components/CreateArea"
import Note from "./components/Note"
import { useState } from "react"

function App() {

  const [notes, setNotes] = useState([])

  function submitNote(note){
    setNotes((prev) => {
      return [...prev , note]
    })
  }

  function deleteNote(id){
    setNotes(
      (prev) => {
        return(
          prev.filter((noteItem, index) => {
            return index !== id;
          })
        )
      }
    )
  }

  return (
    <>
    <Header />
    <CreateArea onAdd = {submitNote}/>
    {notes.map(
      (note , index) => {
        return (
          <Note
          onDelete = {deleteNote}
          id = {index} 
          title = {note.title}
          content = {note.content}
        />
        )
      }
    )}
    
    <Footer />
    </>
  );
}

export default App;
