import React from 'react'
import Features from './Features'
function index() {
  return (
    <div className="d-flex flex-column">
        <h1 className="h1 mb-3">Olive Homes</h1>
        <div className="d-flex">
            <div className="imae-grid d-flex w-25">
                <div className="d-flex flex-column me-2">
                    <img className="mb-2" src="https://imgs.search.brave.com/AnOSLTYECmtsfDX-st1IOCKWrU8jGEncX8VjOOzE12s/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/VE8xeW1nSElGSldj/bWs3QkMxeFZRSGFF/NyZwaWQ9QXBp" alt="" />
                    <img src="https://imgs.search.brave.com/AnOSLTYECmtsfDX-st1IOCKWrU8jGEncX8VjOOzE12s/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/VE8xeW1nSElGSldj/bWs3QkMxeFZRSGFF/NyZwaWQ9QXBp" alt="" />
                </div>
                <div className="d-flex flex-column">
                    <img className="mb-2" src="https://imgs.search.brave.com/AnOSLTYECmtsfDX-st1IOCKWrU8jGEncX8VjOOzE12s/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/VE8xeW1nSElGSldj/bWs3QkMxeFZRSGFF/NyZwaWQ9QXBp" alt="" />
                    <img src="https://imgs.search.brave.com/AnOSLTYECmtsfDX-st1IOCKWrU8jGEncX8VjOOzE12s/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/VE8xeW1nSElGSldj/bWs3QkMxeFZRSGFF/NyZwaWQ9QXBp" alt="" />
                </div>
            </div>
            <div className="ms-5 text-center">
                <h3 className="h3 mb-4">Features</h3>
                <div className="d-flex">
                    <Features />
                    <Features/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index