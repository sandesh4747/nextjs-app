import { redirect } from "next/navigation";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;
  // if (id === "100") redirect("/product");
  // console.log(id);

  return (
    <div>
      <h1>This is product Detail Page</h1>
    </div>
  );
}
