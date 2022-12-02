import React from 'react'
import {Link} from "react-router-dom";

const index = () => {
  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="h1 text-center mb-3">Register your Home</h1>
        <form class="w-50">
  
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Location</label>
      </div>
    </div>
  </div>

  
  <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Property name</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Email</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="email" id="form6Example5" class="form-control" />
    <label class="form-label" for="form6Example5">Rooms</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Phone</label>
  </div>

  
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
    <label class="form-label" for="form6Example7">Additional information</label>
  </div>

  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label class="form-check-label" for="form6Example8">Accept Terms & Conditions </label>
  </div>

  
  <Link to='/apartment2
  +6\[' type="submit" class="btn btn-primary btn-block mb-4 text-dark">Submit</Link>
</form>
    </div>
  )
}

export default index