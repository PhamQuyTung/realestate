import React from 'react';
import './CardDiscoverHouse.css'; // Import CSS module để dễ style
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const CardDiscoverHouse = ({ icon, title, description, to }) => {
    return (
        <div className="card-discover">
            {/* Icon */}
            <div className="card-discover-icon">{icon}</div>

            {/* Nội dung */}
            <div className="card-discover__text">
                <h4 className="card-discover__title">{title}</h4>
                <p className="card-discover__description">{description}</p>
            </div>

            {/* button */}
            <div className="card-discover__btn">
                <Button size="large" variant="outline">
                    <Link to={to} className="compare">
                        Learn More
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default CardDiscoverHouse;
