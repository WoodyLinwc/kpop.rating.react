import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';


function App() {

  const [kpops , setKpops] = useState();
  const getKpops = async () => {

    try{
      const response = await api.get("/api/v1/kpop")

      console.log(response.data);

      setKpops(response.data);
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getKpops();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Layout/>}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
