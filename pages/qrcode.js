import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { useMediaQuery } from 'react-responsive'

 

const Test  = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const handleScan = (data) => {
      if (data) {
        console.log(data);
        //window.location.assign('/');
      }
    }
      
    const handleError = err => {
        console.error(err)
    }

    let winWidth = '70%'
    if (isTablet) {
      winWidth = '80%'
    }
    if (isDesktopOrLaptop) {
      winWidth = '90%'
    }
    return (
        <div>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: winWidth }}
            />
        </div>
    )
}


export default Test