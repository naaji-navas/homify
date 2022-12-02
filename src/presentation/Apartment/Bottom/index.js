import React from 'react'
import Button from './Button'

function index() {
  return (
    <div>
      <div className="w-100 d-flex justify-content-around mt-5">
          <button type="button" class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">13/40 Rooms</button>
          <button type="button" class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">2 KM <h6 className="h6">From your Location</h6></button>
      </div>
      <div className="">
          <Button/>
      </div>
    </div>
    
  )
}

export default index
