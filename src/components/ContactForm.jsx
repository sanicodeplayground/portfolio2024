import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i3jel21", "template_7twv0pi", form.current, {
        publicKey: "KUkcW76MjVQb3R5lK",
      })
      .then(
        (result) => {
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
            form.current.reset();
          }, 5000);
          setMessage("Email successfully sent!");
        },
        (error) => {
          if (error.text) {
            setMessage(`Failed to send email. Error: ${error.text}`);
          } else {
            setMessage("Failed to send email. Please try again later.");
          }
        }
      );
  };

  return (
    <section>
      <div className="container py-16 max-w-screen-md">
        <h2 className="mb-4 text-4xl  font-extrabold text-center text-gray-900 dark:text-white">
          Let's have a chat
        </h2>
        {isSent && <p className="text-green-600">Email successfully sent!</p>}
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              for="user_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              for="user_email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@coolemail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Wirte your message"
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
