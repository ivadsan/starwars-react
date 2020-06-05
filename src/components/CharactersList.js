import React, { Component } from 'react';
import '../assets/styles/components/CharactersList.scss';

function CharactersList(props) {
  return (
    <section className='report'>
        <div className='report__row'>
          <div className='report__title'>Character</div>
          <div className='report__title'>Films</div>
        </div>
        {props.people.map((item) => (
        <div className='report__row'>
          <div>{item.name}</div>          
          <div>
            <ul>
              {item.films.map((film,key) => (
                <li key={key}>{props.films[film]}</li>
                ))}
            </ul>
          </div>
        </div>
          ))}
    </section>
  );
}

export default CharactersList;
