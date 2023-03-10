import React from "react";
import HeadlineLeft from "./components/HeadlineLeft";
import ImgRight from "./components/ImgRight";

function App() {
  return (
    <main className="md:grid md:grid-cols-layout min-h-screen">
      <HeadlineLeft />
      <ImgRight />
    </main>
  );
}

export default App;
