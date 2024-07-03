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

export const UseCheckUsername = (username, setUsernameTaken, setError, setLoading) => {
  loginService.checkUsername(username)
    .then((res) => {
      setUsernameTaken(res);
    })
    .catch(() => {
      setError('username check failed');
      setLoading(2);
    });
};

export const UseCheckEmail = (email, setEmailTaken, setError, setLoading) => {
  loginService.checkEmail(email)
    .then((res) => {
      setEmailTaken(res);
    })
    .catch(() => {
      setError('email check failed');
      setLoading(2);
    });
};

export const UseSetCharacter = async (character, token, setError, setLoading) => {
  await loginService.setCharacter(character, token)
    .then(() => {
      setLoading(0);
    })
    .catch(() => {
      setError('character selection failed');
      setLoading(2);
    });
};
