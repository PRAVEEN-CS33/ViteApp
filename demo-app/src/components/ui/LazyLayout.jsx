import React, { Component, Suspense } from "react";
import PropeType from "prop-types";
import "../../assets/css/loading.css";

const Loader = () => {
  return (
    <div class="loadingio-spinner-bean-eater-mylgh1fmamc">
      <div class="ldio-vtd20em8gw">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

function LazyLayout({ component: Component, ...rest }) {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...rest} />
    </Suspense>
  );
}
LazyLayout.propeType = {
  Component: PropeType.elementType.isRequired,
};
export default LazyLayout;
