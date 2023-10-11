import React, {useState} from 'react'

function CreateArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleOnChange(event){
        const name = event.target.name;
        setNote((prev) => {
            return({
                ...prev,   
                [name] : event.target.value 
            })
        })
    }

    function handleOnClick(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    placeholder='Title'
                    name='title'
                    value={note.title}
                    onChange={handleOnChange}
                ></input>
                <textarea
                    placeholder='Take a Note..'
                    name='content'
                    value={note.content}
                    onChange={handleOnChange}
                ></textarea>
                <button
                    type='submit'
                    onClick={handleOnClick}
                >Add</button>
            </form>
        </div>
    )
}

export default CreateArea;