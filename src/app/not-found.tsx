import Image from 'next/image';

export const metadata = {
  title: 'Page Not Found',
};

const notFound = () => {
  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2em',
        }}
      >
        <h2>Page not found</h2>
        <Image
          src='/images/not-found-1024x1024.png'
          alt='image-page-not-found'
          width={300}
          height={300}
          sizes='300px'
          priority={true}
        />
      </div>
    </section>
  );
};

export default notFound;
