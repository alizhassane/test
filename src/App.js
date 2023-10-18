import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import HomeScreen from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Categories from "./pages/Categories";

export default function app() {
  return (
    <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/submit" element={<HomeScreen/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                    <Route path="/Categories" element={<Categories/>}/>
                </Routes>
            </div>
        </BrowserRouter>
  )
}

