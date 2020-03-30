import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import CharactersList from './CharactersList';
import MiniLoader from './MiniLoader';

const URL_BASE = 'https://swapi.co/api/';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previous: null,
      next: null,
      people: [],
      films: {},
      loading: true
    };
  }

  async componentDidMount() {
    const people = await this.getData(URL_BASE + 'people');
    const films = await this.getData(URL_BASE + 'films');

    const memo = {};

    films.forEach((film) => {
      memo[film.url] = film.title;
    });

    this.setState({
      people: people,
      films: memo
    });

    console.log(this.state);
  }

  async getData(url) {
    this.setState({ loading: true });

    try {
      const res = await axios.get(url);
      const resource = url.split(URL_BASE)[1].split('/')[0];

      if (resource === 'people') {
        this.setState({
          previous: res.data.previous,
          next: res.data.next
        });
      }

      const result = res.data.results.map((item) => {
        if (resource === 'people') {
          return {
            name: item.name,
            films: item.films.sort()
          };
        } else if (resource === 'films') {
          return {
            title: `(${item.release_date.split('-')[0]}) ${item.title}`,
            url: item.url
          };
        }
      });

      this.setState({ loading: false });
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  handleNextPage = async (e) => {
    const people = await this.getData(this.state.next);
    this.setState({
      people: people
    });
  };

  handlePreviousPage = async (e) => {
    const people = await this.getData(this.state.previous);
    this.setState({
      people: people
    });
  };

  getFilm(url) {}

  render() {
    return (
      <div className='container'>
        <h1>Starwars</h1>
        <Nav
          previous={this.state.previous}
          next={this.state.next}
          onPrevious={this.handlePreviousPage}
          onNext={this.handleNextPage}
        />

        {this.state.loading ? (
          <MiniLoader />
        ) : (
          <CharactersList {...this.state}/>
        )}
      </div>
    );
  }
}

export default App;
