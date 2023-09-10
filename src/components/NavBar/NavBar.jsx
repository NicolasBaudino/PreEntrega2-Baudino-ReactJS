import CartWidget from "./CartWidget/CartWidget"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="/public/FotoNavBar.png" alt="logo"  width={140}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li>
                            3
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><CartWidget /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
  
  export default NavBar