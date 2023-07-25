import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormPage } from "./pages/FormPage";
import { DefaultTemplate } from "./templates/DefaultTemplate";

export function App() {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<FormPage />} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
}
