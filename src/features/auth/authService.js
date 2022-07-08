import axios from '../../api/axios';

const API_URL_REG = '/users';
const LOGOUT_URL = '/users/sign_out';
const LOGIN_URL = '/users/sign_in';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL_REG, userData);

  if (response.data.user) {
    const { user } = response.data;
    user.token = response.headers.authorization;
    axios.defaults.headers.common.Authorization = response.headers.authorization;
    localStorage.setItem('user', JSON.stringify(user));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);

  if (response.data.user !== undefined) {
    const { user } = response.data;
    user.token = response.headers.authorization;
    axios.defaults.headers.common.Authorization = response.headers.authorization;
    localStorage.setItem('user', JSON.stringify(user));
  }

  return response.data;
};

// Logout User

const logout = async (user) => {
  const { token } = user;

  if (token) {
    const config = {
      headers: {
        authorization: token,
      },
    };
    localStorage.removeItem('user');
    axios.defaults.headers.common.Authorization = null;
    await axios.delete(LOGOUT_URL, config);
  }
  return user;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
