type JsonLdProp = {
  data: object;
};

const JsonLd = ({ data }: JsonLdProp) => {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

export default JsonLd;
