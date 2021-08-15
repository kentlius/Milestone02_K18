import ProfileAvatar from '../../Assets/ProfileAvatar.png'
import FotoMaudy from '../../Assets/maudy.jpg'
import { Link } from 'react-router-dom'

const parentStyles = {
	display: "flex",
	flexDirection: "row",
	padding: "1%"
}

const avatarStyle = {
	height: "10vh",
	marginRight: "1vw",
	borderRadius: "50%"
}

const nameStyles = {
	fontFamily: "Poppins, sans-serif",
	color: "#000",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "1.2rem",
	lineHeight: "36px"
}

const progressBar = {
	width: "80%",
	height: "1vh",
	backgroundColor: "#D1FDFF",
	borderRadius: "5px"
}

const progress = {
	height: "100%",
	width: "70%",
	backgroundColor: "#00ADB5",
	borderRadius: "5px"
}

const MyProfile = () => {
	return(
		<Link to="/">
			<div style={parentStyles}>
				<img src={FotoMaudy} style={avatarStyle}/>
				<div>
					<div style={nameStyles}>
						Maudy Ayunda
					</div>
					<div style={progressBar}>
						<div style={progress}></div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default MyProfile