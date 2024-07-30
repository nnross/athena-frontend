/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Header from '../../components/Header';
import Tasks from '../../components/Tasks'
import TaskForm from '../../components/TaskForm';

const Profile = ({ className = 'profile', id = 'profile' }) => {
  const [task, setTask] = useState('');
  const [create, setCreate] = useState(false);
  console.log(create);
  return (
    <>
      <Header />
      <div className={className} id={id}>
        <div className={`${className}__img`} id={`${id}__img`}>
          <img className={`${className}__img__character`} src="../src/assets/character3.png" alt="" />
        </div>
        <div className={`${className}__stats`} id={`${id}__stats`}>
          <p className={`${className}__stats__name`}>username</p>
          <p className={`${className}__stats__power`}>
            <span>power</span>
            <span>293539</span>
          </p>
          <p className={`${className}__stats__rank`}>
            <span>rank</span>
            <span>33</span>
          </p>
        </div>
        <div className={`${className}__badges`} id={`${id}__badges`}>
          <img className={`${className}__badges__img`} src="../src/assets/badge1.svg" alt="" />
        </div>
        <div className={`${className}__title`} id={`${id}__title`}>
          <p className={`${className}__title__text`}>TASKS</p>
        </div>
        <div className={`${className}__add`} id={`${id}__add`}>
          <p className={`${className}__add__text`}>add new task</p>
          <button className={`${className}__add__button`} type="button" aria-label="button" onClick={() => setCreate(true)}/>
        </div>
        <div className={`${className}__divider`} id={`${id}__divider`} />
        <div className={`${className}__tasks`} id={`${id}__tasks`}>
          <Tasks tasks={['eka', 'toka', 'kokeillaan pidempää nimee']} />
        </div>
        <div className={`${className}__money`} id={`${id}__money`}>
          <img className={`${className}__money__img`} src="../src/assets/money.svg" alt="" />
          <p className={`${className}__money__text`}>29387</p>
        </div>
        <div className={`${className}__form`} id={`${id}__form`}>
          { create ? <TaskForm setCreate={setCreate} /> : null }
        </div>

      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
