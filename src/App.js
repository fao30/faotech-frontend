import { motion } from "framer-motion";

import Index from "./pages/Home/Index";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Index />
    </motion.div>
  );
}

export default App;
