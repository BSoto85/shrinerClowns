import "./App.css";
// import "../scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import MeetTheClowns from "./Components/MeetTheClowns";
import EventForm from "./Components/EventForm";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <>
      <NavBar />
      <MeetTheClowns />
      <Carousel />
      <EventForm />
    </>
  );
}

export default App;
