import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="bg-white w-screen h-screen overflow-hidden flex flex-col justify-center">
          <div className="flex justify-end">
            <Header />
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
