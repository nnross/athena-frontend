import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const About = ({ className = 'about', id = 'about' }) => (
  <div className={className} id={id}>
    <h1 className={`${className}__title`} id={`${id}__title`}>About Page</h1>
    <Link className={`${className}__back`} id={`${id}__back`} to="/">
      <button className={`${className}__back__button`} id={`${id}__back__button`}>back</button>
    </Link>
  </div>
);

export default About;

About.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};