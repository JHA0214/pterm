import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand">
          PTerm
        </Link>
        <p className="brand-tagline">물리치료 용어 검색</p>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          본 서비스는 학습·참고 목적이며 실제 임상 판단을 대체하지 않는다.
        </p>
      </footer>
    </div>
  );
}
