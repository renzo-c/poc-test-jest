import React from "react";
import Routes from "./Routes";
import Drawer from "./Drawer";
import Dialog from "./Dialog";
import Items from "./Items";

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'center', justifyContent: 'center'}}>
      <Routes>
        <Drawer/>
        <Dialog/>
      </Routes>
    </div>
  );
};

export default App;
