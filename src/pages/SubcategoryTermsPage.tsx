import { Link, Navigate, useParams } from "react-router-dom";
import { TermCard } from "../components/TermCard";
import { getCategory, getSubcategory, getTermsByCategory } from "../data";

export function SubcategoryTermsPage() {
  const { categoryId = "", subcategoryId = "" } = useParams();
  const category = getCategory(categoryId);
  const subcategory = getSubcategory(categoryId, subcategoryId);

  if (!category || !subcategory) {
    return <Navigate to="/" replace />;
  }

  const items = getTermsByCategory(categoryId, subcategoryId);

  return (
    <div className="page subcategory-page">
      <Link to={`/category/${category.id}`} className="back-link">
        ← {category.name}
      </Link>
      <h2>
        {category.name} · {subcategory.name}
      </h2>
      {items.length === 0 ? (
        <p className="empty-state">등록된 용어가 없습니다.</p>
      ) : (
        <div className="term-list">
          {items.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      )}
    </div>
  );
}
