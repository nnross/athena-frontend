/* eslint-disable import/prefer-default-export */
import loginService from '../../services/loginService';

export const UseGetAccount = (username, password, setError, setLoading) => {
  const payload = { username, password };

  loginService.getAccount(payload)
    .then((res) => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('accountId', res.accountId);
      window.localStorage.setItem('expiration', Date.now() + 1000 * 60 * 60);
      setLoading(0);
    })
    .catch((exception) => {
      if (exception.response.status === 403) {
        setError('incorrect username or password');
      } else {
        setError('an error has occurred');
      }
      setLoading(2);
    });
};
