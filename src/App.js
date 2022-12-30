import { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div>
      <Navbar />
      <Test />
      <Test2 />
      <Test3 />
      <Test4 />
    </div>
  );
}

export default App;
