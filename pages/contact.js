import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../public/img/phone.svg";
import email from "../public/img/emailme.svg";
import location from "../public/img/location.svg";
import Title from "../Components/Title";
import Head from "next/head";
function Contact() {
  return (
    <div>
      <Head>
        <title>TonTosirikul&apos;s site</title>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TonTosirikul's site" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Title title={"Contact me"} span={"Contact me"} className="title" />
      <div className="ContactPage">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61665.06123561495!2d103.0901204550744!3d14.989022898445054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311995bc2b5763d3%3A0x2ab24b175a3224ee!2z4Lie4Lij4Lie4Liy4LiT4Li04LiK4Lii4LmM!5e0!3m2!1sth!2sth!4v1612450346621!5m2!1sth!2sth"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title={"Address"}
          ></iframe>
        </div>
        <div className="contact-section">
          <ContactItem icon={phone} text1={"+66 814540444"} title={"PHONE"} />
          <ContactItem
            icon={email}
            text1={"61010405@kmitl.ac.th"}
            text2={"tonydude1999@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"187/13 Sunthornthep St, Muang Buriram, Buriram, Thailand "}
            text2={"31000"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
