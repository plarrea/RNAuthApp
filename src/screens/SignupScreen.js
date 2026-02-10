import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import useAuth from '../store/use-auth';
import { createUser } from '../utils/auth';

function SignupScreen() {
  const { authenticate } = useAuth();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    const token = await createUser(email, password);
    if (token) {
      authenticate(token);
    } else {
      Alert.alert(
        'Failed to sign up',
        'Could not create user. Please check your input or try again.',
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
