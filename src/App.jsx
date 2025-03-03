import "./App.css";
// import "../scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import MeetTheClowns from "./Components/MeetTheClowns";
import EventForm from "./Components/EventForm";
import Carousel from "./Components/Carousel";
import Banner from "./Components/Banner";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <MeetTheClowns />
      <Carousel />
      {/* <EventForm /> */}
    </>
  );
}

export default App;
