import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductWishlist from '../../components/productWishlist/ProductWishlist'
import WishlistNotFound from '../../components/wishlist-notfound/WishlistNotFound'

const Wishlist = () => {
	const wishlist = useSelector(state => state.wishlist.value)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return <>{wishlist?.length ? <ProductWishlist /> : <WishlistNotFound />}</>
}

export default Wishlist
