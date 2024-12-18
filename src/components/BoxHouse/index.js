import React from 'react';
import './BoxHouse.css'; // Import CSS module để dễ style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const BoxHouse = ({ tags = ['Featured', 'For Sale'], image, title, location, beds, baths, area, price }) => {
    return (
        <div className="box-house">
            <div className="box-image-wrap">
                {/* Ảnh */}
                <Link to="/" className="box-house__image">
                    <img src={image} alt={title} />
                </Link>

                {/* Favorite and search more */}
                <div className="box-btn-more">
                    <Tippy content="Add Favorite">
                        <Link to="/">
                            <i className=" icon icon-save" />
                        </Link>
                    </Tippy>

                    <Tippy content="Quick View">
                        <Link to="/">
                            <i className=" icon icon-zoomIn" />
                        </Link>
                    </Tippy>
                </div>

                {/* Thẻ Tags */}
                <div className="box-house__tags">
                    {tags.map((tag, index) => (
                        <span key={index} className={`tag ${tag.toLowerCase()}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Nội dung */}
            <div className="box-house__content">
                <h5 className="box-house__title">{title}</h5>
                <p className="box-house__location">
                    <i className=" icon icon-location location" />
                    {location}
                </p>

                <div className="box-house__info">
                    <span>
                        <strong>{beds}</strong>Beds
                    </span>
                    <span>
                        <strong>{baths}</strong>Baths
                    </span>
                    <span>
                        <strong>{area}</strong> Sqft
                    </span>
                </div>

                <div className="box-house__footer">
                    <span className="box-house__price">${price}</span>
                    <div className="box-house__buttons">
                        <Link to="/" className="compare">
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                            Compare
                        </Link>
                        <Link to="/" className="details">
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxHouse;
