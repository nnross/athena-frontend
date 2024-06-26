/* eslint-disable import/prefer-default-export */
import loginService from '../../services/loginService';

export const UseCreateAccount = (username, email, password, setError, setLoading) => {
  const payload = { username, email, password };

  loginService.createAccount(payload)
    .then((res) => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('accountId', res.accountId);
      window.localStorage.setItem('expiration', Date.now() + 1000 * 60 * 60);
      setLoading(0);
    })
    .catch(() => {
      setError('an error has occurred');
      setLoading(2);
    });
};
