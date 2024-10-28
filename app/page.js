"use client";
import useFetch from "./hooks/useDataFetching";
const Home = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/users");
  console.log("🚀 ~ render ~ data:", data);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="text-center mt-[12%]">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-500 mb-4">
          THE BEST WAY TO WRITE HOOKS
        </h1>
        <p className="text-justify leading-relaxed text-2xl xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          The best way to write hooks in React enhances code readability,
          promotes reusability, and simplifies state management. Custom hooks
          encapsulate logic, making components cleaner and easier to maintain.
          They also facilitate sharing functionality across components,
          improving development efficiency and enabling better separation of
          concerns in your application.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
