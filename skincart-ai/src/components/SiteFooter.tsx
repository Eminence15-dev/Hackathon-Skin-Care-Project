import { Leaf } from "lucide-react";
import "./SiteFooter.css";

function SiteFooter() {
  return (
    <footer id="about">
      <a className="brand footer-brand" href="#">
        <div className="brand-icon">
          <Leaf size={18} />
        </div>
        <span>
          skin<span className="brand-accent">cart</span>
        </span>
        <span className="ai-label">AI</span>
      </a>
      <p>Turning skin intelligence into shopping intelligence.</p>
      <span className="footer-copy">© 2026 SkinCart AI</span>
    </footer>
  );
}

export default SiteFooter;
