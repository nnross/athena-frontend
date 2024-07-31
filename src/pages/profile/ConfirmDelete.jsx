import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { UseDeleteTask } from './profileHook';

const ConfirmDelete = ({ className = 'confirmDelete', id = 'confirmDelete' },token, setRemove, remove, setLoading, setError, newTask, setNewTask) => {

    const handleDelete = (e) => {
      setLoading(1);
      e.preventDefault();
      UseDeleteTask(
        remove,
        token,
        setError,
        setLoading,
        newTask,
        setNewTask,
      )
      setRemove('');
    }
  
  return (
    <div className={`${className}`} id={`${id}`}>
      <div className={`${className}__box`} id={`${id}__box`}>
        <p className={`${className}__box__title`} id={`${id}__box__title`}>WARNING</p>
        <p className={`${className}__box__info`} id={`${id}__box__info`}>you are about to delete a task</p>
        <p className={`${className}__box__info2`} id={`${id}__box__info2`}>this action costs</p>
        <div className={`${className}__box__money`} id={`${id}__box__money`}>
          <img className={`${className}__box__money__img`} id={`${id}__box__money__img`} src="../../../assets/money.scg" />
          <p className={`${className}__box__money__amount`} id={`${id}__box__money__amount`}>20</p>
        </div>
        <div className={`${className}__box__buttons`} id={`${id}__box__buttons`}>
          <button className={`${className}__box__buttons__back`} type="button" aria-label="back" onClick={() => setRemove('')}/>
          <button className={`${className}__box__buttons__delete`} type="button" onClick={handleDelete}>confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;

ConfirmDelete.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  tasks: propTypes.arrayOf(propTypes.any),
};
