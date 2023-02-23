import * as React from "react";
import AppBar from "./components/app-bar/AppBar";
import PageOne from "./components/pages/PageOne";
import PageTwo from "./components/pages/PageTwo";
import PageThree from "./components/pages/PageThree";

function App() {
  const [displayPage, setDisplayPage] = React.useState({
    "Page One": true,
    "Page Two": false,
    "Page Three": false,
  });

  return (
    <>
      <AppBar displayPage={displayPage} setDisplayPage={setDisplayPage} />
      {displayPage["Page One"] && <PageOne />}
      {displayPage["Page Two"] && <PageTwo />}
      {displayPage["Page Three"] && <PageThree />}
    </>
  );
}

export default App;
