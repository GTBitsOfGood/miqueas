import React from 'react';
import SingleItemLogView from '../frontend/components/SingleItemView/SingleItemLogView';

export default function SingleViewLog({language}) {
  return (
    <div>
      <SingleItemLogView/>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </div>
  );
}
