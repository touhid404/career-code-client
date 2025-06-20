import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';

const NavBar = () => {
  const {user,signOutUser} = use(AuthContext);
  const links = <>
      <NavLink className='ml-2' to='/'>Home</NavLink>
      <NavLink className='ml-2' to='/'>About</NavLink>

      {
        user && <NavLink className='ml-2' to='/myapplications'>My Applications</NavLink>
      }
     

  </>
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log('User logged out successfully');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });

  }
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
           links
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-blue-500">CAREER CODE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
             links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <button onClick={handleLogout}  className='btn btn-primary'>Logout</button>
      :
      <>
      <Link to='/register' className='btn btn-primary ml-2'>Register</Link>
      <Link to='/login' className='btn btn-primary ml-2'>Login</Link>
      </>
    }
  </div>
</div>
    );
};

export default NavBar;