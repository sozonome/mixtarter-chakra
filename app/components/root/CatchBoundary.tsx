import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";
import { useCatch } from "remix";

import Document from "./Document";
import Layout from "./layout";

// https://remix.run/docs/en/v1/api/conventions#catchboundary
const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
};

export default CatchBoundary;
