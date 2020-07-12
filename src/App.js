import React, { useState } from 'react';
import reacticon from './images/react.png'
import bootstrap from './images/bootstrap.jpg'
import google from "./images/google.png"
import Notes from './Notes.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'



function App() {

  let editnoteindex = 0
  let updatedindex = 0;

  const [data, updateData] = useState({
    title: "",
    content: ""

  }
  )

  const [notes, updateNotes] = useState([])

  const handleChange = (e) => {
    updateData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    if (data.title == "" && data.content == "") {
      alert('Please Enter Note Title and Content')
    }
    else {
      updateData({
        title: "",
        content: ""
      })
      updateNotes([...notes, data])
    }

  }

  const deletenote = (id) => {
    updateNotes(notes.filter((val, index) => { return index !== id }))
  }




  const editnote = (id) => {
    document.getElementById('editor').style.display = 'block'
    editnoteindex = id
    console.log("editnoteindex", id);
    document.getElementById('edittitle').value = notes[id].title
    document.getElementById('editcontent').value = notes[id].content
  }

  const savenote = () => {


    let newarr = [...notes]
    newarr.forEach((val, index) => {

      if (index == editnoteindex) {
        val.title = document.getElementById('edittitle').value;
        val.content = document.getElementById('editcontent').value;

      }
    })

    updateNotes([...newarr])
    document.getElementById('editor').style.display = 'none'

  }

  return (
    <>
      <div className="container">

        {/* Top Logos */}

        <div className="logos my-5">
          <span><img className="img-fluid" src={google} height='50' width="50" alt="google" /></span>
          <span style={{ fontSize: "20px" }}>=</span>
          <span><img className="img-fluid" src={reacticon} height='50' width="50" alt='reacticon' /></span>
          <span style={{ fontSize: "20px" }}>+</span>
          <span><img className="img-fluid" src={bootstrap} height='50' width="50" alt="bootstrap" /></span>
        </div>

        {/* Top Logos Ends */}

        {/* User Input Area (Note Title and Body) */}

        <div className="input my-5">

          <form>

            <input
              name="title"
              value={data.title}
              type='text'
              placeholder="Title.."
              onChange={handleChange}
              autoComplete="off" />

            <textarea
              name='content'
              value={data.content}
              placeholder="Take a note..."
              spellcheck="false"
              onChange={handleChange}></textarea>
            <button type="button" class="btn btn-success addbtn" onClick={handleClick}><span>+</span></button>


          </form>

        </div>
        {/* User Input Area Ends (Note Title and Body) */}

        <div className="notes">
          {notes.map((value, index) => {
            return <Notes title={value.title} content={value.content} delete={deletenote} edit={editnote} id={index} />
          })
          }



        </div>

        <div id="editor">

          <form>

            <input id="edittitle" name="edittitle" autoComplete="off" placeholder="enter title" />

            <textarea id="editcontent" name='editcontent' placeholder="enter body"></textarea>
            <button type="button" class="btn btn-primary addbtn" onClick={savenote} >Save</button>


          </form>

        </div>


      </div>

    </>
  )
}

export default App;
