import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section
      className="bg-bg min-h-[calc(100dvh-80px)] flex items-center justify-center px-4 pt-20"
      aria-labelledby="error-heading"
    >
      <div className="text-center max-w-md animate-fade-in">
        <h1
          id="error-heading"
          className="text-accent text-6xl sm:text-8xl font-bold mb-4"
          aria-level={1}
        >
          404
        </h1>
        <h2 className="text-text text-2xl sm:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted text-lg mb-8 max-w-sm mx-auto leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been
          moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-accent border border-accent rounded-lg font-medium hover:bg-accent/10 hover:text-accentHover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;