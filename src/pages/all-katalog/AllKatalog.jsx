import { useEffect } from 'react'
import Blog from '../../components/blog/Blog'
import Brand from '../../components/brand/Brand'
import Katalog from '../../components/katalog/Katalog'

const AllKatalog = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Katalog isMarriadeCard={true} />
			<Brand />
			<Blog isMarriade={true} isMarriadeProduct={false} />
		</>
	)
}

export default AllKatalog
