import { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Signup = ({ className = 'signup', id = 'signup' }) => {
	const [submit, setSubmit] = useState(false);
	let image = 0;

	const handleClick = (e) => {
		e.preventDefault();
		setSubmit(true);
	}

	const handleLeftClick = (e) => {
		e.preventDefault();
		if (image == 0) {
			image = 3;
		} else {image =- 1}
	}

	const handleRightClick = (e) => {
		e.preventDefault();
		if (image == 3) {
			image = 0;
		} else {image =+ 1}
	}
	console.log(submit);

	return(
  <div className={className} id={id}>
		<h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
		<div className={`${className}__box`} id={`${id}__box`}></div>
		{submit ?
		(
			<>
				<div className={`${className}__controls`} id={`${id}__controls`}>
					<button className={`${className}__controls__left`} id={`${id}__controls__left`} onClick={handleLeftClick}></button>
					<button className={`${className}__controls__right`} id={`${id}__controls__right`} onClick={handleRightClick}></button>
				</div>
				<img src={`./././assets/character${image}.png`} />
				<div className={`${className}__continue`} id={`${id}__continue`}>
					<button className={`${className}__continue__button`} id={`${id}__continue__button`}>pick this starting character</button>
				</div>
			</>)
		:
			(<>
				<form className={`${className}__inputs`} id={`${id}__inputs`}>
					<input className={`${className}__inputs__username`} id={`${id}__inputs__username`} type="text" name="username" />
					<label className={`${className}__inputs__username__label`} id={`${id}__inputs__username__label`} htmlFor="username">username</label>
					<input className={`${className}__inputs__password`} id={`${id}__inputs__password`} type="text" name="password" />
					<label className={`${className}__inputs__password__label`} id={`${id}__inputs__password__label`} htmlFor="password">password</label>
					<input className={`${className}__inputs__confirm`} id={`${id}__inputs__confirm`} type="text" name="confirm" />
					<label className={`${className}__inputs__confirm__label`} id={`${id}__inputs__confirm__label`} htmlFor="confirm">confirm password</label>
					<input className={`${className}__inputs__email`} id={`${id}__inputs__email`} type="text" name="email" />
					<label className={`${className}__inputs__email__label`} id={`${id}__inputs__email__label`} htmlFor="email">email</label>
				</form>
				<div className={`${className}__back`} id={`${id}__back`}>
				<Link className={`${className}__back__button`} id={`${id}__back__button`} to="/"></Link>
				</div>
				<div className={`${className}__continue`} id={`${id}__continue`}>
					<button className={`${className}__continue__button`} id={`${id}__continue__button`} type="submit" onClick={handleClick}>create account</button>
				</div>
			</>)}
  </div>)
};

export default Signup;

Signup.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};