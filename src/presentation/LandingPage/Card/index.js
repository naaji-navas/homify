import React from 'react'

function Card() {
  return (
        <div class="card text-bg-dark mt-4 text-bold w-25 m-3">
            <img src="https://thumbs.dreamstime.com/b/real-estate-agent-offer-house-represented-model-wide-banner-composition-bokeh-background-63596018.jpg" class="card-img" alt="..."/>
            <div class="d-flex card-img-overlay flex-column-reverse">
              <p class="card-text">This is a wider card with supporting text </p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
  )
}

export default Card