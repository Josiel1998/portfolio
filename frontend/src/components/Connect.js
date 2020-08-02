import React from "react";

export default function Connect() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">Lets chat!</span>
      </h1>
      <br />
      <br />
      <hr />
      <div className="container">
        <form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/josieldelgadillo98@gmail.com"
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last"
              required=""
            />
            <label for="email-address">Email Address</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.com"
              required=""
            />
            <label for="message">Message</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Hey Josiel I'd like to talk to you about..."
              required=""
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
          </fieldset>
          <input type="submit" formTarget="_blank" value="Submit" />
        </form>
      </div>
    </div>
  );
}

