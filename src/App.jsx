// import "./App.css";
// import "../scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavBar from "./Components/NavBar";
import MeetTheClowns from "./Components/MeetTheClowns";
import EventForm from "./Components/EventForm";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <>
      <NavBar />
      <MeetTheClowns />
      {/* <Carousel /> */}
      <EventForm />
      {/* <FontAwesomeIcon icon={faGithub} /> */}
    </>
  );
}

export default App;
