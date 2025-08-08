import Blog from '../../components/blog/Blog'
import Brand from '../../components/brand/Brand'
import Company from '../../components/company/Company'
import Hero from '../../components/hero/Hero'
import Katalog from '../../components/katalog/Katalog'
import Product from '../../components/product/Product'
import { useGetProductsQuery } from '../../context/api/productApi'

const Home = () => {
	let { data, isLoading } = useGetProductsQuery()

	return (
		<>
			<Hero />
			<Katalog />
			<Company />
			<Product data={data} isLoading={isLoading} isMarriade={true} />
			<Brand />
			<Blog isMarriade={true} isMarriadeProduct={false} />
		</>
	)
}

export default Home
