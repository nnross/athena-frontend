import profileService from "../../services/profileService";

export const UseCreateTask = (title, note, hours, minutes, token, setLoading, setError) => {
  const time = parseInt(hours) * 60 + parseInt(minutes)
  const payload = { title, note, time };

  profileService.createTask(payload, token)
    .then((res) => {
      setLoading(0);
    })
    .catch(() => {
      setError('an error has occurred while creating task');
      setLoading(2);
    })
};

export const UseGetTasks = (token, setTasks, setLoading, setError) => {
  profileService.getTasks(token)
    .then((res) => {
      setTasks(res);
      setLoading(0);
    })
    .catch(() => {
      setError('an error has occurred while getting tasks');
      setLoading(2);
    })
};