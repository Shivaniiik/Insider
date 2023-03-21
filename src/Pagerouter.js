import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from "./Page2";
import Page1 from "./Page1";

export default function pagerouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Page1 />}></Route>

          <Route exact path="/page2" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
