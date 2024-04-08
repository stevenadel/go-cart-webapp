function PageNotFound() {
  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="row">
        <h1 className="text-6xl font-bold text-brandYellow">404</h1>
        <div className="bg-cover h-96" style={{ backgroundImage: "url('public/not-found.gif')" }}></div>
        <h2 className="text-4xl font-bold text-secondary">Looks like you're lost!</h2>
        <p className="text-xl text-gray-600 mt-4">The page you're looking for isn't available.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
