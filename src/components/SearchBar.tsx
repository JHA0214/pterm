interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="search-bar"
      type="search"
      placeholder="용어명(한글/영문/약어) 또는 키워드로 검색"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="용어 검색"
    />
  );
}
