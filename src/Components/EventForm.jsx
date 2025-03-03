import { useState } from "react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fName: "",
    lName: "",
    event: "",
    eventAddress: "",
    eventDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email logic
    setFormData({
      email: "",
      fName: "",
      lName: "",
      event: "",
      eventAddress: "",
      eventDate: "",
    });
  };

  const handleTextChange = (e) => {
    setFormData({ [e.target.id]: e.target.value });
  };

  return (
    <div className="container d-flex justify-content-center" id="form">
      <div
        className="w-60 border border-1 border-dark p-4 rounded mt-3 mb-3"
        style={{
          width: "60%",
          marginTop: "50px",
          marginBottom: "50px",
          background: "white",
        }}
      >
        <h2 className="text-center">Booking Inquiries</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fName"
              value={formData.fName}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lName"
              value={formData.lName}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="event" className="form-label">
              Event
            </label>
            <input
              type="text"
              className="form-control"
              id="event"
              value={formData.event}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="event-address" className="form-label">
              Event Address
            </label>
            <input
              type="address"
              className="form-control"
              id="eventAddress"
              value={formData.eventAddress}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="event-date" className="form-label">
              Event Date
            </label>
            <input
              type="date"
              className="form-control"
              id="eventDate"
              value={formData.eventDate}
              onChange={handleTextChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
