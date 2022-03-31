import React from "react";
import { Card, Button, Image, Icon } from "semantic-ui-react";
import {Link} from 'react-router-dom'

const MovieCard = ({ movie,deleteMovie}) => (
  <Card>
    {/* console.log("props",props.movie) */}
    <Image src={movie.cover} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <Button.Group>
        <Button animated color='red' size='mini' onClick={()=>{deleteMovie(movie.id)}} >
          <Button.Content visible>Del</Button.Content>
          <Button.Content hidden>
            <Icon name="trash alternate" />
          </Button.Content>
        </Button>
        <Button animated color='primary' size='mini' as={Link} to={`/movies/new/${movie.id}`}>
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name="edit" />
          </Button.Content>
        </Button>
      </Button.Group>
    </Card.Content>
  </Card>
);

export default MovieCard;
