import { useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { useSelector } from 'react-redux'

const bot_token = '5999169255:AAH54VNMOYp-myaWZcewvHtbt78LAZUv6Ms'
const chat_id = '-4208163629'

let initialState = {
	name: '',
	phone: '',
	email: '',
	address: '',
	comment: '',
}

const CartMassega = () => {
	const carts = useSelector(s => s.cart.value)

	let [data, setData] = useState(initialState)
	const handleSubmit = e => {
		e.preventDefault()

		let text = 'Buyurtma%0A'

		text += `Ism: ${data.name} %0A`
		text += `Telefon: ${data.phone} %0A`
		text += `Email: ${data.email} %0A`
		text += `Address: ${data.address} %0A`
		text += `Comment: ${data.comment} %0A%0A`

		carts?.forEach(product => {
			text += `Nomi: ${product.title} %0A`
			text += `Miqdori: ${product.quantity} %0A`
			text += `Narxi: ${product.price}$ %0A%0A`
		})

		let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${text}`

		let api = new XMLHttpRequest()
		api.open('GET', url, true)
		api.send()

		setData(initialState)
	}

	return (
		<section className='cart__message'>
			<div className='container'>
				<form onSubmit={handleSubmit} className='cart__message__style'>
					<div className='cart__message__content'>
						<h1 className='cart__message__content__text'>Оформление</h1>
						<div className='cart__message__content__inputs'>
							<input
								onChange={e => setData(p => ({ ...p, name: e.target.value }))}
								value={data.name}
								required
								type='text'
								placeholder='ФИО'
							/>
							<input
								onChange={e => setData(p => ({ ...p, phone: e.target.value }))}
								value={data.phone}
								required
								type='number'
								placeholder='Телефон'
							/>
							<input
								onChange={e => setData(p => ({ ...p, email: e.target.value }))}
								value={data.email}
								required
								type='text'
								placeholder='Электронная почта'
							/>
						</div>
						<div className='line'></div>
						<h1 className='cart__message__content__text'>Доставка</h1>
						<div className='cart__message__content__inputs2'>
							<input
								className='cart__input'
								onChange={e =>
									setData(p => ({ ...p, address: e.target.value }))
								}
								value={data.address}
								type='text'
								required
								placeholder='Адрес доставки'
							/>
							<br />
							<textarea
								onChange={e =>
									setData(p => ({ ...p, comment: e.target.value }))
								}
								value={data.comment}
								required
								className='cart__textarea'
								placeholder='Комментарий'
							></textarea>
						</div>
					</div>
					<div className='cart__message__content'>
						<h1 className='cart__message__content__text'>Оплата</h1>
						<div className='cart__message__content__box'>
							<p>
								Товары.............................................
								{carts?.reduce((a, b) => a + b?.price * b.quantity, 0)}₽
							</p>
							<p>Доставка..............................................50₽</p>
						</div>
						<h2 className='cart__message__content__price'>
							{carts?.reduce((a, b) => a + b?.price * b.quantity, 0)}₽
						</h2>
						<div className='cart__message__content__btns'>
							<button className='cart__message__content__btns__btn'>
								Купить
							</button>
							<p>
								<CiCircleCheck /> Я согласен наобработку моих персональных
								данных
							</p>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default CartMassega
