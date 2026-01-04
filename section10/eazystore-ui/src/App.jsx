import './App.css'
import Header from "./components/Header";
import Footer from "./components/footer/Footer"
import Home from "./components/Home"
import React from "react";
import { Outlet } from 'react-router-dom';  {/* Dynamically add the pages between the header and footer rather than importing header and footer for each and every component */ }
import { useNavigation } from 'react-router-dom';  //React hook that Returns the current navigation defaulting to an idle navigation when no navigation is in progress. You can use this to render pending UI lile a global spinner or read formData from a form navigation
function App() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      {/* //(property) state: "idle" | "loading" | "submitting" */}
      {navigation.state === "loading" ? (
        <div className='flex items-center justify-center min-h-[852px]'>
          <span className='text-4xl font-semibold text-primary dark:text-light'> Loading...</span>
        </div>
      ) : (
        <Outlet /> 
        )}
      <Footer />
    </>

  );
}

export default App
