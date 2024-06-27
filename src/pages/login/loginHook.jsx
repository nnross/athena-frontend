/* eslint-disable import/prefer-default-export */
import loginService from '../../services/loginService';

// eslint-disable-next-line max-len
export const UseGetAccount = (username, password, setError, setLoading, navigate, form, setDisabled) => {
  const payload = { username, password };

  loginService.getAccount(payload)
    .then((res) => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('accountId', res.accountId);
      window.localStorage.setItem('expiration', Date.now() + 1000 * 60 * 60);
      setLoading(0);
      navigate('/profile');
    })
    .catch((exception) => {
      if (exception.response.status === 401) {
        setError('incorrect username or password');
      } else {
        setError('an error has occurred');
      }
      setLoading(2);
      form.reset();
      setDisabled(false);
    });
};
