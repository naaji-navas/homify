import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function index() {
  return (
    <div className="w-25">
       <div className="d-flex flex-column">
          <h2 className="p-2">location : </h2>
          <div class="dropdown">
              <button class="text-dark btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                CUSAT
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Rajagiri</a></li>
                <li><a class="dropdown-item" href="#">ILAHIA</a></li>
                <li><a class="dropdown-item" href="#">MEC</a></li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeholder="Search address"/>
                <button class="btn btn-outline-primary" type="submit"><SearchIcon/></button>
              </form>
          </div>
       </div>
    </div>
  )
}

export default index