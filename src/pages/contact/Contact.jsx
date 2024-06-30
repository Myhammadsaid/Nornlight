import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="contact__style">
            <h1 className="contact__style__title">Контакты</h1>
            <div className="contact__content">
              <h2 className="contact__content__text">8 (800) 890-46-56</h2>
              <p className="contact__content__par">
                Пн-Пт: 10:00 до 19:00 <br /> Сб-Вс: заказ через корзину
                <br />
                Телефоны:
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95901.41990287448!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1719675156693!5m2!1sru!2s"
            width="100%"
            height="672px"
            loading="lazy"
            style={{
              borderRadius: "15px",
              border: "none",
            }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
