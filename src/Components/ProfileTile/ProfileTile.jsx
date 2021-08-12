import ProfileAvatar from '../../Assets/ProfileAvatar.png'
import './ProfileTile.css'
import { Link } from 'react-router-dom'

// template
const ProfileTile = (props) => {
	return(
		<div className="profile-tile">
			<img src={ProfileAvatar}/>
			<div className="profile-detail">
				<div className="profile-name">{ props.name }</div>
				<div className="profile-school">{ props.school }</div>
				<div className="profile-bio">{ props.bio }</div>
				<Link className="profile-url" to={ '/' + props.username }>Show profile</Link>
			</div>
		</div>
	)
}

export default ProfileTile