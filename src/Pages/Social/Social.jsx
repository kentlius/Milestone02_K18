import React from "react";
import MyProfile from '../../Components/MyProfile/MyProfile'
import ProfileTile from '../../Components/ProfileTile/ProfileTile'
import './Social.css'
import { FaSearch } from 'react-icons/fa'

import connectionData from './SocialData'

function Social() {
  return (
    <div className="social-container">
			<MyProfile/>
			<div className="search-container">
				<input className="search-input"/>
				<span className="search-button"><FaSearch/></span>
			</div>
			<div className="filter-button-container">
				<button className="filter-button">Nonakademik</button>
				<button className="filter-button">Akademik</button>
				<button className="filter-button">Organisasi</button>
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
