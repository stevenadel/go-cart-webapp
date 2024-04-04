const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
      <h1 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">{title}</h1>
      <p className="text-s text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Heading;
