import { Suspense } from 'react';
import LoginForm from '../../../components/login/LoginForm';

export const dynamic = 'force-dynamic';

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
};

export default page;
