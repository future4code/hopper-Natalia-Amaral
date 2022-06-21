import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillFilePersonFill} from "react-icons/bs"
import {BsListUl} from "react-icons/bs"

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>LabeX</h1>
      <div>
          <button onClick={()=> navigate("/trips/list")}>Ver viagens <BsListUl/></button>
          <button onClick={() => navigate("/login")}>Login <BsFillFilePersonFill/></button>
      </div>
    </>
  );
}

export default HomePage;