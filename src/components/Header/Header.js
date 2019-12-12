import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
	render(){
		return (
			<div className="Header">
		      	<ul>
		      		<li><Link to="/Outerhomepage">outerhomepage</Link></li>
					<li><Link to="/login">login</Link></li>
					<li><Link to="/register">register</Link></li>
		      	</ul>
		    </div>
		)
	}
}
export default Header;