import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ofl5lph";
    const templateId = "template_u21l3gf";
    const publicKey = "qQGABM2Wj9sjgRw40";

    if (!publicKey || publicKey === "YOUR_PUBLIC_KEY") {
      setMessage(
        "Будь ласка, вставте свій EmailJS Public Key у файл Contact.jsx."
      );
      setMessageType("error");
      return;
    }

    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
        setMessage(
          "Ваше повідомлення відправлено успішно! Я зв'яжуся з вами незабаром."
        );
        setMessageType("success");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        setMessage(
          "Сталася помилка при відправці повідомлення. Будь ласка, спробуйте ще раз."
        );
        setMessageType("error");
      }
    );
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>
        Contact <span>Me!</span>
      </h2>

      {message && (
        <div className={`${styles.statusMessage} ${styles[messageType]}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email_address"
            placeholder="Email Address"
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputBox}>
          <input
            type="tel"
            name="mobile_number"
            placeholder="Mobile Number"
            className={styles.inputField}
            pattern="[0-9]*"
            title="Будь ласка, введіть лише цифри"
          />
          <input
            type="text"
            name="email_subject"
            placeholder="Email Subject"
            required
            className={styles.inputField}
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
          className={styles.textareaField}
        ></textarea>
        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>

      <div className={styles.socialMedia}>
        <a
          className={styles.socialLink}
          href="https://www.facebook.com/sergey.romanenko.9237/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          className={styles.socialLink}
          href="https://github.com/SerhiiRomanenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          className={styles.socialLink}
          href="https://www.linkedin.com/in/serhii-romanenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
