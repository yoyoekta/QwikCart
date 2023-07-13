import React from 'react'
import BottomBar from '../components/BottomBar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TopFrame from '../components/TopFrame'
import FeatureList from '../components/FeatureList'
import Category from '../components/Category'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <BottomBar />
        <div className="min-w-screen">
          <TopFrame />
          <h1 className="text-4xl font-bold text-center m-5 ">Featured Categories</h1>
          <FeatureList />
          <Category/>
        </div>
        <Footer />
      </div>
  )
}

export default Home