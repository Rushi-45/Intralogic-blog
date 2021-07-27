import React, { Component } from "react";
import { Container } from "reactstrap";
import logo from "../assets/images/logo.jpg";

class RootLogo extends Component {
	render() {
		return (
			<Container className="container">
				<div className="col justify-content-md-center">
					<div className="row-1"></div>
					<div className="row-4 justify-content-md-center text-center">
						<h1
							className="root-access"
							style={{
								fontSize: "72px",
								textShadow: "revert",
								marginBottom: "100px",
							}}
						>
							Welcome to Rushi's Blog Site
						</h1>
					</div>
					<div className="row-1"></div>
					<div className="row-6">
						<img
							className="img-responsive center img-thumbnail"
							src={logo}
							alt="Root Computer"
						/>
					</div>
				</div>
			</Container>
		);
	}
}

export default RootLogo;
