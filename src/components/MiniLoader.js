import React from 'react';
import Loading from '../assets/images/loading.gif';

function MiniLoader() {
  return (
    <div className='loading'>
      <img src={Loading} alt='Loading' />
    </div>
  );
}

export default MiniLoader;
