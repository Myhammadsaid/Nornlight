import { useEffect } from 'react'
import Blog from '../../components/blog/Blog'
import Brand from '../../components/brand/Brand'
import CompanyInfo from '../../components/componyInfo/CompanyInfo'

const AboutCompany = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<CompanyInfo />
			<Brand />
			<Blog isMarriade={false} />
		</>
	)
}

export default AboutCompany
