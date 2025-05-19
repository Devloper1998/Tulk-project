import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import axios from 'axios';
import baseurl from '../../baseUrl';

function Slider() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formData = new FormData();
    formData.append('action', 'Display');

    axios.post(`${baseurl}/saveSlider.php`, formData)
      .then(response => {
        if (response.data?.data?.length > 0) {
          // Add full image URLs
          const fetchedData = response.data.data.map(item => ({
            ...item,
            image: `${baseurl}/${item.image}`
          }));

          setLogos(fetchedData);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the logo!", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {/* Loop through dynamic images */}
          {logos.map((item, index) => (
            <SwiperSlide key={index} id="demoimages">
              <img src={item.image} alt={`slide-${index}`}/>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default Slider;
