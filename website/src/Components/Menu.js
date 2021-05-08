import React, { Component } from 'react'
import ls from 'local-storage'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";

class Menu extends Component {

	constructor(props) {

		super(props);

		this.state = props.state

		this.logOut = this.logOut.bind(this);
	}

	menuBlockClass(root) {

		var uri = window.location.pathname;

		if(uri.substring(0,root.length) == root) {

			return "nav-item dropdown active";
		}

		return "nav-item dropdown";
	}

	logOut() {

		this.state.updateApp('session', false)
		this.state.updateApp('user', false)

		this.setState({

			session: false
		})
	}

	menuBlockClass(root) {

		var uri = window.location.pathname;

		if(uri.substring(0,root.length) == root) {

			return "nav-link active";
		}

		return "nav-link";
	}

	render() {

		var user = false;

		if(this.state?.session?.User?.ShadowUserID.length > 0) {

			user = this.state?.session?.User?.ShadowUserID;

		} else {

			user = this.state?.session?.User;
		}

		return (

			<span>
				<nav className="navbar navbar-lg navbar-expand-lg navbar-dark bg-primary">
					<div className="container">
						<Link to="/" className="navbar-brand">John2Land.co.uk</Link>

						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarCollapse">
							<ul className="navbar-nav ml-auto">

								<li className="nav-item mb-2 mb-md-0 mr-5">
									<Link to="/support" className="nav-link">Our Charities</Link>
							    </li>

								<li className="nav-item mb-2 mb-md-0 mr-5">
									<Link to="/route" className="nav-link">The Route</Link>
							    </li>

								<li className="nav-item mb-2 mb-md-0 mr-5">
									<Link to="/equipment" className="nav-link">Equipment</Link>
							    </li>

								<li className="nav-item mb-2 mb-md-0 mr-5">
									<Link to="/sponsors" className="nav-link">Our Sponsors</Link>
							    </li>

							</ul>
						</div>
					</div>
				</nav>
			</span>


		)
	}
}

export default Menu
