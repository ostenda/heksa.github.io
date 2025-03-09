export default function ContactForm() {
    return (
      <div className="max-w-lg mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
  
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
            />
          </div>
  
          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
          </div>
  
          {/* Message */}
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  