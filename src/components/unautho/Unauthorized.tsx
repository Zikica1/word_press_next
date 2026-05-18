'use client';

import { useRouter } from 'next/navigation';

const Unauthorized = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/login');
  };

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </section>
  );
};

export default Unauthorized;
