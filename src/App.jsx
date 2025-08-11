import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from './componenets/Main';
import Sidenav from './componenets/Sidenav';
import Work from './componenets/Work';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';
import MoreProjects from './componenets/MoreProjects'; 

function App() {
  return (
    <>
      <Sidenav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Work />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/more-projects" element={<MoreProjects />} />
      </Routes>
    </>
  );
}

export default App;
