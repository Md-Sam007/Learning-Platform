export default function Footer() {
    return (
      <footer className="bg-[#1f1f1f] text-white py-10 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-2">LSM</h2>
            <p className="text-sm text-gray-400">Empowering learners with accessible, smart, and flexible education.</p>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#">Courses</a></li>
              <li><a href="#">Instructors</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Newsletter / Socials */}
          <div>
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-black mb-3"
            />
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-medium">Subscribe</button>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-linkedin" /></a>
              <a href="#"><i className="fab fa-github" /></a>
            </div>
          </div>
        </div>
  
        <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4 border-gray-700">
          &copy; {new Date().getFullYear()} LSM. All rights reserved.
        </div>
      </footer>
    );
  }
  