import { Link } from "react-router-dom";
import type { Term } from "../types";

export function TermCard({ term }: { term: Term }) {
  return (
    <Link to={`/term/${term.id}`} className="term-card">
      <div className="term-card-names">
        <span className="term-card-ko">{term.ko}</span>
        <span className="term-card-en">
          {term.en}
          {term.abbr ? ` (${term.abbr})` : ""}
        </span>
      </div>
      <p className="term-card-definition">{term.definition}</p>
    </Link>
  );
}
