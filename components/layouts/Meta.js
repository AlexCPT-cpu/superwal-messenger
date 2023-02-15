import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  );
};

Meta.defaultProps = {
  title: "Superwall Messenger",
  keyword:
    "Superwall Messenger",
  desc: "Superwall Messenger.",
};

export default Meta;
