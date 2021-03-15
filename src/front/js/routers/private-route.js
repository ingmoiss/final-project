import React, { useContext } from "react";
import { FormAdop } from "../component/formAdop";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function PrivateRoute({ component: Component, ...rest }) {
	const { store, actions } = useContext(Context);

	const logged = store.login;

	return <Route {...rest}>{logged == "true" ? <Component /> : <Redirect to="/log-in" />}</Route>;
}

PrivateRoute.propTypes = {
	component: PropTypes.string
};
