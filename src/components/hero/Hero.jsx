import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Hero = () => {
	return (
		<section className='hero'>
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={{ delay: 1000 }}
				className='container'
			>
				<SwiperSlide>
					<div className='hero__style'>
						<div className='hero__style__content'>
							<h1 className='hero__text'>
								Скидка 15% на все подвесные светильники
								<br />
								<span>до 5 февраля</span>
							</h1>
						</div>
						<img src={'/images/hero__img.png'} alt='heroImg' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='hero__style'>
						<div className='hero__style__content'>
							<h1 className='hero__text'>
								Скидка 15% на все подвесные светильники
								<br />
								<span>до 5 февраля</span>
							</h1>
						</div>
						<img src={'/images/hero__img.png'} alt='heroImg' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='hero__style'>
						<div className='hero__style__content'>
							<h1 className='hero__text'>
								Скидка 15% на все подвесные светильники
								<br />
								<span>до 5 февраля</span>
							</h1>
						</div>
						<img src={'/images/hero__img.png'} alt='heroImg' />
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default Hero
