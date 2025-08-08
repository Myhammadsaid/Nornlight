import { useEffect } from 'react'
import Single from '../../components/single/Single'

const SingleRoute = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Single />
		</>
	)
}

export default SingleRoute
