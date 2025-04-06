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
          <h1 className="text-center uppercase text-3xl">Get In Touch</h1>
          {/* <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime.
          </p> */}
          <div className="flex justify-center items-center gap-1">
            {/* email */}
            <div>
            <a href= "mailto:rajgobindadham@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  // fill="#e3e3e3"
                  className="dark:fill-white fill-black"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </a>
            </div>
            {/* linkedin */}
            <div>
              <a
                href="https://www.linkedin.com/in/rajdemodak01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  className="dark:fill-white fill-black"
                >
                  <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
                </svg>
              </a>
            </div>
            {/* github */}
            <div>
              <a
                href="https://github.com/rajdemodak01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                  className="fill-black dark:fill-white"
                >
                  <path d="M10 1C4.477 1 0 5.477 0 11c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.07-.608.07-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.34 1.088 2.91.833.092-.647.35-1.087.636-1.338-2.222-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.985 1.03-2.683-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.294 2.75-1.025 2.75-1.025.544 1.372.201 2.387.098 2.64.64.698 1.03 1.592 1.03 2.683 0 3.843-2.337 4.687-4.565 4.937.36.31.682.923.682 1.86 0 1.342-.013 2.423-.013 2.75 0 .268.18.58.688.482C17.135 19.167 20 15.42 20 11c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-6"
        >
          <div className="flex flex-col w-full mb-3">
            <label
              htmlFor="email"
              className="text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="rounded-lg p-2 bg-gray-200 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col w-full mb-3">
            <label
              htmlFor="name"
              className="text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="rounded-lg p-2 bg-gray-200 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="message"
              className="text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="rounded-lg p-2 bg-gray-200 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="What you want to say?"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 transition-all duration-300 w-full max-w-xs"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
