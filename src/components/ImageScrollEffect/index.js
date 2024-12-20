import React, { useEffect, useRef, useState } from 'react';
import './ImageScrollEffect.scss';

const ImageScrollEffect = ({ src, alt, offset = 100 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;

            const { top } = imageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight - offset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Gọi ngay khi component được render

        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset]);

    return (
        <div className="image-container">
            <img ref={imageRef} src={src} alt={alt} className={`scroll-animation ${isVisible ? 'visible' : ''}`} />
        </div>
    );
};

export default ImageScrollEffect;
