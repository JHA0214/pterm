import { Link, Navigate, useParams } from "react-router-dom";
import { getCategory } from "../data";

export function CategoryPage() {
  const { categoryId = "" } = useParams();
  const category = getCategory(categoryId);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page category-page">
      <Link to="/" className="back-link">
        ← 전체 분류
      </Link>
      <h2>{category.name}</h2>
      <div className="category-buttons">
        {category.subcategories.map((sub) => (
          <Link
            key={sub.id}
            to={`/category/${category.id}/${sub.id}`}
            className="category-button"
          >
            {sub.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
