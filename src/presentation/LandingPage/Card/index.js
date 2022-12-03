import React from 'react'
import {Link} from "react-router-dom";

function Card() {
  return (
        <div class="card text-bg-dark mt-4 text-bold w-25 m-3">
            <Link to="/apartment">
              <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg" class="card-img" alt="..."/>
              <div class="d-flex card-img-overlay flex-column-reverse">
                <p class="card-text">Abetter stay for collage students</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
                <h5 class="card-title">Olive Homes</h5>
              </div>
            </Link>
          </div>
  )
}

export default Card