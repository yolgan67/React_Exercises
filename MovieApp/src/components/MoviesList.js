import React from 'react'
import { Grid } from 'semantic-ui-react'
import MovieCard from './MovieCard'
import {HashLoader}from 'react-spinners'

export default function MoviesList({movieReducer,deleteMovie}) {
  // console.log("moviesList:",movieReducer)
  const emptyMessage=<p> There are no message yet</p>
  const movieList = 
    movieReducer.error.response
    ? (<h3>Error retrieving data!</h3>)
    // : (movieReducer.movies.map(movie =>{
    //  return  <MovieCard key={movie.id} movie={movie}/>})
    // )
    :<Grid>
    <Grid.Row columns={4}>
    {movieReducer.movies.map(movie =>{ return(
    <Grid.Column key={movie.id} style={{marginBottom:"15px"}}>
      <MovieCard movie={movie} deleteMovie={deleteMovie}/>
      </Grid.Column>)})}
    </Grid.Row>
    </Grid>
  return (
    <div>
      <HashLoader size ={50} color="red" loading={movieReducer.fetching}/>
      {movieReducer.length === 0 ? emptyMessage:movieList}</div>
  )
}

