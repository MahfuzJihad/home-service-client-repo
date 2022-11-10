import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

function ServicePage() {
    const [services, setServices] = useState([]);
    const getServiceData = () => {
        fetch("http://localhost:8000/services/100")
            .then((res => res.json()))
            .then(services => setServices(services))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getServiceData();
    }, []);

    return (
        <div>
            <div className="mb-4">
                <p className="text-center font-bold">All services here...</p>
            </div>
            <div className="flex">
                {services.map((service) => (
                    <ServiceItem title={service.title} name={service.name} imageUrl={service.imageUrl} />
                ))}

            </div>
        </div>
    );
}
export default ServicePage;