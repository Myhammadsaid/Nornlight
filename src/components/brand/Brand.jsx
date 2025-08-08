import { useRef } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

const Brand = () => {
	const swiperRef = useRef(null)

	const handleNextButtonClick = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext()
		}
	}

	const handlePrevButtonClick = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev()
		}
	}

	return (
		<section className='brand'>
			<div className='container'>
				<div className='home__titles'>
					<h1 className='home__titles__title brand__title'>
						Только проверенные бренды
					</h1>
					<div className='brand__btns'>
						<button
							className='brand__btns__btn'
							onClick={handlePrevButtonClick}
						>
							<IoIosArrowRoundBack />
						</button>
						<button
							className='brand__btns__btn'
							onClick={handleNextButtonClick}
						>
							<IoIosArrowRoundForward />
						</button>
					</div>
				</div>
				<Swiper
					ref={swiperRef}
					slidesPerView={1}
					spaceBetween={10}
					breakpoints={{
						600: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						800: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1200: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
					autoplay={{
						delay: 2000,
					}}
					className='mySwiper'
				>
					<SwiperSlide>
						<div className='brand__card'>
							<img src={'/images/brendImg1.png'} alt='brandImg1' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='brand__card'>
							<img src={'/images/brendImg2.png'} alt='brandImg2' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='brand__card'>
							<img src={'/images/brendImg3.png'} alt='brandImg3' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='brand__card'>
							<img src={'/images/brendImg1.png'} alt='brandImg1' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='brand__card'>
							<img src={'/images/brendImg2.png'} alt='brandImg2' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='brand__card'>
							<img src={'/images/brendImg3.png'} alt='brandImg3' />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Brand
