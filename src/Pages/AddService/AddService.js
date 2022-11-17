import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContex } from "../../AuthProvider/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContex);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const name = form.price.value;
    const imageUrl = form.imageUrl.value;
    const details = form.details.value;

    const service = {
      title,
      name,
      imageUrl,
      details,
    };

    try {
      fetch(" https://home-service-server-mahfuzjihad.vercel.app/service", {
        method: "POST",
        body: JSON.stringify(service),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Successfully added service.", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } catch (err) {
      toast.error("Failed to add service!", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <div className="mt-12 bg-neutral-600 p-5 grid grid-cols-1 gap-6">
        <h1 className="text-4xl text-center mb-12">Add Your New Service</h1>

        <form className="lg:mx-28" onSubmit={handleAddService}>
          <div className="grid gap-4 grid-cols-2">
            <input
              type="text"
              name="Service_name"
              placeholder="Service name"
              defaultValue=""
              className="input input-bordered w-full mb-5"
            />
            <input
              name="title"
              type="text"
              placeholder="Enter the title"
              className="mb-5 input input-bordered w-full"
            />
            <input
              name="price"
              type="text"
              placeholder="Enter the price"
              className="mb-5 input input-bordered w-full"
            />
            <input
              name="imageUrl"
              type="url"
              placeholder="Enter service thumbnail"
              className="input mb-5 input-bordered w-full"
            />
          </div>
          <textarea
              name="details"
              type="text"
              placeholder="Enter your service details"
              className="input mb-5 input-bordered w-full h-36"
            />
          <div>
            <button
              type="submit"
              className="input text-black input-bordered w-full"
              value="Add Service"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
