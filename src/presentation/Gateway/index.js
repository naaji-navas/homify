import React from 'react'
import {Link} from "react-router-dom";

function index() {
  return (
    <Link to='./apartment1' className="d-flex justify-content-center align-items-center p-5">
        <img className="w-50" src="https://www.armemberplugin.com/wp-content/uploads/edd/2020/06/armember_payment_methods.jpg" alt="" />
    </Link>
  )
}

export default index