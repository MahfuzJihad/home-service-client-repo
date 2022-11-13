import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceItem from '../../components/ServiceItem';

import Banner from '../Banner/Banner';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {

    const [services, setServices] = useState([]);
    const nevigate = useNavigate();
    function seeMoreServiceBtnHandler() {
        nevigate('/servicepage');
    }

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
                    <ServiceItem key={service._id} id={service._id} title={service.title} details={service.details} name={service.name} imageUrl={service.imageUrl} />
                ))}
            </div>
            {/* <h1>Breakpoint</h1>
            <ServicePage /> */}

            <button onClick={seeMoreServiceBtnHandler} className="btn btn-wide btn-active btn-primary mb-10">See more service</button>
        </div>
    );
};

export default Home;