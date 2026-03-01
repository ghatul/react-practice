import React from "react";
import {BrowserRouter, Routes, Route, NavLink, Outlet} from "react-router-dom";


const Abc = () => {
  return <div>
    <h4>ABC</h4>
    </div>
}

const Pqr = () => {
   return <div>
    <h4>PQR</h4>
    </div>
}

const Home = () => {
    return <div>
        <h3>Home</h3>
    <Outlet />
    </div>
}

const About = () => {
     return <div><h3>About</h3></div>
}

const Contact = () => {
    return <div><h3>Contact</h3></div>
}

const navLinkStyles = ({isActive}) => ({
marginRight: 10,
color: isActive ? "blue": "red",
padding: '5px 10px',
textDecoration: isActive ? "underLine" : "none"
})


const MyRoutes = () => {

    return (<div>
   <BrowserRouter>
     <nav style={{marginLeft: 10, display: "flex", justifyContent: "flex-start"}}>
        <NavLink to="/home" style={navLinkStyles}>Home</NavLink>
        <NavLink to="/about" style={navLinkStyles}>About</NavLink>
        <NavLink to="/contact" style={navLinkStyles}>contact</NavLink>
        <NavLink to="/home/abc" style={navLinkStyles}>Abc</NavLink>
        <NavLink to="/home/pqr" style={navLinkStyles}>Pqr</NavLink>
    </nav>
     <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="abc" element={<Abc />}></Route>
          <Route path="pqr" element={<Pqr />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
     </Routes>
   </BrowserRouter>
    </div>)
}
export default MyRoutes