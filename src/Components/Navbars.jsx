import { Link } from "react-router-dom"
import "../App.css"
import kirti_stemsago from '../assets/kirti_stemsago.png';

const Navbars = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img className="logo" src={kirti_stemsago}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"/"}><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to={"/profil"}><a class="nav-link" href="#">Profil</a></Link>
              </li>
              <li class="nav-item">
                <Link to={"/keanggotaan"}><a class="nav-link" href="#">Keanggotaan</a></Link>
              </li>
              <li class="nav-item">
                <Link to={"/alumni"}><a class="nav-link" href="#">Alumni</a></Link>
              </li>
              <li class="nav-item">
                <Link to={"/contact"}><a class="nav-link" href="#">Contact</a></Link>
              </li>

              <li class="nav-item dropdown" >
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Materi
                </a>
                <ul class="dropdown-menu">
                  <li><Link to={"/materi/html_dasar"}><a class="dropdown-item" href="#">HTML Dasar</a></Link></li>
                  <li><Link to={"/materi/css_dasar"}><a class="dropdown-item" href="#">CSS Dasar</a></Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link to={"/materi/javascript_dasar"}><a class="dropdown-item" href="#">JavaScript Dasar</a></Link></li>
                </ul>
              </li>


            </ul>
            <form role="search" class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>


            <button type="button" class="btn btn-primary active">Learn</button>

          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbars;