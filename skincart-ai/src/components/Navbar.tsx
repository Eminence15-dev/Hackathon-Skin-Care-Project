import {
  Leaf,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#">
        <div className="brand-icon">
          <Leaf size={21} />
        </div>
        <span>
          skin<span className="brand-accent">cart</span>
        </span>
        <span className="ai-label">AI</span>
      </a>

      <nav className="nav-links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#analysis">Skin Analysis</a>
        <a href="#products">Discover Products</a>
        <a href="#about">About</a>
      </nav>

      <div className="nav-actions">
        <button className="icon-button" aria-label="Search">
          <Search size={19} />
        </button>
        <button className="icon-button" aria-label="Shopping bag">
          <ShoppingBag size={19} />
        </button>
        <button className="profile-button" aria-label="Profile">
          <UserRound size={18} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
