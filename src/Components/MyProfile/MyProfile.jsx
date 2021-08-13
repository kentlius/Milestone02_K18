import ProfileAvatar from '../../Assets/ProfileAvatar.png'

const parentStyles = {
	display: "flex",
	flexDirection: "row",
}

const avatarStyle = {
	height: "10vh",
	marginRight: "1vw"
}

const nameStyles = {
	fontFamily: "Poppins, sans-serif",
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
		<div style={parentStyles}>
			<img src={ProfileAvatar} style={avatarStyle}/>
			<div>
				<div style={nameStyles}>
					Maudy Ayunda
				</div>
				<div style={progressBar}>
					<div style={progress}></div>
				</div>
			</div>
		</div>
	)
}

export default MyProfile