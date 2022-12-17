import classes from './banner.module.css';

const Banner = () => {
  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: 'url("./images/Rectangle 5.png")' }}
    >
      <h1>Watch somthing incredible.</h1>
    </div>
  );
}
 
export default Banner;