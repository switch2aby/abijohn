import React from 'react';

const Header = (props) =>{
    return(
        <div>
        <div className="nav-overlay"></div>
       <div id="navigationHead" className="navigation-head closed">
       <div className="top-menu">
            <a id="search_nav_logo">
               {/*  <img src={props.tridionLogo} className="logo-slim" /> */}
            </a>
        </div>
    </div>
    <div className="d-table"></div>
</div>
    )
}

export default Header;