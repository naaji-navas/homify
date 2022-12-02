import React from 'react'
import {Link} from "react-router-dom";

function Card() {
  return (
        <div class="card text-bg-dark mt-4 text-bold w-25 m-3">
          <Link to="/apartment">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYTIZYBTmjVxTHn8usxuwS8R9z6PCvz2urEAAtkDF&s" class="card-img" alt="..."/>
            <div class="d-flex card-img-overlay flex-column-reverse">
              <p class="card-text">This is a wider card with supporting text </p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
              <h5 class="card-title">Card title</h5>
            </div>
            </Link>
          </div>
  )
}

export default Card