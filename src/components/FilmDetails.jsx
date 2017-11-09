import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Poster from './Poster';

export default class FilmDetails extends React.Component {
  componentDidMount() {
    if (!this.props.fetching) {
      this.props.getFilmDetails();
      this.props.getSimilarFilms();
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentId = this.props.match.params.id;
    const nextId = nextProps.match.params.id;

    if (currentId !== nextId) {
      this.props.getFilmDetails(nextId);
      this.props.getSimilarFilms(nextId);
    }
  }

  render() {
    return (
      (this.props.details.title || this.props.fetching) ?
        <div>
          {
            this.props.fetching ?
              <ReactLoading type="bars" delay={0} />
            :
              <div id="details">
                <Poster path={this.props.details.poster_path} />
                <div className="info">
                  <h2>
                    <span className="title text-primary">{this.props.details.title}</span>
                    <span className="rating">{this.props.details.vote_average}</span>
                  </h2>
                  <p className="genre text-basic">{this.props.details.genres}</p>
                  <p className="numbers">
                    <span className="release-year">{this.props.details.release_date}</span>
                    <span className="duration">{this.props.details.runtime}</span>
                  </p>
                  <p className="description text-basic">{this.props.details.overview}</p>
                </div>
              </div>
          }

        </div>
        :
        null
    );
  }
}

FilmDetails.propTypes = {
  fetching: PropTypes.bool.isRequired,
  getFilmDetails: PropTypes.func.isRequired,
  getSimilarFilms: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  details: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
};
