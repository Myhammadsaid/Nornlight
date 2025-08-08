import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDetailProductQuery } from '../../context/api/productApi'
import { addToCart } from '../../context/slices/cartSlice'
import { toggleHeart } from '../../context/slices/wishlistSlice'
import SingleSkeleton from '../single-skeleton/SingleSkeleton'

const Single = () => {
	let { id } = useParams()
	let disptach = useDispatch()
	const carts = useSelector(state => state.cart.value)
	const wishlist = useSelector(state => state.wishlist.value)
	let { data, isLoading } = useDetailProductQuery(id)
	const [count, setCount] = useState(1)

	let check = carts?.some(el => el.id === data?.id)

	return (
		<>
			{isLoading ? (
				<SingleSkeleton />
			) : (
				<motion.section
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='single'
				>
					<div className='container'>
						<div className='single__style'>
							<img
								className='single__style__img'
								src={data?.url[0]}
								alt={data?.title}
							/>
							<div className='single__content'>
								<h1 className='single__content__text'>{data?.title}</h1>
								<ul>
									<li>
										Артикул : 7655-188{' '}
										<img src={'/images/single__img.png'} alt='singleImg' />
									</li>
									<li>В наличии</li>
								</ul>
								<div className='single__content__prices'>
									<h1 className='single__content__prices__price'>
										{data?.price}₽
									</h1>
									<s>{data?.price * 2}₽</s>
								</div>
								<p className='single__content__par'>{data?.desc}</p>
								<div className='single__content__box'>
									{check ? (
										<div className='single__content__btns'>
											<button
												disabled={count === 1}
												onClick={() => setCount(p => p - 1)}
												className='single__content__btns__btn'
											>
												-
											</button>
											<button className='single__content__btns__btn'>
												{count}
											</button>
											<button
												disabled={count > 9}
												onClick={() => setCount(p => p + 1)}
												className='single__content__btns__btn'
											>
												+
											</button>
										</div>
									) : (
										<></>
									)}
									<button
										onClick={() => disptach(addToCart(data))}
										className='single__content__btns__cart'
									>
										{check ? (
											<>
												В корзину
												<FaCheck />
											</>
										) : (
											'В корзину'
										)}
									</button>
									<button
										onClick={() => disptach(toggleHeart(data))}
										className='single__content__btns__heart'
									>
										{wishlist?.some(el => el.id === data?.id) ? (
											<FiHeart style={{ fill: 'red', stroke: 'red' }} />
										) : (
											<FiHeart />
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				</motion.section>
			)}
		</>
	)
}

export default Single
