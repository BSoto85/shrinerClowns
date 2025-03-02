import React from "react";

const EventForm = () => {
  return (
    <div className="container d-flex justify-content-center" id="form">
      <div
        className="w-60 border border-1 border-dark p-4 rounded"
        style={{ width: "60%", marginTop: "50px", marginBottom: "50px" }}
      >
        <h2 className="text-center">Booking Inqueries</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="first-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="last-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="event" className="form-label">
              Event
            </label>
            <input type="text" className="form-control" id="event" />
          </div>
          <div className="mb-3">
            <label htmlFor="event-address" className="form-label">
              Event Address
            </label>
            <input type="text" className="form-control" id="event-address" />
          </div>
          <div className="mb-3">
            <label htmlFor="event-date" className="form-label">
              Event Date
            </label>
            <input type="date" className="form-control" id="event-date" />
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
