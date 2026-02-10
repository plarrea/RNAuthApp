import axios from 'axios';

const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.EXPO_PUBLIC_AUTH_API_KEY}`;

export async function createUser(email, password) {
  try {
    const response = await axios.post(SIGN_UP_URL, {
      email,
      password,
      returnSecureToken: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
