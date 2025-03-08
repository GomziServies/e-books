import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import RTPFiveBook from "./pages/rtp-five-book";
import AASHindiBook from "./pages/anabolic-androgenic-steroids-hindi";
import AASBook from "./pages/anabolic-androgenic-steroids";
import BachelorNutritionEbook from "./pages/bachelor-of-nutrition-ebook";
import CWCBook from "./pages/certified-wellness-consultant";
import DBMHindiBook from "./pages/diploma-in-business-management-hindi";
import DBMBook from "./pages/diploma-in-business-management";
import DNCHindiBook from "./pages/diploma-in-nutrition-course-hindi";
import DNCBook from "./pages/diploma-in-nutrition-course";
import DPTHindiBook from "./pages/diploma-in-personal-training-hindi";
import DPTBook from "./pages/diploma-in-personal-training";
import GIMHindiBook from "./pages/group-instructor-masterclass-hindi";
import GIMBook from "./pages/group-instructor-masterclass";
import InjuryRehabBook from "./pages/injury-rehab";
import PowerliftingHindiBook from "./pages/powerlifting-hindi";
import PowerliftingBook from "./pages/powerlifting";
import RTPBook from "./pages/rapid-transformation-program";
import RTPThreePartOneBook from "./pages/rtp-three-part-one-book";
import RTPThreePartTwoBook from "./pages/rtp-three-part-two-book";
import RTPFourBook from "./pages/rtp-four-book";
import WMPBook from "./pages/weight-management-program";

function App() {
  return (
    <div className="text-center font-bold">
      <Routes>
        <Route path="/book/anabolic-androgenic-steroids-hindi" element={<AASHindiBook />} />
        <Route path="/book/anabolic-androgenic-steroids" element={<AASBook />} />
        <Route path="/book/bachelor-of-nutrition-ebook" element={<BachelorNutritionEbook />} />
        <Route path="/book/certified-wellness-consultant" element={<CWCBook />} />
        <Route path="/book/diploma-in-business-management-hindi" element={<DBMHindiBook />} />
        <Route path="/book/diploma-in-business-management" element={<DBMBook />} />
        <Route path="/book/diploma-in-nutrition-course-hindi" element={<DNCHindiBook />} />
        <Route path="/book/diploma-in-nutrition-course" element={<DNCBook />} />
        <Route path="/book/diploma-in-personal-training-hindi" element={<DPTHindiBook />} />
        <Route path="/book/diploma-in-personal-training" element={<DPTBook />} />
        <Route path="/book/group-instructor-masterclass-hindi" element={<GIMHindiBook />} />
        <Route path="/book/app-group-instructor-masterclass" element={<GIMBook />} />
        <Route path="/book/app-injury-rehab" element={<InjuryRehabBook />} />
        <Route path="/book/app-powerlifting-hindi" element={<PowerliftingHindiBook />} />
        <Route path="/book/app-powerlifting" element={<PowerliftingBook />} />
        <Route path="/book/rapid-transformation-program" element={<RTPBook />} />
        <Route path="/book/rtp-three-part-one-book" element={<RTPThreePartOneBook />} />
        <Route path="/book/rtp-three-part-two-book" element={<RTPThreePartTwoBook />} />
        <Route path="/book/rtp-four-book" element={<RTPFourBook />} />
        <Route path="/book/rtp-five-book" element={<RTPFiveBook />} />
        <Route path="/book/app-weight-management-program" element={<WMPBook />} />
      </Routes>
    </div>
  );
}

export default App;
