
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a team dedicated to providing quality services and solutions to our clients. 
            Contact us for more information.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-white">
                As Employee
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                As Hr
              </a>
            </li>
            <li>
              <a href="#blog" className="text-gray-400 hover:text-white">
                Sign in
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">
            Email: yeasin@gamil.com
          </p>
          <p className="text-gray-400">
            Phone: +123-456-7890
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
