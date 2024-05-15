import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import IntroScreen from "./components/IntroScreen";
import PrivateRoute from "./components/PrivateRoute";
import { Profile } from "./pages/Profile";
import { MadrsQuestionnaire } from "./pages/MadrsQuestionnaire";
import { Documentation } from "./pages/Documentation";

function App() {
   
  const [isLoggedin, setIsLoggedin] = useState(false)
  const[loading,setloading]=useState(false)
  const [result, setResult] = useState([{}])

  // console.log(result)
  
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false)
    },2000);

    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setResult(data)
        console.log(data)
      }
    )
  },[])

  return (
    <div className="w-screen h-screen overflow-x-hidden background felx flex-col">
    {!loading && <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />}
      {loading ? (
        <IntroScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home isLoggedin={isLoggedin}/>} />
          <Route path="/questionaries" element={<MadrsQuestionnaire setIsLoggedIn={setIsLoggedin} />} />
          <Route path="/documentation" element={<Documentation setIsLoggedIn={setIsLoggedin} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedin} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedin} />} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedin={isLoggedin}>
              <Dashboard/>
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute isLoggedin={isLoggedin}>
              <Profile/>
            </PrivateRoute>
          }/>
        </Routes>
      )}
    </div>
    )
}

export default App;
