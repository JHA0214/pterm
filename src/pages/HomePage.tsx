import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { TermCard } from "../components/TermCard";
import { useTermSearch } from "../hooks/useTermSearch";
import { categories } from "../data";

export function HomePage() {
  const [query, setQuery] = useState("");
  const results = useTermSearch(query);
  const isSearching = query.trim().length > 0;

  return (
    <div className="page home-page">
      <SearchBar value={query} onChange={setQuery} />

      {isSearching ? (
        <section className="search-results">
          <h2>검색 결과 ({results.length})</h2>
          {results.length === 0 ? (
            <p className="empty-state">일치하는 용어를 찾지 못했습니다.</p>
          ) : (
            <div className="term-list">
              {results.map((term) => (
                <TermCard key={term.id} term={term} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <section className="category-grid">
          <h2>분류</h2>
          <div className="category-buttons">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="category-button"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
