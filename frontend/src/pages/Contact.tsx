import React from "react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(`Backend url: ${backendUrl}`);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
    console.log(formData);
    try {
      // const response=await fetch(`${backendUrl}/healthCheck`, {
      //   method:"GET"
      // })
      const response = await fetch(`${backendUrl}/help`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      setFormData({ name: "", email: "", message: "" });
      alert("Help submitted");
    } catch (err) {
      console.log("Error while submitting the form", err);
    }
  };
  return (
    <div className="flex justify-center">
    <div className="sm:w-full md:w-5/12 lg:w-3/12 dark:text-white dark:border-white border-2 border-black rounded-lg flex-col items-center justify-center mt-10 pt-5 px-6">
      <div className="">
        <h1 className="text-center">Get In Touch</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime.
        </p>
        <div className="flex justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              className="dark:stroke-white stroke-black"
              >
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
              <path
                d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              className="dark:stroke-white stroke-black"
              >
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
              <path
                d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              className="dark:stroke-white stroke-black"
              >
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
              <path
                d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
            </svg>
          </div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
        <div className="flex flex-col w-full mb-3">
          <label
            htmlFor="email"
            className="text-gray-700 dark:text-gray-300 mb-1"
            >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please enter your email"
            className="rounded-lg p-2 bg-gray-200 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
        </div>

        <div className="flex flex-col w-full mb-3">
          <label
            htmlFor="name"
            className="text-gray-700 dark:text-gray-300 mb-1"
            >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Please enter your name"
            className="rounded-lg p-2 bg-gray-200 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
        </div>

        <div className="flex flex-col w-full mb-4">
          <label
            htmlFor="message"
            className="text-gray-700 dark:text-gray-300 mb-1"
            >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-lg p-2 bg-gray-200 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Type your message..."
            rows={4}
            ></textarea>
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 transition-all duration-300 w-full max-w-xs"
          >
          Submit
        </button>
      </form>
    </div>
          </div>
  );
}

export default Contact;
