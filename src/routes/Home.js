import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {

  state = {
    isLoading: true,
    movies: [] // 1)
  };

  getMoviews = async () => { // 비동기 async는 await과 사용된다. 기다려라.
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {
      data: {
        data: { movies } // 2)
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    // this.setState({movies: movies}) // 앞의 movies -> state의 movies 1), 뒤의 movies는 2)
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    this.getMoviews();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <seciton className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                medium_cover_image={movie.medium_cover_image}
                genres={movie.genres}
                key={movie.id}
              />
            ))}
          </div>
        )}
      </seciton>
    );
  }
}

export default Home;
