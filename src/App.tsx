import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RatingCard from "./components/RatingCard";
import RatingCardResult from "./components/RatingCardResult";

const App = () => {
  const ratingOptions: number = 5;
  const [rating, setRating] = useState<number>(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RatingCard ratingOptions={ratingOptions} setRating={setRating} />
          }
        />
        <Route
          path="/rating-result"
          element={
            <RatingCardResult ratingOptions={ratingOptions} rating={rating} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
