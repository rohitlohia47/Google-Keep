import React from 'react'


const Notes = (props) => {

    return (
        <>
            <div className="card m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary">Edit</a>
                    <a href="#" className="btn btn-danger ml-2">Delete</a>
                </div>
            </div>

        </>

    )

}


export default Notes