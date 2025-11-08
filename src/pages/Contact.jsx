import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Get in Touch</h1>
      <p className="contact-desc">
        Have questions or want to join the roar? Connect with us on our social platforms below!
      </p>

      <div className="contact-links">
        <a
          href="https://discord.com/invite/YOUR_DISCORD_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn discord"
        >
          Discord
        </a>
        <a
          href="https://t.me/YOUR_TELEGRAM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn telegram"
        >
          Telegram
        </a>
        <a
          href="https://x.com/YOUR_X_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn x-link"
        >
          X
        </a>
      </div>

      <p className="contact-note">
        We’re always happy to hear from our BlockZillas community!
      </p>
    </div>
  );
}
