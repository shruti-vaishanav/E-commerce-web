import PropTypes from 'prop-types';
import {Routes, Route } from "react-router-dom";

import MainLayout from './Layouts/Main/Main';
NavSection.propTypes = {
  routes: PropTypes.array
};

type propsType = {
  routes: any[]
}

export default function NavSection({ routes }: propsType) {
  return (
    <Routes>
      {routes
        .map((route) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={
              <MainLayout key={route.key}>
                <route.component/>
              </MainLayout>
            }
          />
      )})}
    </Routes>
  );
}