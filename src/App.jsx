import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
