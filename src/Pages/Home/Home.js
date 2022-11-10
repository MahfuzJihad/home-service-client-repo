import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../../components/ServiceItem';

import Banner from '../Banner/Banner';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {

    const [services, setServices] = useState([]);

    const getServiceData = () => {
        fetch("http://localhost:8000/services/3")
            .then((res => res.json()))
            .then(services => setServices(services))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getServiceData();
    }, []);

    return (
        <div>
            <Banner></Banner>
            <HomeSection></HomeSection>
            <div className='flex w-full gap-2'>
                {services.map((service) => (
                    <ServiceItem title={service.title} name={service.name} imageUrl={service.imageUrl} />
                ))}
            </div>
            {/* <h1>Breakpoint</h1>
            <ServicePage /> */}

            <button className="btn btn-wide btn-active btn-primary mb-10">See more <Link to="/servicepage">service</Link></button>
        </div>
    );
};

export default Home;