import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartMassega from '../../components/cart-message/CartMassega'
import CartNotFound from '../../components/cart-notfound/CartNotFound'
import ProductCart from '../../components/productCart/ProductCart'

const Cart = () => {
	const carts = useSelector(state => state?.cart?.value)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			{carts?.length ? (
				<>
					<ProductCart />
					<CartMassega />
				</>
			) : (
				<CartNotFound />
			)}
		</>
	)
}

export default Cart
