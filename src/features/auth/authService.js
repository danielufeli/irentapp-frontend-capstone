const URL = 'http://127.0.0.1:3000/users';

// Register user
const register = async (userData) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();

  console.log(data);

  if (data) {
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  return data;
};

const authService = {
  register,
};

export default authService;
