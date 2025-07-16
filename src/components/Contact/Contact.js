import React, { useState, useEffect } from "react"; // Імпортуємо useEffect
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser"; // Імпортуємо EmailJS

const Contact = () => {
  const [message, setMessage] = useState(null); // Стан для повідомлень користувачу
  const [messageType, setMessageType] = useState(""); // Тип повідомлення (success/error)

  // useEffect для автоматичного приховування повідомлення
  useEffect(() => {
    if (message) {
      // Якщо є повідомлення
      const timer = setTimeout(() => {
        setMessage(null); // Очищаємо повідомлення
        setMessageType(""); // Очищаємо тип повідомлення
      }, 2000); // Через 1.5 секунди

      return () => clearTimeout(timer); // Очищаємо таймер при розмонтуванні компонента або зміні message
    }
  }, [message]); // Залежність від message: ефект спрацьовує, коли message змінюється

  // Функція для обробки відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();

    // Замініть 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' на ваші реальні дані
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
        e.target.reset(); // Очистити форму після успішної відправки
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

      {/* Повідомлення для користувача */}
      {message && (
        <div className={`${styles.statusMessage} ${styles[messageType]}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="full_name" // Додано атрибут name для EmailJS
            placeholder="Full Name"
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email_address" // Додано атрибут name для EmailJS
            placeholder="Email Address"
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputBox}>
          <input
            type="tel"
            name="mobile_number" // Додано атрибут name для EmailJS
            placeholder="Mobile Number"
            className={styles.inputField}
            pattern="[0-9]*" // Додано атрибут pattern для введення лише цифр
            title="Будь ласка, введіть лише цифри" // Підказка при невірному введенні
          />
          <input
            type="text"
            name="email_subject" // Додано атрибут name для EmailJS
            placeholder="Email Subject"
            required
            className={styles.inputField}
          />
        </div>
        <textarea
          name="message" // Вже є, але переконайтеся
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
