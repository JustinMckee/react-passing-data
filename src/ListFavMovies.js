import React, { Component } from 'react';

class ListFavMovies extends Component {
	render(){
      //profiles,users,movies
    	return(
          <ul>
          	{this.props.profiles.map(profile=>{
            	const userName = this.props.users[profile.userID].name;
      			const movieName = this.props.movies[profile.favoriteMovieID].name;
      			return (
                 <li key={profile.userID}>{userName} likes the movie {movieName}</li>	
                )
            })}
          </ul>
        )
    }
}
export default ListFavMovies;