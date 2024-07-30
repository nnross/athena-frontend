/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { UseGetTasks } from './profileHook';

const Tasks = ({ className = 'tasks', id = 'tasks', token, setLoading, setError, newTask }) => {
  const tasklist = [];
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    UseGetTasks(token, setTasks, setLoading, setError);
    console.log(tasks);
  }, [newTask]);

  tasks.map((task) => tasklist.push(
    <div className={`${className}__list`} id={`${id}__list`} key={task._id}>
      <div className={`${className}__list__task`} id={`${id}__list__task`}>
        <p className={`${className}__list__task__text`} id={`${id}__list__task__text`}> {task.title} </p>
      </div>
      <div className={`${className}__list__note`} id={`${id}__list__note`}>
        <p className={`${className}__list__note__text`} id={`${id}__list__note__text`}>{task.note}</p>
      </div>
      <div className={`${className}__list__buttons`} id={`${id}__list__buttons`}>
        <button className={`${className}__list__buttons__delete`} id={`${id}__list__buttons__delete`} aria-label="delete" />
        <button className={`${className}__list__buttons__done`} id={`${id}__list__buttons__done`} aria-label="done" />
      </div>
    </div>,
  ));
  return (
    <div className={`${className}`} id={`${id}`}>
      {tasklist}
    </div>
  );
};

export default Tasks;

Tasks.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  tasks: propTypes.arrayOf(propTypes.any),
};
