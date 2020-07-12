import React from 'react'


const Notes = (props) => {

    const deletenote = () => {
        props.delete(props.id)
    }

    const editnote = () => {
        props.edit(props.id)
    }

    return (
        <>
            <div className="card m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <button onClick={editnote} className="btn btn-primary">Edit</button>
                    <button onClick={deletenote} className="btn btn-danger ml-2">Delete</button>
                </div>
            </div>

        </>

    )

}


export default Notes