import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-6 grid-cols-1 gap-8">
        <div className="col-span-3 flex flex-col justify-center items-start">
          <h1 className="text-2xl font-bold mb-2">Let's Connect</h1>
          <p className="text-gray-300 mb-4">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/javohiryusupov77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: "30px", height: "30px" }}
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/javohir-yusupov-9030b131a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-gray-800 p-6 shadow-md rounded-lg">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <input
                  required
                  id="email"
                  placeholder="example@gmail.com"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-900 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  required
                  id="subject"
                  placeholder="Just saying hi"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-900 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  placeholder="Let's talk about"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-900 text-white"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">LOGO</h1>
        <p style={{ color: "grey" }}>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
