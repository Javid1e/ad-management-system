import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./Utils/AppRoute";
import ScrollReveal from "./Utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./Layouts/LayoutDefault";

// Views
import Home from "./Views/Home";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )}
    />
  );
};

export default App;
