import Nav from "./Nav";
import Reseau from "./Reseau";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-black">
      <Nav />
      <Reseau sizeCont={10} sizeIco={16} />
      <p className="text-xs flex justify-center p-5">© {year} Victor Raveau. All rights reserved.</p>
    </div>
  );
}
