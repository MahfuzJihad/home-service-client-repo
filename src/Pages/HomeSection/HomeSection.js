import React from 'react';
import img6 from '../../assests/images/house-clean.jpg'

const HomeSection = () => {
    return (
        <div className="hero min-h-screen bg-base-80">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={img6} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    );
};

export default HomeSection;