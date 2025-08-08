import { useSelector } from 'react-redux'
import Product from '../product/Product'

const ProductWishlist = () => {
	const wishlist = useSelector(state => state.wishlist.value)

	return <Product data={wishlist} justifyContent='start' />
}

export default ProductWishlist
