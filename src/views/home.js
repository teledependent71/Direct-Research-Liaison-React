import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Research Liaison</title>
        <meta property="og:title" content="Direct Research Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
