import brand_logo from "./brand_logo.png";
function Navigation() {
  return (
    <nav className="container">
      <div className="logo">
        <img src={brand_logo} alt="logo" />
      </div>
      <div>
        <ul className="list">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </div>
      <button className="login">login</button>
    </nav>
  );
}
export default Navigation;
