import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../media/background.png';
import '../styles/Home.css';

function Home() {
    return (
       <div className="home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <h1 className="mainTitle">Gege's Confectionaries</h1>
                <p>Tag Line!</p>
                <Link to="/Sweet"><button>Sweet</button></Link>
                <Link to="/Savory"><button>Savory</button></Link>
                <Link to="/Guilty Pleasure"><button>Guilty Pleasure</button></Link>
           </div>
    )
}

export default Home
