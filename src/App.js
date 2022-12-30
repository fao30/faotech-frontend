import { useEffect } from "react";
import { themeChange } from "theme-change";
import Index from "./pages/Home/Index";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div>
      <Index />
    </div>
  );
}

export default App;
