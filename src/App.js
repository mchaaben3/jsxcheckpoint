
import './App.css';
import myWonderfulImage from "./imageInSrc.jpg";
import './style.css';

function App() {
  return (
    <div className="App">
          <div className="Contain"style={{border:"solid 1px black",maxWidth:"100vw"}}>

                <h1 className="title red">Mahdi Chaaben</h1>
                <br />
                <img src={myWonderfulImage} alt=''/>

                <br />

                <img src="/imageInPublic.jpg"  alt=''/>

                <video width="320" height="240" controls>

                     <source src="myVideo.mp4" type="video/mp4" />

                </video>
          </div>

    </div>
  );
}

export default App;