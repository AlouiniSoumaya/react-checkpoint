import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/main';
import CustomState from './components/footer/state';
function App() {
  const [firstname,setFirstName] = useState()
  console.log(firstname)
  return (
    <div className="App">
      <input type='text' onChange={ (e)=> setFirstName(e.target.value)  } />
     <Main />
     {/* <CustomState/> */}
    </div>
  );
}

export default App;
