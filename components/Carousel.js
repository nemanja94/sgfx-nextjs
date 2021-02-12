import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import carouselStyle from '../styles/Carousel.module.css'

SwiperCore.use([Navigation, Pagination, A11y]);

const Carousel = () => {
    return (
        <Swiper
            className={carouselStyle.container}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className={carouselStyle.imageCard}>
                    <h1 className={carouselStyle.title}>Lorem ipsum dolor sit amet ipsum sit ipsum.</h1>
                    <p className={carouselStyle.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae delectus quisquam ipsam voluptates quia impedit quasi atque, sapiente tempore.  </p>
                </div>
                <Image src="/images/1.jpg" width={1000} height={400} layout="responsive"></Image>
            </SwiperSlide>
            <SwiperSlide><div className={carouselStyle.imageCard}>
                <h1 className={carouselStyle.title}>Lorem ipsum dolor sit amet ipsum sit ipsum.</h1>
                <p className={carouselStyle.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae delectus quisquam ipsam voluptates quia impedit quasi atque, sapiente tempore.  </p>
            </div>
                <Image src="/images/2.jpg" width={1000} height={400} layout="responsive"></Image>
            </SwiperSlide>
            <SwiperSlide>
                <div className={carouselStyle.imageCard}>
                    <h1 className={carouselStyle.title}>Lorem ipsum dolor sit amet ipsum sit ipsum.</h1>
                    <p className={carouselStyle.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae delectus quisquam ipsam voluptates quia impedit quasi atque, sapiente tempore.  </p>
                </div>
                <Image src="/images/3.jpg" width={1000} height={400} layout="responsive"></Image>
            </SwiperSlide>
            <SwiperSlide>
                <div className={carouselStyle.imageCard}>
                    <h1 className={carouselStyle.title}>Lorem ipsum dolor sit amet ipsum sit ipsum.</h1>
                    <p className={carouselStyle.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae delectus quisquam ipsam voluptates quia impedit quasi atque, sapiente tempore.  </p>
                </div>
                <Image src="/images/4.jpg" width={1000} height={400} layout="responsive"></Image>
            </SwiperSlide>
            <SwiperSlide>
                <div className={carouselStyle.imageCard}>
                    <h1 className={carouselStyle.title}>Lorem ipsum dolor sit amet ipsum sit ipsum.</h1>
                    <p className={carouselStyle.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae delectus quisquam ipsam voluptates quia impedit quasi atque, sapiente tempore.  </p>
                </div>
                <Image src="/images/5.jpg" width={1000} height={400} layout="responsive"></Image>
            </SwiperSlide>
        </Swiper>
    )
}



export default Carousel
