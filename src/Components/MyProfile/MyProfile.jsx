import ProfileAvatar from '../../Assets/ProfileAvatar.png'

// Yang level2 maudy ayunda itu

const parentStyles = {
	display: "flex",
	flexDirection: "row",
}

const NameStyles = {
	fontFamily: "Poppins, sans-serif",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "24px",
	lineHeight: "36px"
}

const progressBar = {
	width: "100%",
	height: "1vh",
	backgroundColor: "#D1FDFF",
}

const progress = {
	height: "100%",
	backgroundColor: "#00ADB5"
}

const MyProfile = () => {
	return(
		<div style={parentStyles}>
			<img src={ProfileAvatar}/>
			<div style={NameStyles}>
				Maudy Ayunda
			</div>
			<div style={progressBar}>
				<div style={progress}></div>
			</div>
		</div>
	)
}

export default MyProfile