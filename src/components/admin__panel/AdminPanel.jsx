import { GoArrowLeft } from 'react-icons/go'
import { IoIosLogOut } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../context/slices/authSlice'

const AdminPanel = () => {
	let dispatch = useDispatch()
	let navigate = useNavigate()
	return (
		<aside className='admin'>
			<div className='container'>
				<div className='admin__style'>
					<div className='admin__panel'>
						<h1 onClick={() => navigate('/')} className='admin__panel__title'>
							<GoArrowLeft />
							Admin Dashboard
						</h1>
						<ul>
							<li onClick={() => navigate('/admin/create-product')}>
								<img src={'/images/admin__icon1.png'} alt='Icon1' />
								Create product
							</li>
							<li onClick={() => navigate('/admin/manage-product')}>
								<img src={'/images/admin__icon2.png'} alt='Icon2' />
								Manage product
							</li>
							<li onClick={() => navigate('/admin/create-category')}>
								<img src={'/images/admin__icon1.png'} alt='Icon1' />
								Create category
							</li>
							<li onClick={() => navigate('/admin/manage-category')}>
								<img src={'/images/admin__icon2.png'} alt='Icon2' />
								Manage category
							</li>
						</ul>
					</div>
					<button onClick={() => dispatch(logout())} className='admin__btn'>
						<IoIosLogOut />
						Log out
					</button>
				</div>
			</div>
		</aside>
	)
}

export default AdminPanel
