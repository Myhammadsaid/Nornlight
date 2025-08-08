import { IoIosArrowRoundForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const Katalog = ({ isMarriadeCard }) => {
	let navigate = useNavigate()
	return (
		<section className='katalog'>
			<div className='container'>
				<div className='home__titles'>
					<h1 className='home__titles__title'>Каталог</h1>
					<button
						onClick={() => navigate('/all-katalog')}
						className='home__titles__btn display__none'
					>
						Весь каталог <IoIosArrowRoundForward />
					</button>
				</div>
				<div className='katalog__cards display__none'>
					<div className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Люстры</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img1.png'} alt='katalogImg1' />
					</div>
					<div className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Светильники</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img2.png'} alt='katalogImg1' />
					</div>
					<div className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Бра</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img3.png'} alt='katalogImg1' />
					</div>
					<div className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Торшеры</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img4.png'} alt='katalogImg1' />
					</div>
					<div className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Настольные лампы</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img5.png'} alt='katalogImg1' />
					</div>
					<div className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Споты</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img6.png'} alt='katalogImg1' />
					</div>
					{isMarriadeCard ? (
						<>
							<div className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Трековые светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img ssrc={'/images/katalog__img7.png'} alt='katalogImg1' />
							</div>
							<div className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Уличные светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img8.png'} alt='katalogImg1' />
							</div>
							<div className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Технические светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img9.png'} alt='katalogImg1' />
							</div>
							<div className='katalog__card katalog__width'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Уличные светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img10.png'} alt='katalogImg1' />
							</div>
							<div className='katalog__card katalog__width'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Технические светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img11.png'} alt='katalogImg1' />
							</div>{' '}
						</>
					) : (
						<></>
					)}
				</div>
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					style={{ display: 'none' }}
					className='katalog__cards display__block'
				>
					<SwiperSlide className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Люстры</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img1.png'} alt='katalogImg1' />
					</SwiperSlide>
					<SwiperSlide className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Светильники</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img2.png'} alt='katalogImg1' />
					</SwiperSlide>
					<SwiperSlide className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Бра</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img3.png'} alt='katalogImg1' />
					</SwiperSlide>
					<SwiperSlide className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Торшеры</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img4.png'} alt='katalogImg1' />
					</SwiperSlide>
					<SwiperSlide className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Настольные лампы</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img5.png'} alt='katalogImg1' />
					</SwiperSlide>
					<SwiperSlide className='katalog__card'>
						<ul className='katalog__card__content'>
							<li className='katalog__card__content__text'>Споты</li>
							<li className='katalog__card__content__text'>
								От 540₽ <IoIosArrowRoundForward />
							</li>
						</ul>
						<img src={'/images/katalog__img6.png'} alt='katalogImg1' />
					</SwiperSlide>
					{isMarriadeCard ? (
						<>
							<SwiperSlide className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Трековые светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img7.png'} alt='katalogImg1' />
							</SwiperSlide>
							<SwiperSlide className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Уличные светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img8.png'} alt='katalogImg1' />
							</SwiperSlide>
							<SwiperSlide className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Технические светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img9.png'} alt='katalogImg1' />
							</SwiperSlide>
							<SwiperSlide className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Уличные светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img10.png'} alt='katalogImg1' />
							</SwiperSlide>
							<SwiperSlide className='katalog__card'>
								<ul className='katalog__card__content'>
									<li className='katalog__card__content__text'>
										Технические светильники
									</li>
									<li className='katalog__card__content__text'>
										От 540₽ <IoIosArrowRoundForward />
									</li>
								</ul>
								<img src={'/images/katalog__img11.png'} alt='katalogImg1' />
							</SwiperSlide>
						</>
					) : (
						<></>
					)}
				</Swiper>
				<button
					onClick={() => navigate('/all-katalog')}
					style={{ display: 'none' }}
					className='home__titles__btn display__flex home__btn2 width__100'
				>
					Весь каталог <IoIosArrowRoundForward />
				</button>
			</div>
		</section>
	)
}

export default Katalog
