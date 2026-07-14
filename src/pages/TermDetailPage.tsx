import { Link, Navigate, useParams } from "react-router-dom";
import { getCategory, getSubcategory, getTerm } from "../data";

export function TermDetailPage() {
  const { termId = "" } = useParams();
  const term = getTerm(termId);

  if (!term) {
    return <Navigate to="/" replace />;
  }

  const category = getCategory(term.categoryId);
  const subcategory = getSubcategory(term.categoryId, term.subcategoryId);
  const relatedTerms = term.relatedTermIds
    .map((id) => getTerm(id))
    .filter((t) => t !== undefined);

  return (
    <div className="page term-detail-page">
      {category && subcategory && (
        <Link
          to={`/category/${category.id}/${subcategory.id}`}
          className="back-link"
        >
          ← {category.name} · {subcategory.name}
        </Link>
      )}

      <h2 className="term-detail-ko">{term.ko}</h2>
      <p className="term-detail-en">
        {term.en}
        {term.abbr ? ` (${term.abbr})` : ""}
      </p>

      <section className="term-detail-section">
        <h3>정의</h3>
        <p>{term.definition}</p>
      </section>

      {relatedTerms.length > 0 && (
        <section className="term-detail-section">
          <h3>관련 용어</h3>
          <ul className="related-term-list">
            {relatedTerms.map((related) => (
              <li key={related!.id}>
                <Link to={`/term/${related!.id}`}>{related!.ko}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="term-detail-section">
        <h3>출처</h3>
        <ul className="source-list">
          {term.sources.map((source, i) => (
            <li key={i}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              ) : (
                source.label
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
