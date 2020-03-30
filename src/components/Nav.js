import React from 'react';

function Nav(props) {
  return (
    <nav>
      {props.previous && (
        <button className='btn' onClick={props.onPrevious}>
          Previous
        </button>
      )}
      {props.next && (
        <button className='btn' onClick={props.onNext}>
          Next
        </button>
      )}
    </nav>
  );
}

export default Nav;
