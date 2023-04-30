import React from "react";
import "./App.scss";
// import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { ClassBook } from "./pages/ClassBook/ClassBook";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/class-book" element={<ClassBook />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes> */}
      <main>
        {/* <HomePage />
        <ClassBook /> */}
        <LoginPage />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
