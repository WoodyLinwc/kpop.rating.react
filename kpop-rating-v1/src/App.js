import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notfound/NotFound';



function App() {

  const [kpops, setKpops] = useState();
  const [kpop, setKpop] = useState();
  const [reviews, setReviews] = useState();




  const getKpops = async () => {

    try{
      const response = await api.get("/api/v1/kpops")

      console.log(response.data);

      setKpops(response.data);
    }
    catch(err) {
      console.log(err);
    }
  }

  const getKpopData = async (kpopId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/kpops/${kpopId}`);

        const singleKpop = response.data;

        setKpop(singleKpop);

        setReviews(singleKpop.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }



  useEffect(() => {
    getKpops();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ="/" element={<Layout/>}>
          <Route path="/" element={<Home kpops = {kpops}/>} ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:kpopId" element ={<Reviews getKpopData = {getKpopData} kpop={kpop} reviews ={reviews} setReviews = {setReviews} />}></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
