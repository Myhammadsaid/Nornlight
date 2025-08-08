import { useEffect } from 'react'

const ShipiningPayment = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<section className='shipining'>
			<div className='container'>
				<div className='shipining__style'>
					<h1 className='shipining__style__title h1'>Доставка и оплата</h1>
					<div className='shipining__content'>
						<div className='shipining__content__box'>
							<h2 className='shipining__content__box__text h2'>Доставка</h2>
							<p className='shipining__content__box__par h3'>
								Мы осуществляем доставку со склада по Москве и Московской
								области собственной курьерской службой. Транспортными компаниями
								нашу продукцию мы доставляем по всей территории РФ, а так же по
								всем странам СНГ. Сроки доставки: 4—6 недель
							</p>
						</div>
						<div className='shipining__content__box'>
							<h2 className='shipining__content__box__text'>
								Курьерская доставка
							</h2>
							<p className='shipining__content__box__par'>
								БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.
								<br />
								Заказы свыше 30 000 ₽ имеют бесплатную доставку,
								<br />
								включительно 15 км от МКАД
							</p>
						</div>
						<div className='shipining__content__box'>
							<h2 className='shipining__content__box__text'>Самовывоз</h2>
							<p className='shipining__content__box__par'>
								Любой заказ можно забрать самостоятельно по адресу:
								<br />
								г. Москва, Дмитровское шоссе д.100с2
							</p>
						</div>
					</div>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95901.41990287448!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1719675156693!5m2!1sru!2s'
					width='100%'
					height='672px'
					loading='lazy'
					style={{
						borderRadius: '15px',
						border: 'none',
					}}
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</section>
	)
}

export default ShipiningPayment
