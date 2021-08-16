import React, { useState, useEffect } from "react";
import MyProfile from '../../Components/MyProfile/MyProfile'
import ProfileTile from '../../Components/ProfileTile/ProfileTile'
import './Social.css'
import { FaSearch } from 'react-icons/fa'

import connectionData from './SocialData'

function ConnectionList(props) {
	if (props.searchterm.length > 0){
		return (
			connectionData
			.filter((data) => data.name.toLowerCase().includes(props.searchterm))
			.map((data) => {
				return(
					<ProfileTile className="grid-item" name={data.name} school={data.school} bio={data.bio} username={data.username} />
				);
			})
		)
	} else {
		if (props.category === 'all') {
			return (
				connectionData
				.map((data) => {
					return(
						<ProfileTile className="grid-item" name={data.name} school={data.school} bio={data.bio} username={data.username} />
					);
				})
			)
		} else {
			return(
				connectionData
				.filter((data) => data.category === props.category)
				.map((data) => {
					return(
						<ProfileTile className="grid-item" name={data.name} school={data.school} bio={data.bio} username={data.username} />
					);
				})
			)
		}
	}
}

/// Referensi React Hooks Search:
/// https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg

function Social() {
	const [category, setCategory] = useState('all')
	const [searchTerm, setSearchTerm] = useState('')
	const handleChange = (event) => {
		setSearchTerm(event.target.value)
	}
	
  return (
    <div className="social-container">
			<MyProfile/>

			<div className="search-container">
				<input onChange={handleChange} className="search-input" placeholder="Search..."/>
				<span className="search-button"><FaSearch/></span>
			</div>
			
			<div className="filter-button-container">
				<button className={`filter-button ${category === 'nonakademik'? "active":""}`} onClick={() => category!=='nonakademik'?setCategory('nonakademik'):setCategory('all')}>Nonakademik</button>
				<button className={`filter-button ${category === 'akademik'? "active":""}`} onClick={() => category!=='akademik'?setCategory('akademik'):setCategory('all')}>Akademik</button>
				<button className={`filter-button ${category === 'organisasi'? "active":""}`} onClick={() => category!=='organisasi'?setCategory('organisasi'):setCategory('all')}>Organisasi</button>
			</div>

			<div className="grid-container">
				<ConnectionList category={category} searchterm={searchTerm}/>
			</div>
    </div>
  )
}

export default Social;
