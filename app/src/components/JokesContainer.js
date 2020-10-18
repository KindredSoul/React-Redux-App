import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategory, fetchJoke } from "../actions";

const JokesContainer = (props) => {
	useEffect(() => {
		props.fetchCategory();
	}, []);
	return (
		<>
			{props.isLoading ? (
				<h2>Grabbing a joke from Chuck Norris's bag 'o jokes!</h2>
			) : (
				<div>
					<h2>{props.joke}</h2>
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
						}}>
						{props.categories.map((category) => (
							<button
								key={category}
								onClick={(e) => {
									e.preventDefault();
									props.fetchJoke(category);
								}}>
								{category}
							</button>
						))}
					</div>
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		categories: state.categories,
		joke: state.joke,
		isLoading: state.isLoading,
	};
};

export default connect(mapStateToProps, { fetchCategory, fetchJoke })(
	JokesContainer
);
