import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaMedium } from "react-icons/fa";
import EmailCopy from "./EmailCopy"; // Import the new client-side component

const Contact = () => {
  return (
    <div className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

          {/* Address */}
          <div>
            <FiMapPin className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p>4700, Sorsogon City</p>
            <p>Sorsogon, Philippines</p>
          </div>

          {/* Phone Number */}
          <div>
            <FiPhone className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Phone Number</h3>
            <p>+639195774836</p>
            <p>+639935623308</p>
          </div>

          {/* Email */}
          <div>
            <FiMail className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <EmailCopy email="christianjeffersoncervantes@gmail.com" />
            
          </div>

          {/* Social Media */}
          <div>
            <FaMedium className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Medium</h3>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/chriscervantes2415" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-purple-500" />
              </a>
              
              <a href="https://www.linkedin.com/in/christian-jefferson-cervantes-1119ab29a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-purple-500" />
              </a>
              <a href="https://www.facebook.com/christian.cervantes.2415/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-purple-500" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
