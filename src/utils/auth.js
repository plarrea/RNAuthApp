import axios from 'axios';

async function authenticate(mode, email, password) {
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_AUTH_API_KEY}`;
    const response = await axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    });
    console.log('login success', !!response.data.idToken);
    return response.data.idToken;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createUser(email, password) {
  const token = await authenticate('signUp', email, password);
  return token;
}

export async function login(email, password) {
  const token = await authenticate('signInWithPassword', email, password);
  return token;
}
