import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MeetTheClowns = () => {
  return (
    <div className="klowns-container">
      <h2 id="klowns">Meet the Klowns</h2>
      <div className="klowns">
        <section>
          <h2>"Noodles"</h2>
          <img src="src/assets/klowns3.jpeg" alt="Noodles" />
          <p>About Noodles</p>
          {/* <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} /> */}
        </section>
        <section>
          <h2>"Meatball"</h2>
          <img
            src="https://cdn1.iconfinder.com/data/icons/woman-profession-1/64/clown-job-avatar-profile-512.png"
            alt="Meatball"
          />

          <p>About Meatball</p>
          {/* <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} /> */}
        </section>
        <section>
          <h2>"Mingo"</h2>
          <img src="src/assets/mingo.jpeg" alt="Mingo" />
          <p>About Mingo</p>
          {/* <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} /> */}
        </section>
      </div>
    </div>
  );
};

export default MeetTheClowns;
