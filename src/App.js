import React from 'react';
import reacticon from './images/react.png'
import bootstrap from './images/bootstrap.jpg'
import google from "./images/google.png"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'



function App() {

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

        <div className="input">

          <form>

            <input type='text' placeholder="Title.." />
            <textarea name='content' placeholder="Take a note..." spellcheck="false"></textarea>


          </form>

        </div>



      </div>

    </>
  )
}

export default App;
