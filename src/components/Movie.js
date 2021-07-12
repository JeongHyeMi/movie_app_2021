import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, medium_cover_image, genres }) {

    return (
        <div className="movie">
            <Link to={{
                pathname: `movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    medium_cover_image,
                    genres
                }
            }}>
                <img src={medium_cover_image} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres_genre">{genre}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;