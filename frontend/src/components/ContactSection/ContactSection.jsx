import "./ContactSection.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-left">

        <p className="section-tag">GET IN TOUCH</p>

        <h2>Let's Find Your Perfect Investment Property</h2>

        <div className="contact-item">
          <FaPhoneAlt/>
          <div>
            <h4>Call Us</h4>
            <p>+91 9673044421</p>
          </div>
        </div>

        <div className="contact-item">
          <FaWhatsapp/>
          <div>
            <h4>WhatsApp</h4>
            <p>Chat with our property expert.</p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope/>
          <div>
            <h4>Email</h4>
            <p>info@domrealty.in</p>
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt/>
          <div>
            <h4>Office Address</h4>
            <p>Talasari Patilpada, Tal. Talasari, Dist. Palghar</p>
          </div>
        </div>

      </div>

      <div className="contact-right">

        <form>

          <input placeholder="Your Name"/>

          <input placeholder="Phone Number"/>

          <input placeholder="Email"/>

          <textarea rows="5" placeholder="Tell us your property requirement"/>

          <button>Send Enquiry</button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;