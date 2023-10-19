import Image from "next/image";
import Featured from "./components/featured/featured";
import Category from "./components/category/category";
import Menu from "./components/menu/menu";
import Cardlist from "./components/cardlist/cardlist";

export default function Home({ searchparams }) {
  const page = parseInt(searchparams) || 1;
  return (
    <main className="">
      <div>
        {" "}
        <Featured />
        <Category />
      </div>
      <div className="grid lg:grid-cols-6  justify-between">
        <div className="col-span-4">
          <Cardlist page={page} />
        </div>
        <div className="col-span-2">
          <Menu />
        </div>
      </div>
    </main>
  );
}
