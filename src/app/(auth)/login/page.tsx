import { Suspense } from 'react';
import LoginForm from '../../../components/login/LoginForm';
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
};

export default page;
