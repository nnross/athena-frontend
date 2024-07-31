/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { UseCreateTask } from './profileHook';

const TaskForm = ({ className = 'taskForm', id = 'taskForm', setCreate, setLoading, setError, token, newTask, setNewTask }) => {
    const restrictNumberInput = (e) => {
      const value = e.target.value;
      e.target.value = value.replace(/[e\+\-]/gi, '');
    }

    const handleCreate = (e) => {
      setLoading(1);
      e.preventDefault();
      const values = e.target.elements;
      UseCreateTask(
        values[0].value,
        values[1].value,
        values[2].value,
        values[3].value,
        token,
        setError,
        setLoading,
        newTask,
        setNewTask,
      )
      setCreate(false);
    }
  
  return (
    <div className={`${className}`} id={`${id}`}>
      <div className={`${className}__form`} id={`${id}__form`}>
        <p className={`${className}__form__text`} id={`${id}__form__text`}>NEW TASK</p>
        <form className={`${className}__form__inputs`} id={`${id}__form__inputs`} onSubmit={handleCreate}>
          <input className={`${className}__form__inputs__title`} id={`${id}__form__inputs__title`} type="text" name="task" autoComplete="off" required />
          <label className={`${className}__form__inputs__title__label`} id={`${id}__form__inputs__title__label`} htmlFor="task">task</label>
          <input className={`${className}__form__inputs__note`} id={`${id}__form__inputs__note`} type="text" name="note" autoComplete="off" />
          <label className={`${className}__form__inputs__note__label`} id={`${id}__form__inputs__note__label`} htmlFor="note">note (optional & private)</label>
          <div className={`${className}__form__inputs__time`} id={`${id}__form__inputs__time`}>
            <label className={`${className}__form__inputs__time__label`} id={`${id}__form__inputs__time__label`} htmlFor="time">time</label>
            <div className={`${className}__form__inputs__time__input`}>
              <input className={`${className}__form__inputs__time__input__h`} id={`${id}__form__inputs__time__input__h`} type="number" min="0" max="5" placeholder="HH" name="hours" title="hours between 0 and 5" autoComplete="off" onInput={restrictNumberInput} required />
              <p>:</p>
              <input className={`${className}__form__inputs__time__input__m`} id={`${id}__form__inputs__time__input__m`} type="number" min="0" max="59" placeholder="MM" name="minutes" title="minutes between 0 and 59" autoComplete="off" onInput={restrictNumberInput} required />
            </div>
          </div>
        </form>
        <div className={`${className}__form__buttons`} id={`${id}__form__buttons`}>
          <button className={`${className}__form__buttons__back`} type="button" aria-label="back" onClick={(e) => setCreate(false)}/>
          <button className={`${className}__form__buttons__submit`} type="submit" form={`${id}__form__inputs`}>create</button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;

TaskForm.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  tasks: propTypes.arrayOf(propTypes.any),
};
