import { type FunctionalComponent } from "preact";
import { Link } from "wouter-preact";

const Layout: FunctionalComponent = ({ children }) => (
  <div style={{ padding: "2rem" }}>
    <nav style={{ marginBottom: "2rem" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>Login</Link>
      <Link href="/app">Dashboard</Link>
    </nav>

    {children}
  </div>
);

export default Layout;
