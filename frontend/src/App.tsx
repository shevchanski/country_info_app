import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="flex justify-center gap-x-8 border-b border-gray-300 py-5 text-xl">
        <Link to={"/"} className="italic hover:underline">
          Home
        </Link>
        <Link to={"/countries"} className="italic hover:underline">
          Countries
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
