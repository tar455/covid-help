import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Covid-Help</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/help">Do Help</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/needs">Need Help</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search Location" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {/* <form className="d-flex me-2">
                  <button className="btn btn-outline-success" type="submit">Login</button>
                </form> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;