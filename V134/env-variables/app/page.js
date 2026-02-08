"use client";
import Image from "next/image";

export default function Home() {
  // console.log("ID:", process.env.ID);
  return (
    <div>
      Hey this is the home page! Id: {process.env.NEXT_PUBLIC_ID} and Secret: {process.env.SECRET} and name: {process.env.NEXT_PUBLIC_NAME}
    </div>
  );
}
