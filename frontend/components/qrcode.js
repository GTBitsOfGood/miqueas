import React, { Component, useState } from 'react';
import dynamic from 'next/dynamic';
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });
import { useMediaQuery } from 'react-responsive';
import Button from 'react-bootstrap/Button';
import translate from './translate.js';
import {searchQuery} from '../actions/searchQuery';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActiveLink from './ActiveLink.js';


const Test = ({language, transactionState, setTransactionState}) => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const [category, setCategory] = useState(translate("Category", language));
    const [name, setName] = useState(translate("pants", language));

    const handleScan = async (data) => {
      if (data) {
        let translations = data.split("(");
        setName(translate(translations[0], language));
        const item = await searchQuery(translations[0]);
        // console.log(item);
        setCategory(translate(item.category, language));
      }
    }

    function handleNext() {
      let transaction = transactionState;
      transaction.transactionItems.push({
        item: {
          name: name,
          category: category,
          gender: "",
          typeColor: "",
          size: "",
          location: "",
        },
        recipient: "",
        quantityChanged: 0,
        expiration_date: 0
      });
      setTransactionState(transaction);
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
        <div style = {{'paddingTop': '15%'}}>
          <Button variant={'outline-secondary'} size={'md'} block>
            {category}
          </Button>
          <Button variant={'outline-secondary'} size={'md'} block>
            {name}
          </Button>
          <ActiveLink href='/transaction'>
            <Button onClick = {() => handleNext()} size={'md'}>
              Next
            </Button>
          </ActiveLink>
        </div>
      </div>
    )
}


export default Test;
