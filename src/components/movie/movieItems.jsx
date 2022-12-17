import classes from './movieItems.module.css';

const MovieItem = ({movie}) => {
  const { Title, Poster } = movie;
  return ( 
    <div className={classes.wrapper} style={{backgroundImage: `url(${Poster})`}}>
      <h2>{Title}</h2>
    </div>
   );
}
 
export default MovieItem;