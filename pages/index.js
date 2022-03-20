import React from "react";
import contact from "./contact";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div>index</div>
      <Link href="/contact">
      <a >Contact</a></Link>
    </>
  );
};

export default index;
