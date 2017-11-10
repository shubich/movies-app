import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Poster from './Poster';

export default class PersonDetails extends React.Component {
  componentDidMount() {
    const personId = this.props.match.params.id;

    if (!this.props.fetching) {
      this.props.getPersonDetailsAsync(personId);
      this.props.getFilmsWithCastAsync(personId);
      this.props.setSearchType('title');
    }
  }

  render() {
    return (
      (this.props.details.name || this.props.fetching) ?
        <div>
          {
            this.props.fetching ?
              <ReactLoading type="bars" delay={0} />
            :
              <div id="details">
                <Poster path={this.props.details.profile_path} />
                <div className="info">
                  <h2>
                    <span className="title text-primary">{this.props.details.name}</span>
                    <span className="rating">{this.props.details.popularity}</span>
                  </h2>
                  <p className="numbers">
                    {this.props.details.birthday + this.props.details.place_of_birth}
                  </p>
                  <p className="numbers">
                    {this.props.details.deathday}
                  </p>
                  <p className="text-basic">{this.props.details.biography}</p>
                </div>
              </div>
          }

        </div>
        :
        null
    );
  }
}

PersonDetails.propTypes = {
  fetching: PropTypes.bool.isRequired,
  getPersonDetailsAsync: PropTypes.func.isRequired,
  getFilmsWithCastAsync: PropTypes.func.isRequired,
  setSearchType: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  details: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    birthday: PropTypes.string,
    place_of_birth: PropTypes.string,
    deathday: PropTypes.string,
    biography: PropTypes.string,
    popularity: PropTypes.number,
  }).isRequired,
};
