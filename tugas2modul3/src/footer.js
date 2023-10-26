import React from "react";
import "./style.css"; 
function Footer() {
  return (
    <footer>
      <div className="footer">
      <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
}

export default Footer;