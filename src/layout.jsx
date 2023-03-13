import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from './components/Header/header'
// import SigninModal from "./components/Signup/signinModal";
import { Routing } from "./routing";

// import appContext from "../context/globalContext";
// import { Routing } from "../Routes/routing";
// import Header from "./header";
// import Sidemenu from "./sidebar";

const Layout = (props) => {
    const ref = useRef(null);
    const location = useLocation()
    console.log(location.pathname);

    return (
        <>
            {
                
                    location.pathname == '/checkout'
                    // window.location.pathname.includes('cancellation')
                    ? ''
                    : <Header />
            }
            <div className="main_content">
                {props.children}
            </div>
            {/* <div className={contextData.token ?'d-flex wrap-no-wrap main-prnt':''}>
                {contextData.token ? <Sidemenu refer={ref} /> : ''}
                <div className={contextData.token ?'w-100 parent-rght position-relative':''}>
                    {contextData.token ? <Header /> : ''}
                    <div className= {contextData.token ? 'prnt-div px-2 px-sm-4 py-2 py-sm-4 w-100' : ''} >
                        {props.children}
                    </div>
                    {contextData.token &&
                    <div className="overwraper" id="wrapperblock"></div>}
                </div>
            </div> */}

        </>
    )
}

export default Layout;