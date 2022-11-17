import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

function ServicePage() {
  const [services, setServices] = useState([]);
  const getServiceData = () => {
    fetch("https://home-service-server-mahfuzjihad.vercel.app/services/100")
      .then((res) => res.json())
      .then((services) => setServices(services))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <div>
      <div className="mb-4">
        <p className="text-center font-bold">All services here...</p>
      </div>
      <div className="grid grid-cols-3">
        {services.map((service) => (
          <ServiceItem
            key={service._id}
            id={service._id}
            title={service.title}
            name={service.name}
            details={service.details}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
export default ServicePage;
