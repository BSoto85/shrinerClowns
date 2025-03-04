import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import klownImages from "../assets/klownImages";

const MeetTheClowns = () => {
  return (
    <div className="klowns-container" id="klowns">
      <h2>Meet the Klowns</h2>
      <div className="klowns">
        {klownImages.map((image, i) => {
          return (
            <section key={i}>
              <h3>{image.desc}</h3>
              <img src={image.url} alt={image.desc} />
              {/* <p>About {image.desc}</p> */}
              {/* <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} /> */}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default MeetTheClowns;
