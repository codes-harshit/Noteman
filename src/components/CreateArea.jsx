import React from 'react'

function CreateArea(){

    return (
        <div>
            <form>
                <input
                    placeholder='Title'
                ></input>
                <textarea
                    placeholder='Take a Note..'
                ></textarea>
                <button
                    type='submit'
                >Add</button>
            </form>
        </div>
    )
}

export default CreateArea;