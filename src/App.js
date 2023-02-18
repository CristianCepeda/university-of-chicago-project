import * as React from 'react';
import AppBar from "./components/app-bar/AppBar";
import PageOne from "./components/pages/PageOne";
import PageTwo from "./components/pages/PageTwo";
import PageThree from "./components/pages/PageThree";

/*

Create a simple ReactJS application with 3 pages.
-  The first page will show a button which disappear when clicked and the text “Hello World!” appears instead.
   The button must be custom and include a glyphicon and a text that can change. It will display the text “Click” on it.
   Only for this page the text in the button must be bolded.
- The second page will show a function on a graph using D3. The function to draw is Fibonacci in the x range of [0,10]
  When loaded the page shows the X and Y axis, and a button, with the same style as the one on the first page, but with the text “Draw” on it.
  After pressing a button, the function line is added to the graph.
- The third page will show a calculator that you will embed starting from this project: https://github.com/ahfarmer/calculator

 */
function App() {
    const [displayPage, setDisplayPage] = React.useState({
        "Page One": true,
        "Page Two": false,
        "Page Three": false
    })

    return (
        <>
            <AppBar displayPage={displayPage} setDisplayPage={setDisplayPage}/>
            {displayPage["Page One"] && <PageOne/>}
            {displayPage["Page Two"] && <PageTwo/>}
            {displayPage["Page Three"] && <PageThree/>}
        </>
  );
}

export default App;
