import { useContext } from "react";
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";

import Layout from "./layout";
import Providers from "./Providers";

import StylesContext from "~/styles/StylesContext";

type DocumentProps = {
  children: React.ReactNode;
  title?: string;
};

const Document = ({ children, title }: DocumentProps) => {
  const styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        {styles?.map((style) => (
          <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
          />
        ))}
        <Links />
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default Document;
