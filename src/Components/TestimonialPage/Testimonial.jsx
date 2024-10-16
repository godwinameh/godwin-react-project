import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css'; 
import testimonial from '../../assets/testimonial.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        name: 'Salihu Umar',
        location: 'Lagos',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.',
        avatar: testimonial,
    },
    {
        id: 2,
        name: 'Salihu Umar',
        location: 'Lagos',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.',
        avatar: testimonial,
    },
    {
        id: 3,
        name: 'Salihu Umar',
        location: 'Lagos',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.',
        avatar: testimonial,
    },
    {
        id: 4,
        name: 'Salihu Umar',
        location: 'Lagos',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.',
        avatar: testimonial,
    },
    {
        id: 5,
        name: 'Salihu Umar',
        location: 'Lagos',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.',
        avatar: testimonial,
    },
];

const Testimonial = ({page}) => {
    const titleColor = page === "about" ? "#11C170" : "#223323";
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 5000, 
        prevArrow: <button className="custom-prev-arrow">⬅️</button>,
        nextArrow: <button className="custom-next-arrow">➡️</button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            }
        ]
    };

    return (
        <div className="testimonial-container">
            <div className="testimonial-section">
            <h2 className="section-title brcandor-bold" style={{ color: titleColor }}>Testimonials</h2>
            <p className="section-subtitle py-6">Don't just take our words for it, read what people are <br /> saying about us.</p>
            
            
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>

                        <div className='flex gap-3'>
                        <div className="avatar-container">
                            <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                        </div>

                        <div className="name-location-container">
                            <h3>{testimonial.name}</h3>
                            <h5>{testimonial.location}</h5>
                        </div>
                        </div>

                        <p>{testimonial.message}</p>
                    </div>
                ))}
            </Slider>
        </div>
        </div>

    );
};

export default Testimonial;
