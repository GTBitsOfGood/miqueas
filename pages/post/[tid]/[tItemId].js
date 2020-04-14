import React from 'react';
import { useRouter } from 'next/router';
import SingleItemLogView from '../../../frontend/components/SingleItemView/SingleItemLogView';
import {getTransaction} from '../../../frontend/actions/Transaction';

const  SingleItem = () => {
  const router = useRouter()
  const { tid, tItemId } = router.query
    console.log(tid);
    
    return (
        <div>
            <SingleItemLogView />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
        </div>
    )
}

export default SingleItem