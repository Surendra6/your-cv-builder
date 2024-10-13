import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./pages/ErrorPage";
import { FaGithub } from "react-icons/fa";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="bg-white w-screen h-screen overflow-hidden flex flex-col justify-center">
          <div className="py-2 px-5 flex justify-end">
            <a
              href="https://github.com/Surendra6"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-100 flex bg-teal-200 border hover:bg-teal-100 text-black hover:text-black font-bold size-16 py-2 px-4 rounded-full shadow-sm items-center justify-center"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <div className="w-full h-screen flex flex-col scrollbar overflow-y-auto">
            <Routes>
              <Route path="/your-cv-builder" element={<Home />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
