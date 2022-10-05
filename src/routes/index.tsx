import ButtonExample from "pages/ButtonExample";
import { Route, Routes } from "react-router-dom";

function MainRouter() {
  return (
    <Routes>
      <Route path="/buttons" element={<ButtonExample />} />
    </Routes>
  );
}

export default MainRouter;
