import React from "react";
import MyProfile from '../../Components/MyProfile/MyProfile'
import ProfileTile from '../../Components/ProfileTile/ProfileTile'
import './Social.css'

import connectionData from './SocialData'

function Social() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
			<MyProfile/>
			<div>
				searchbar
			</div>
			<div>
				filter
			</div>
			<div className="grid-container">
				{connectionData.map((data) => {
					return(
						<ProfileTile className="grid-item" name={data.name} school={data.school} bio={data.bio} username={data.username} />
					);
				})}
			</div>
    </div>
  );
}

export default Social;
