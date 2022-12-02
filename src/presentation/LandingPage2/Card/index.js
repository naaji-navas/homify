import React from 'react'

function Card() {
  return (
        <div class="card text-bg-dark mt-4 text-bold w-25 m-3">
            <img src="https://media.istockphoto.com/id/587885028/photo/very-neat-american-house-with-gorgeous-outdoor-landscape.jpg?s=612x612&w=0&k=20&c=wSsASxjQV93iqWX0FUPq-k0tY1PKT14yq3oRmCK_iq4=" class="card-img" alt="..."/>
            <div class="d-flex card-img-overlay flex-column-reverse">
              <p class="card-text">This is a wider card with supporting text </p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
  )
}

export default Card