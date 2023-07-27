//import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Navigation from "../components/Navigation";
import "./Contact.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_fw45l3w",
          "template_f0712kj",
          form.current,
          "fFSlDvV0ymJP0Fqft"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message successfully sent!");
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  document.body.style.background = "#cedbe6";
  return (
    <>
      <Navigation />
      <div className="container-contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            I am interested in freelance opportunities and contracts. If you
            have any requests or questions, don't hesitate to contact me using
            the form below.
          </p>
          <div className="Contact-Form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="name-email">
                  <li className="name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    ></input>
                  </li>
                  <li className="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    ></input>
                  </li>
                </div>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <div className="submit-wrapper">
                  <li className="submit">
                    <input
                      type="submit"
                      className="flat-button"
                      value="Send"
                    ></input>
                  </li>
                </div>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
