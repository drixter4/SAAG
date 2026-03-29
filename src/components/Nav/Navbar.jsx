import "./navbar.css";
export default function Navbar({ transparent = true }) {
  const headerClass = transparent
    ? "navbar navbar-expand-lg header-transparent bg-transparent header-reverse"
    : "navbar navbar-expand-lg bg-white header-normal";
  return (
    <header>
      <nav className={headerClass} data-header-hover="light">
        <div className="container-fluid">
          <div className="col-auto col-xxl-3 col-lg-2 me-lg-0 me-auto">
            <a className="navbar-brand" href="#">
              <img
                src={
                  transparent
                    ? "images/SAAG/BESTUNE logo blanco.png"
                    : "images/SAAG/BESTUNE-logo.png"
                }
                className="default-logo"
                style={{ scale: 2 }}
              />
              <img
                src="images/SAAG/BESTUNE-logo.png"
                className="alt-logo"
                style={{ scale: 1.5  }}
              />
              <img
                src="images/SAAG/BESTUNE-logo.png"
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
                  <a href="/" className="nav-link">
                    Inicio
                  </a>
                </li>
               
                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <a href="#" className="nav-link">
                    Nuestras Marcas
                  </a>
                  <i
                    className="fa-solid fa-angle-down dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/autos/bestune">
                        <i className="bi bi-car-front me-2"></i>Bestune
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/autos/jim">
                        <i className="bi bi-car-front me-2"></i>Jim
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-with-icon-style02">
                <a href="#" className="nav-link">Postventa</a>
                <i
                    className="fa-solid fa-angle-down dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>

                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a href="/garantia"> Garantia</a>
                    </li>
                    <li>
                      <a href="/mantenimiento"> Mantenimiento</a>
                    </li>
                    <li>
                      <a href="/seguro">Seguros</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="/accesorios" className="nav-link">
                    Accesorios
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/distribuidores" className="nav-link">
                    Distribuidores
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contacto" className="nav-link">
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/asistencia" className="nav-link">Linea 800</a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-auto col-xxl-3 col-lg-2 text-end d-none d-sm-flex" >
            <div className="header-icon me-4">
              <div className="d-none d-xxl-inline-block me-25px xxl-me-10px">
                <div className="alt-font fs-15 xl-fs-13 widget-text fw-500">
                  {/* <span className="w-35px h-35px bg-base-color d-inline-block lh-36 me-10px border-radius-100px">
                    <i className="feather icon-feather-phone me-10px"></i>
                  </span>
                  <a href="tel:8000570137" className="widget-text text-white-hover">800 057 0137</a> */}
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
