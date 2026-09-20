import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="notFound">
      <p className="notFound__code">404</p>
      <h1 className="notFound__title">Page Not Found</h1>
      <p className="notFound__text">
        The page you&apos;re looking for may have moved, or the link may be
        incorrect.
      </p>
      <a className="notFound__link" href="/">
        Back to Home
      </a>
    </main>
  );
};

export default NotFound;
