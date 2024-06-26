import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/posts">Posts</Link>
              </li>
            </ul>
        
          </div>
        </div>
      </nav>

    </>
  )
}
