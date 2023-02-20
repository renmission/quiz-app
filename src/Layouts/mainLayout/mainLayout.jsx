import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

function MainLayout({ user }) {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div data-testid="main-wrapper">
      <Outlet />
    </div>
  );
}

MainLayout.propTypes = {
  user: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  user: null,
};

export default MainLayout;
