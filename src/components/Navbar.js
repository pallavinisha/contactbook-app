import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (

       <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
          <div className="container">
              <Link to="/" className="navbar-brand">
                  Contact Book
              </Link>
              <div>
                  <Link to="/contacts/add" className="btn btn-light text-danger bg-love ml-auto">
                      Add New Contact
                      </Link >
                      
              </div>

       <div className="ui search">
           <div className="ui icon input">
               <input type="text" placeholder="Search Contact" className="prompt"  />
               <i className="search icon "></i>
               </div> 

       </div>

          </div>
        
       </nav>

    );
};

export default Navbar;
