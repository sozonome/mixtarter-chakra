import Document from "./Document";

// https://remix.run/docs/en/v1/api/conventions#errorboundary
const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
    </Document>
  );
};

export default ErrorBoundary;
