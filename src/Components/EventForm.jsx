import React from "react";

const EventForm = () => {
  return (
    <div>
      <h2>Book an Event</h2>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="first-name" class="form-label">
            First Name
          </label>
          <input type="first-name" class="form-control" id="first-name" />
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">
            Last Name
          </label>
          <input type="last-name" class="form-control" id="last-name" />
        </div>
        <div class="mb-3">
          <label for="event" class="form-label">
            Event
          </label>
          <input type="event" class="form-control" id="event" />
        </div>
        <div class="mb-3">
          <label for="event-address" class="form-label">
            Event Address
          </label>
          <input type="event-address" class="form-control" id="event-address" />
        </div>
        <div class="mb-3">
          <label for="event-date" class="form-label">
            Event Date
          </label>
          <input type="date" class="form-control" id="event-date" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
