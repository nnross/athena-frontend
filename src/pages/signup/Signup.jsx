import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Signup = ({ className = 'signup', id = 'signup' }) => {
	const [submit, setSubmit] = useState(false);
	const [character, setCharacter] = useState('');
	const [image, setImage] = useState(1);

	const handleClick = (e) => {
		e.preventDefault();
		setSubmit(true);
	}

	const handleLeftClick = (e) => {
		e.preventDefault();
		setImage(prevImage => prevImage === 1 ? 3 : prevImage - 1);
	}

	const handleRightClick = (e) => {
		e.preventDefault();
		setImage(prevImage => prevImage === 3 ? 1 : prevImage + 1);
	}

	useEffect(() => {
		setCharacter(`../src/assets/character${image}.png`);
	},[image]);
	console.log(submit);
	console.log(image);
	console.log(character);

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
				<div className={`${className}__character`} id={`${id}__character`}>
					<img className={`${className}__character__img`} id={`${id}__character__img`} src={character} />
				</div>
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