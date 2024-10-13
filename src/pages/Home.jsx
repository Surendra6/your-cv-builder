import { useEffect, useState } from "react";
import loading from "../assets/loading-snail.gif";

const Home = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplashScreen(false); // Hide the splash screen after 3000ms
    }, 3000);
    return () => clearTimeout(splashTimeout);
  }, [setShowSplashScreen]);

  return showSplashScreen ? (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <img src={loading} alt="Logo" className="w-64 h-64" />
      </div>
    </div>
  ) : (
    <>
      <div className="grid gap-5 py-10 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        Your CV Bulider
      </div>
    </>
  );
};

export default Home;
