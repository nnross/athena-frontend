import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Login = ({ className = 'login', id = 'login' }) => (
  <div className={className} id={id}>
		<h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
		<div className={`${className}__box`} id={`${id}__box`}></div>
		<form className={`${className}__inputs`} id={`${id}__inputs`}>
			<input className={`${className}__inputs__username`} id={`${id}__inputs__username`} type="text" name="username"/>
			<label className={`${className}__inputs__username__label`} id={`${id}__inputs__username__label`} htmlFor="username">username</label>
			<input className={`${className}__inputs__password`} id={`${id}__inputs__password`} type="text" name="password"/>
			<label className={`${className}__inputs__password__label`} id={`${id}__inputs__password__label`} htmlFor="password">password</label>		</form>
		<div className={`${className}__back`} id={`${id}__back`}>
		<Link className={`${className}__back__button`} id={`${id}__back__button`} to="/"></Link>
		</div>
		<div className={`${className}__continue`} id={`${id}__continue`}>
			<button className={`${className}__continue__button`} id={`${id}__continue__button`}>log in</button>
		</div>
  </div>
);

export default Login;

Login.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};