import { createClient } from "next-sanity";
import React from "react";

const client = createClient({
  projectId: "dv3tiz24",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default async function Articles({ params }) {
  const articles = await client.fetch(`*[_type == "post"]`);

  return (
    <div>
      <h1 className="main-font font-semibold text-3xl text-center text-american-red mt-2">
        The Blog
      </h1>
      <p>{JSON.stringify(articles)}</p>
    </div>
  );
}
