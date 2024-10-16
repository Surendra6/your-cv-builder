import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import UserPrivacy from "./pages/UserPrivacy";
import CVBuilder from "./pages/CVBuilder";
import CoverLetter from "./pages/CoverLetter";
import CreateCV from "./pages/CreateCV";
import CreateCoverLetter from "./pages/CreateCoverLetter";

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
              <Route
                path="/your-cv-builder/cv-builder"
                element={<CVBuilder />}
              />
              <Route
                path="/your-cv-builder/cv-builder/:id"
                element={<CreateCV />}
              />
              <Route
                path="/your-cv-builder/cover-letter"
                element={<CoverLetter />}
              />
              <Route
                path="/your-cv-builder/cover-letter/:id"
                element={<CreateCoverLetter />}
              />
              <Route
                path="/your-cv-builder/privacy"
                element={<UserPrivacy />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
