import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { SubcategoryTermsPage } from "./pages/SubcategoryTermsPage";
import { TermDetailPage } from "./pages/TermDetailPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route
            path="category/:categoryId/:subcategoryId"
            element={<SubcategoryTermsPage />}
          />
          <Route path="term/:termId" element={<TermDetailPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
