import React, { Component, useState } from 'react';
import dynamic from 'next/dynamic';
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });
import { useMediaQuery } from 'react-responsive';
import Button from 'react-bootstrap/Button';

 

const Test  = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const [category, setCategory] = useState("Category");
    const [name, setName] = useState("Name");

    const handleScan = (data) => {
      if (data) {
        console.log(data);
        setName(data);
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
        <div style = {{'paddingTop': '25%'}}>
          <Button variant={'outline-secondary'} size={'md'} block> 
            {category} 
          </Button>
          <Button variant={'outline-secondary'} size={'md'} block> 
            {name} 
          </Button>
          <Button>
            Next
          </Button>
        </div>
      </div>
    )
}


export default Test;