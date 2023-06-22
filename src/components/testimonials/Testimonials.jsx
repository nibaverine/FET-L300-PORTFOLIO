import React, { useState, useEffect } from "react";
import axios from "axios";
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://strange-hare-shirt.cyclic.app/api/testimonial").then(response => {
      const formatedData = response.data.data.map(item => ({
        id: item._id,
        avatar: item.avatar,
        name: item.name,
        review: item.review
      }));
      setData(formatedData)
    }).catch(error => {
      console.log("Error Fetching Portfolio data:", error);
    })
  }, [])

  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={{ Pagination }}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => (
          <SwiperSlide key={id} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5>{name}</h5>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Testimonials;