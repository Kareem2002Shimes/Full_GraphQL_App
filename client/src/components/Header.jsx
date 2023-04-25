import logo from "./assets/react.svg";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>GraphQL Project</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
