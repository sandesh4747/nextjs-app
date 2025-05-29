"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Client() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>hello World component</h1>
      <button
        className="text-white bg-black px-4 py-2 rounded-lg cursor-pointer"
        onClick={() => router.push("/product")}
      >
        Go to product page
      </button>
    </div>
  );
}
