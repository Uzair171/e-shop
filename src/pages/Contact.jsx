export default function Contact() {
  return (
    <div className="min-h-screen  py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We're here to help. Whether you have a question about your order,
          products, or our services — reach out to us anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <div>
            <p className="text-gray-700 font-medium">Address</p>
            <p className="text-gray-600">
              123 Market Street, Islamabad, Pakistan
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Phone</p>
            <p className="text-gray-600">+92 300 1234567</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Email</p>
            <p className="text-gray-600">support@eshop.com</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Working Hours</p>
            <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
