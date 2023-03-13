import { Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Row } from 'react-bootstrap';
import { useContext, useState } from "react";
import appContext from '../../context/globalContext';


const Header = (props) => {
    const [active, setActive] = useState('');
    let navigate = useNavigate();
    const contextData = useContext(appContext)

    const logout = () => {
        console.log('hjj');
        localStorage.clear()
        contextData.setToken('')
        navigate('/')
    }

    return (
        <>
            <section className="header" id="head_bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        {/* <a className="navbar-brand" href="index.html"><p>a</p></a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className={`nav-link ${active === '/' || window.location.pathname === '/' ? "active" : ""}`} aria-current="page" onClick={() => { navigate('/'); setActive(window.location.pathname) }}>Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${active === '/pricing' || window.location.pathname === '/pricing' ? "active" : ""}`} aria-current="page" onClick={() => { navigate('/pricing'); setActive(window.location.pathname) }}>Pricing </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${active === '/contact-us' || window.location.pathname === '/contact-us' ? "active" : ""}`} aria-current="page" onClick={() => { navigate('/contact-us'); setActive(window.location.pathname) }}>Contact Us</a>
                                </li>
                                {contextData.token==''||contextData.token==null ?
                                    <li className="nav-item">
                                        <a className="nav-link signin" onClick={() => navigate('/signin')}>Sign in</a>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <a className="nav-link signin" onClick={() => logout()}>sign out</a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
export default Header;