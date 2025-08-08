import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	decrementCart,
	deleteAllCart,
	incrementCart,
	removeFromCart,
} from '../../context/slices/cartSlice'

const ProductCart = () => {
	const carts = useSelector(state => state?.cart?.value)
	let dispatch = useDispatch()

	let cartItems = carts?.map(el => (
		<tr key={el.id} className='cart__card'>
			<td className='cart__card__content'>
				<img src={el.url[0]} alt='productImg' />
			</td>
			<td className='cart__card__content'>
				<Link to={`/products/${el.id}`}>
					<h3 className='cart__card__content__text' title={el.title}>
						{el.title}
					</h3>
				</Link>
				<h3 className='cart__card__content__price'>{el.price}₽</h3>
			</td>
			<td className='cart__card__content'>
				<p className='cart__card__content__par'>{el.desc}</p>
			</td>
			<td className='cart__card__content'>
				<p className='cart__card__content__par'>{el.desc}</p>
			</td>
			<td className='cart__card__content'>
				<div className='cart__card__content__btns'>
					<button
						onClick={() => dispatch(decrementCart(el))}
						disabled={el.quantity === 1}
					>
						-
					</button>
					<button>{el.quantity}</button>
					<button
						disabled={el.quantity === 10}
						onClick={() => dispatch(incrementCart(el))}
					>
						+
					</button>
					<button onClick={() => dispatch(removeFromCart(el.id))}>
						<RiDeleteBin6Line />
					</button>
				</div>
			</td>
		</tr>
	))

	return (
		<section className='cart'>
			<div className='container'>
				<div className='cart__titles'>
					<h1 className='cart__titles__title'>Корзина</h1>
					<div className='cart__titles__count'>{carts?.length}</div>
					<button
						className='cart__titles__btn'
						onClick={() => dispatch(deleteAllCart())}
					>
						<RiDeleteBin6Line />
					</button>
				</div>
				<div className='cart__cards'>
					<table>
						<thead>
							<tr>
								<th>Фото</th>
								<th>Товары</th>
								<th>Описание</th>
								<th>Артикул</th>
								<th>Количество</th>
							</tr>
						</thead>
						<tbody>{cartItems}</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}

export default ProductCart
