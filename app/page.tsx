import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="dark:bg-fond">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
