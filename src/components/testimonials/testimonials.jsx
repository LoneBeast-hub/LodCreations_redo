import './testimonials.css';
import AVTR from '../../assets/avatar.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const data = [
  {
    name: 'Sodiq',
    avatar: AVTR,
    review: 'The frontend developer showcased remarkable attention to detail in crafting pixel-perfect designs. The user interface is not only visually appealing but also maintains consistency across various screen sizes and devices.'
  },
  {
    name: 'Samuel',
    avatar: AVTR,
    review: "Impressed with the clean and efficient code structure. The frontend developer's code is well-organized, making it easy to navigate and maintain. The use of modular components enhances code reusability and scalability."
  },
  {
    name: 'Tobi',
    avatar: AVTR,
    review: "Demonstrated a high level of expertise in responsive design. The website seamlessly adapts to different screen sizes, ensuring a smooth and consistent user experience. The developer's thoughtful approach to responsiveness is commendable."
  },
  {
    name: 'Bazzlylinks Info Tech',
    avatar: AVTR,
    review: "Completed tasks promptly and collaborated effectively with the team. The frontend developer's proactive communication and ability to meet deadlines contribute to a positive workflow and successful project outcomes."
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