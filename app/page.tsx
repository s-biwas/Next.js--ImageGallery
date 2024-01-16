"use client";
import { ChangeEvent, FormEvent, useState } from "react";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);

  const OnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error: any) {
      console.log("Error", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <form className="w-full md:w-1/2 mx-auto p-4 border rounded-lg shadow-lg">
        <label
          htmlFor="fileInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Choose a file:
        </label>
        <div className="flex items-center">
          <input
            type="file"
            id="fileInput"
            className="flex-1 appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800 focus:outline-none focus:shadow-outline"
          >
            Upload Photo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
