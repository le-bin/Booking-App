import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
      </div>
    </>
  );
};

export default Home;
