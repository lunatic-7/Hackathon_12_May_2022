import React, { useEffect, useState } from 'react'
import covidApi from '../api/covid'
import List from '../models/List'
import { Link, useNavigate } from 'react-router-dom'

const Content = () => {
  const [sahar, setSahar] = useState([])
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);


  const liveData = async () => {
    const response = await covidApi.get("/")
    console.log(response.data.states);
    setSahar(response.data.states)
    setSpinner(false)
  }

  useEffect(() => {
    setSpinner(true);
    liveData();
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/');
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{opacity: "0.8"}}>
        <div class="container-fluid">
          <h3 class="navbar-brand" style={{ marginTop: "7px" }}>TOUR COMPANION</h3>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link hike" aria-current="page" to="/map"> Hitchhike</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active covid" aria-current="page" to="/content"> COVID +</Link>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-secondary" onClick={handleLogout} type="submit">Sign Out</button>
            </form>
          </div>
        </div>
      </nav>
      <div className='container d-flex justify-content-between' id='heads'>
        <h3 className='temp7'>States</h3>
        <h3 className='temp7'>Cases</h3>
        <h3 className='temp7'>Recoveries</h3>
        <h3 className='temp7'>Deaths</h3>
      </div>
      <div className='temp container'>
        {spinner && (
          <div class="spinner-border" id='spin' style={{ width: "3rem", height: "3rem" }} role="status">
          </div>)}

        {sahar.map((element) => {
          return <div>
            <List state={element.state} cases={element.cases} recoveries={element.recoveries} deaths={element.deaths} />
          </div>
        })}
      </div>
    </>
  )
}

export default Content