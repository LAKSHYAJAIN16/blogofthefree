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
      <h1 className="main-font font-bold text-3xl text-center text-black mt-2">
        04:58
      </h1>
      <div>
        <div className="bg-white rounded-2xl pl-4 pr-4 h-6 w-32 text-center">
          <p>🇺🇸 Election 2024</p>
        </div>
        </div>
      <p>
        {JSON.stringify(articles)}
      </p>
    </div>
  );
}
