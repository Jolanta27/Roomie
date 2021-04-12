import React from "react";
import {Link} from 'react-router-dom';
import '../sass/Home.scss';
import people from '../img/friends.jpeg';
import oslo from '../img/oslo.jpeg';
import bergen from '../img/bergen.jpeg';
import trondheim from '../img/trondheim.jpeg';
import stavanger from '../img/stavanger.jpeg';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <header>
            <h1>Roomie</h1>
            <nav>
                <Link to="/Login">Logg inn</Link>
                <Link to="/NewUser">Opprett bruker</Link>
            </nav>
          
        </header>
    <section className="section_one">
        <div className="white">
            <img className="people" src={people} alt="friends"/>
            <h1>Vi hjelper deg å finne de riktige folka!</h1>
        </div>
        <div className="violet">
            <form>
                <h1>
                    Finn den perfekte matchen din
                </h1>
                <label>
                    <input type="text" placeholder="Tast inn by eller postnummer..."/>
                    <input type="submit" value="Søk"/>
                </label>
            </form>
        </div>
    </section>
    <section className="section_two">
        <h1 className="intro">Populære byer</h1>
            <div className="pictures">
                <div>
                <p>Oslo</p>
                <img src={oslo} alt="oslo"/>
                </div>
                <div>
                <p>Bergen</p>
                <img src={bergen} alt="bergen"/>
                </div>
                <div>
                <p>Trondheim</p>
                <img src={trondheim} alt="trondheim"/>
                </div>
                <div>
                <p>Stavanger</p>
                <img src={stavanger} alt="stavanger"/>
                </div>
        </div>
    </section>
     <Footer />   
     </>
    )
}
export default Home;