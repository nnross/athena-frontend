/* eslint-disable import/prefer-default-export */
import loginService from '../../services/loginService';

export const UseCreateAccount = (username, password, email, setError, setLoading) => {
  const payload = { username, password, email };

  loginService.createAccount(payload)
    .then((res) => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('accountId', res.accountId);
      window.localStorage.setItem('expiration', Date.now() + 1000 * 60 * 60);
      setLoading(0);
      window.location.reload();
    })
    .catch(() => {
      setError('an error has occurred');
      setLoading(2);
    });
};
