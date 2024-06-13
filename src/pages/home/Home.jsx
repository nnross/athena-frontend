import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Home = ({ className = 'home', id = 'home' }) => (
  <div className={className} id={id}>
    <h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
    <button className={`${className}__button`} id={`${id}__button`}>new game</button>
    <button className={`${className}__button`} id={`${id}__button`}>continue</button>
    <Link className={`${className}__about`} id={`${id}__about`} to="/about">
      <button className={`${className}__button`} id={`${id}__button`}>learn more</button>
    </Link>
    <button className={`${className}__github`} id={`${id}__github`}>@</button>
  </div>
);

export default Home;

Home.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};