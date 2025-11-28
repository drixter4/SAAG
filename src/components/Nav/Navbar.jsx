import { useNavigate } from "react-router-dom";
import './navbar.css'
export default function Navbar() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse" data-header-hover="light">
        <div className="container-fluid">
          <div className="col-auto col-xxl-3 col-lg-2 me-lg-0 me-auto">
            <a className="navbar-brand" href="demo-business.html">
              <img
                src="images/SAAG/SAAG-LOGO-blanco.png"
                data-at2x="images/SAAG/SAAG-LOGO-blanco.png"
                alt=""
                style={{ scale: 1.5 }}
                className="default-logo"
              />
              <img
                src="images/SAAG/SAAG-LOGO-negro.webp"
                data-at2x="images/SAAG/SAAG-LOGO-negro.webp"
                alt=""
                style={{ scale: 1.5 }}
                className="alt-logo"
              />
              <img
                src="images/SAAG/SAAG-LOGO-negro.webp"
                data-at2x="images/SAAG/SAAG-LOGO-negro.webp"
                alt=""
                className="mobile-logo"
              />
            </a>
          </div>
          <div className="col-auto menu-order position-static">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav alt-font">
                <li className="nav-item">
                  <a href="demo-business.html" className="nav-link">Inicio</a>
                </li>
                {/* <li className="nav-item">
                  <a href="demo-business-about.html" className="nav-link">About</a>
                </li> */}
                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <a href="#" className="nav-link">Nuestras Marcas</a>
                  <i
                    className="fa-solid fa-angle-down dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                    <li>
                      <a className="dropdown-item" href="#bestune-models" data-bs-toggle="collapse" onClick={(e) => {
                        e.stopPropagation()
                      }}>
                        <i className="bi bi-car-front me-2"></i>Bestune
                        <i className="fa-solid fa-angle-right ms-2"></i>
                      </a>
                      <div className="collapse" id="bestune-models">
                        <ul className="list-unstyled ms-3">
                          <li><a href="#" className="dropdown-item">T77</a></li>
                          <li><a href="#" className="dropdown-item">B70</a></li>
                          <li><a href="#" className="dropdown-item">NAT</a></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#jim-models" data-bs-toggle="collapse" onClick={(e) => {
                        e.stopPropagation()
                      }}>
                        <i className="bi bi-car-front me-2"></i>Jim
                        <i className="fa-solid fa-angle-right ms-2"></i>
                      </a>
                      <div className="collapse" id="jim-models">
                        <ul className="list-unstyled ms-3">
                          <li><a href="#" className="dropdown-item">Booster</a></li>
                          <li><a href="#" className="dropdown-item">J-Box</a></li>
                          <li><a href="#" className="dropdown-item">J-Mix</a></li>
                        </ul>
                      </div>
                    </li>

                  </ul>
                </li>
                <li className="nav-item">
                  <a href="demo-business-clients.html" className="nav-link">Clients</a>
                </li>
                <li className="nav-item">
                  <a href="demo-business-pricing.html" className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="demo-business-blog.html" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="demo-business-contact.html" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-xxl-3 col-lg-2 text-end d-none d-sm-flex">
            <div className="header-icon">
              <div className="d-none d-xxl-inline-block me-25px xxl-me-10px">
                <div className="alt-font fs-15 xl-fs-13 widget-text fw-500">
                  <span className="w-35px h-35px bg-base-color d-inline-block lh-36 me-10px border-radius-100px">
                    <i className="feather icon-feather-phone me-10px"></i>
                  </span>
                  <a href="tel:1800222000" className="widget-text text-white-hover">1 800 222 000</a>
                </div>
              </div>
              {/* <div className="header-button">
                <a href="demo-business-contact.html" className="btn btn-very-small btn-transparent-white-light btn-rounded">
                  Get a quote
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}