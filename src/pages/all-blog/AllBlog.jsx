import { useEffect } from 'react'
import Blog from '../../components/blog/Blog'

const AllBlog = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return <Blog isMarriade={false} isMarriadeProduct={true} />
}

export default AllBlog
