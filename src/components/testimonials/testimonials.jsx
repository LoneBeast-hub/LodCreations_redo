import './testimonials.css';
import AVTR1 from '../../assets/Damson.png';
import AVTR2 from '../../assets/Damson.png';
import AVTR3 from '../../assets/Damson.png';
import AVTR4 from '../../assets/Damson.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const data = [
  {
    name: 'Monkey D. Luffy',
    avatar: AVTR1,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quia ducimus adipisci vero odio fugit corrupti sunt quibusdam dolores quas.'
  },
  {
    name: 'Roronoa Zoro',
    avatar: AVTR2,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quia ducimus adipisci vero odio fugit corrupti sunt quibusdam dolores quas.'
  },
  {
    name: 'Vinsmoke Sanji',
    avatar: AVTR3,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quia ducimus adipisci vero odio fugit corrupti sunt quibusdam dolores quas.'
  },
  {
    name: 'God Ussop',
    avatar: AVTR4,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quia ducimus adipisci vero odio fugit corrupti sunt quibusdam dolores quas.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        pagination={{clickable: true}} modules={[Pagination]}
        slidesPerView={1} spaceBetween={40}>
        {
          data.map(({name, avatar, review}, index) => {
            return(
              <SwiperSlide className='testimonial' key={index}>
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client_name'> {name} </h5>
                <small className="client_review">
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  ) 
}

export default Testimonials;