import main from './Images/main.jpg';
import friend1 from './Images/friend1.jpg';
import friend2 from './Images/friend2.jpg';
import friend3 from './Images/friend3.jpg';
import friend4 from './Images/friend4.jpg';
import friend5 from './Images/friend5.jpg';
import friend6 from './Images/friend6.jpg';
import friend7 from './Images/friend7.jpg';
import friend8 from './Images/friend8.jpg';
import friend9 from './Images/friend9.jpg';
import './App.css';

function App() {
    return (
        <div className='container-fluid'>
            <header>
                <nav className="fixed-top ml-5 mt-2">
                    <ul className="nav">
                        <li className="nav-item btn btn-danger mx-1">Home</li>
                        <li className="nav-item btn btn-danger mx-1">About me</li>
                        <li className="nav-item btn btn-danger mx-1">Star wars</li>
                        <li className="nav-item btn btn-danger mx-1">Contact</li>
                    </ul>
                </nav>
                <h1 className="text-center py-4">Luke Skywalker</h1>
            </header>
            <main className="clearfix">
                <section className="float-left w-25 row mr-2">
                    <img className="hero col" src={main} alt="Luke Skywalker"/>
                </section>
                <section className="float-right w-50 row no-gutters border">
                    <h2 className="col-12 text-center">Dream Team</h2>
                    <img className="col-4 p-1" src={friend1} alt="friend"/>
                    <img className="col-4 p-1" src={friend2} alt="friend"/>
                    <img className="col-4 p-1" src={friend3} alt="friend"/>
                    <img className="col-4 p-1" src={friend4} alt="friend"/>
                    <img className="col-4 p-1" src={friend5} alt="friend"/>
                    <img className="col-4 p-1" src={friend6} alt="friend"/>
                    <img className="bottomLeft col-4 p-1" src={friend7} alt="friend"/>
                    <img className="col-4 p-1" src={friend8} alt="friend"/>
                    <img className="bottomRight col-4 p-1" src={friend9} alt="friend"/>
                </section>
                <p className="farGalaxy">title: A New Hope
                    episode: 4
                    release_date: 1977-05-25
                    opening crawl: It is a period of civil war.
                    Rebel spaceships, striking
                    from a hidden base, have won
                    their first victory against
                    the evil Galactic Empire.
                    During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the DEATH
                    STAR, an armored space
                    station with enough power
                    to destroy an entire planet.
                    Pursued by the Empire's
                    sinister agents, Princess
                    Leia races home aboard her
                    starship, custodian of the
                    stolen plans that can save her
                    people and restore
                    freedom to the galaxy....
                    <br/>
                    title: The Empire Strikes Back
                    episode: 5
                    release_date: 1980-05-17
                    opening crawl: It is a dark time for the
                    Rebellion. Although the Death
                    Star has been destroyed,
                    Imperial troops have driven the
                    Rebel forces from their hidden
                    base and pursued them across
                    the galaxy.
                    Evading the dreaded Imperial
                    Starfleet, a group of freedom
                    fighters led by Luke Skywalker
                    has established a new secret
                    base on the remote ice world
                    of Hoth.
                    The evil lord Darth Vader,
                    obsessed with finding young
                    Skywalker, has dispatched
                    thousands of remote probes into
                    the far reaches of space....
                    <br/>
                    title: Return of the Jedi
                    episode: 6
                    release_date: 1983-05-25
                    opening crawl: Luke Skywalker has returned to
                    his home planet of Tatooine in
                    an attempt to rescue his
                    friend Han Solo from the
                    clutches of the vile gangster
                    Jabba the Hutt.
                    Little does Luke know that the
                    GALACTIC EMPIRE has secretly
                    begun construction on a new
                    armored space station even
                    more powerful than the first
                    dreaded Death Star.
                    When completed, this ultimate
                    weapon will spell certain doom
                    for the small band of rebels
                    struggling to restore freedom
                    to the galaxy...
                </p>
            </main>
            <footer className="row align-items-center mx-0">
                <div className="btn btn-danger col-2 offset-2">
                    Send me an <span className="email text-uppercase small">email</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
