import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lime-50 px-4">
      <h1 className="text-7xl font-bold text-lime-600">
        {error?.status || 404}
      </h1>

      <h2 className="text-3xl font-bold mt-3">
        Oops! Something went wrong.
      </h2>

      <p className="text-gray-500 mt-3">
        {error?.statusText || error?.message}
      </p>

      <Link
        to="/"
        className="mt-8 bg-lime-500 text-white px-6 py-3 rounded-xl"
      >
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;