import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const item = useSelector((state)=>state.cart)
  return (
    <div className='nav-bar'>
        <nav className="navbar navbar-expand-lg container ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active list-item home" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active home" aria-current="page" href="/">Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active home" aria-current="page" href="/">Cartitems:&nbsp; {item.length}</a>
        </li>
        
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header