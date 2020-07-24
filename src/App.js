import React from 'react';
import './App.css';
import myWonderfulImage from "./bugatti.jpg"


  


function App() {
  return (
    <div style={{border:"solid 1px black",maxwidth:"100vw"}}>

 <h1 className="title red">Med Amine Zouari</h1>

 <br />

 <img src={myWonderfulImage} alt ='myImage' />

 <br />

 <img className="img2" src="ferrari.jpg" alt ='mySecondImage'/>
 
 <br />
 <video style={{width:320, height:240}} controls>

<source src="myvideo.mp4" type="video/mp4" />

</video>


</div>


 
  

  );
}

export default App;
