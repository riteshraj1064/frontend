import React from 'react'
import Navbar from './Navbar'
import './home.css';
import home from '../image/home.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (<> 
    <div>
    <section className="header">

            <div className="text-box">
                <h1>Together we achieve stronger, healthier lives.</h1>
                <p>Welcome to our website, where your health is our top priority!</p>
                <form>
                    <a href="" className="hero-btn">Know your Disease</a>
                  </form>
            </div>
           
        </section>
    </div>
    </>
  )
}

export default Home
