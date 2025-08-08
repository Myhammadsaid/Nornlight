import { useEffect, useState } from 'react'
import { BsCart, BsCartCheck } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useGetCategoryQuery } from '../../context/api/categoryApi'
import { addToCart } from '../../context/slices/cartSlice'
import { toggleHeart } from '../../context/slices/wishlistSlice'
import Model from '../model/Model'
import Skeleton from '../skeleton/Skeleton'

const Product = ({ isMarriade, data, isLoading, justifyContent }) => {
	const wishlist = useSelector(state => state?.wishlist?.value)
	const carts = useSelector(state => state.cart.value)
	const [modulToggle, setModulToggle] = useState(null)
	const dispatch = useDispatch()
	let navigate = useNavigate()

	const { data: categories } = useGetCategoryQuery()
	const [categoryValue, setCategoryValue] = useState('all')
	const [filteredData, setFilteredData] = useState(null)

	useEffect(() => {
		if (categoryValue === 'all') {
			setFilteredData(data)
		} else {
			setFilteredData(data?.filter(i => i.category === categoryValue))
		}
	}, [categoryValue, data])

	let productItems = filteredData?.map(el => (
		<div key={el.id} className='product__card'>
			<img
				onClick={() => setModulToggle(el)}
				src={el.url[0]}
				alt='productImg'
			/>
			<div className='product__content'>
				<Link to={`/products/${el.id}`}>
					<h3 className='product__content__text' title={el.title}>
						{el.title}
					</h3>
				</Link>
				<div className='product__content__items'>
					<ul>
						<li>
							<s>{el.price * 2}₽</s>
						</li>
						<li>${el.price}₽</li>
					</ul>
					<button
						onClick={() => dispatch(addToCart(el))}
						className='product__content__items__item'
					>
						{carts?.some(item => item.id === el.id) ? (
							<BsCartCheck />
						) : (
							<BsCart />
						)}
					</button>
				</div>
			</div>
			<button
				className='product__heart'
				onClick={() => dispatch(toggleHeart(el))}
			>
				{wishlist?.some(item => item.id === el.id) ? (
					<FiHeart style={{ fill: 'red', stroke: 'red' }} />
				) : (
					<FiHeart />
				)}
			</button>
		</div>
	))

	let categoryItems = categories?.map(el => (
		<li
			className={`category__item ${categoryValue === el.title ? 'click' : ''}`}
			onClick={() => setCategoryValue(el.title)}
			key={el.id}
		>
			<span>{el.title}</span>
		</li>
	))

	return (
		<>
			<section className='product'>
				<div className='container'>
					<div className='home__titles'>
						<h1 className='home__titles__title'>Популярные товары</h1>
						{isMarriade && (
							<button
								onClick={() => navigate('/all-products')}
								className='home__titles__btn display__none'
							>
								Все товары <IoIosArrowRoundForward />
							</button>
						)}
					</div>
					{isMarriade && productItems?.length ? (
						<ul className='category__list'>
							<li
								className={`category__item ${
									categoryValue === 'all' ? 'click' : ''
								}`}
								onClick={() => setCategoryValue('all')}
								value={'all'}
							>
								<span>Все товары</span>
							</li>
							{categoryItems}
						</ul>
					) : (
						<></>
					)}
					<div style={{ justifyContent }} className='product__cards'>
						{productItems?.length ? (
							isLoading ? (
								<Skeleton />
							) : (
								productItems
							)
						) : (
							<h1>У нас пока нету продуктов</h1>
						)}
					</div>
					{isMarriade && (
						<button
							onClick={() => navigate('/all-products')}
							style={{ display: 'none' }}
							className='home__titles__btn display__flex home__btn2 width__100'
						>
							Весь товары <IoIosArrowRoundForward />
						</button>
					)}
				</div>
			</section>
			{modulToggle ? (
				<Model setModulToggle={setModulToggle}>
					<div className='product__modul'>
						<img
							className='product__modul__img'
							src={modulToggle?.url[0]}
							alt={modulToggle?.title}
						/>
						<h1 className='product__modul__title'>{modulToggle?.title}</h1>
						<button
							onClick={() => navigate(`/products/${modulToggle?.id}`)}
							className='product__modul__btn'
						>
							Увидеть по подробнее
						</button>
					</div>
				</Model>
			) : (
				<></>
			)}
		</>
	)
}

export default Product
