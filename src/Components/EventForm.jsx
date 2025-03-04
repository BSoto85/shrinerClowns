import { useState } from "react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fName: "",
    lName: "",
    phone: "",
    eventDetails: "",
    eventAddress: "",
    eventDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_EMAIL_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_EMAIL_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent!");
      })
      .catch((err) => {
        console.error("Failed to send email.", err);
        alert("Error sending email. Please try again.");
      });

    setFormData({
      email: "",
      fName: "",
      lName: "",
      phone: "",
      eventDetails: "",
      eventAddress: "",
      eventDate: "",
    });
  };

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="container d-flex justify-content-center" id="form">
      <div className="border border-1 border-dark p-4 rounded mt-3 mb-3 form-container">
        <h2 className="text-center">Booking Inquiries</h2>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-direction-row gap-5 name-container justify-content-center">
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
          </div>
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
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="eventDetails" className="form-label">
              Event Details
            </label>
            <textarea
              type="text"
              className="form-control"
              id="eventDetails"
              value={formData.eventDetails}
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
