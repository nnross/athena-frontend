/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Header from '../../components/Header';
import Tasks from './Tasks'
import TaskForm from './TaskForm';

const Profile = ({ className = 'profile', id = 'profile' }) => {
  const [create, setCreate] = useState(false);
  const [remove, setRemove] = useState('');
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);
  const [newTask, setNewTask] = useState(0);
  const [done, setDone] = useState(false);
  //jatka tästä, tee sillee että on tää done ja jos se poistetaa nii false jos se on done nii true
  //sit sen perusteella menee db et pitääks käyttäjält poistaa rahaa tai lisää jonku verra rahaa

  const token = localStorage.getItem('token');

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
          <Tasks token={token} setLoading={setLoading} setError={setError} newTask={newTask} setRemove={setRemove} />
        </div>
        <div className={`${className}__money`} id={`${id}__money`}>
          <img className={`${className}__money__img`} src="../src/assets/money.svg" alt="" />
          <p className={`${className}__money__text`}>29387</p>
        </div>
        <div className={`${className}__form`} id={`${id}__form`}>
          { create ? <TaskForm setCreate={setCreate} setLoading={setLoading} setError={setError} token={token} newTask={newTask} setNewTask={setNewTask} /> : null }
          { remove !== "" ? null : null }
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
