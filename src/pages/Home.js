import React from "react";
import {Link} from 'react-router-dom';
import '../sass/_home.scss';
import people from '../img/friends.jpeg';
import oslo from '../img/oslo.jpeg';
import bergen from '../img/bergen.jpeg';
import trondheim from '../img/trondheim.jpeg';
import stavanger from '../img/stavanger.jpeg';
import Footer from '../components/Footer';

function Home() {
    return (
        <>

        <header>
            <h1 className="logo">Roomie</h1>
            <nav className="nav">
                <Link to="/Login">Logg inn</Link>
                <Link to="/NewUser">Opprett bruker</Link>
            </nav>   
        </header>

        <section className="first-section">
            <div className="left-side">
                <img className="people" src={people} alt="friends"/>
                <h1 className="img_intro">Vi hjelper deg å finne de riktige folka!</h1>
            </div>
            <div className="right-side">
                <form>
                    <h1 className="right-side_intro">Finn den perfekte matchen din</h1>
                    <label>
                        <input type="text" placeholder="Tast inn by eller postnummer..." />
                        <input type="submit" value="Søk" />
                    </label>
                </form>
            </div>
        </section>

        <section className="second-section">
            <h1 className="second-section_intro">Populære byer</h1>
                <div className="pictures">
                    <div><p>Oslo</p><img src={oslo} alt="oslo"/></div>
                    <div><p>Bergen</p><img src={bergen} alt="bergen"/></div>
                    <div><p>Trondheim</p><img src={trondheim} alt="trondheim"/></div>
                    <div><p>Stavanger</p><img src={stavanger} alt="stavanger"/></div>
                </div>
        </section>

        <Footer />   
        </>
    )
}
export default Home;