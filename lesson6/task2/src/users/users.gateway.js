const baseUrl = 'https://api.github.com/users';

const getUserData = userName =>
  fetch(`${baseUrl}/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });

export default getUserData;
