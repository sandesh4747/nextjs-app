"use-client";
import React, { Suspense } from "react";
import TodoList from "../_components/TodoList";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1 className="text-red-500 font-medium">Welcome To Todo Page</h1>
      <Link href={"/form/add"}>
        <button className="my-2 px-4 text-white bg-black rounded-lg">
          Add todo
        </button>
      </Link>
      <Suspense>
        {" "}
        <TodoList fallback={<h1>Loading...</h1>} />
      </Suspense>
    </div>
  );
}
