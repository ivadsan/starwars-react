import React, { Component } from 'react';
import '../assets/styles/components/CharactersList.scss';

function CharactersList(props) {
  return (
    <table className='report'>
      <thead>
        <tr className='title'>
          <td className='col1'>Character</td>
          <td className='col2'>Films</td>
        </tr>
      </thead>
      <tbody>
        {props.people.map((item) => (
          <tr className='row' key={item.name}>
            <td className='col1'>{item.name}</td>
            <td>
              <ul>
                {item.films.map((film) => (
                  <li key={Math.random()}>{props.films[film]}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CharactersList;
