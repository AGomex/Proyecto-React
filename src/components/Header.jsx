import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <header>
        <nav className="nav">
          <Link to="/"><h1>Blog</h1></Link>
          <ul>
            <li><Link to="/">Home <i className="fas fa-home"></i></Link></li>
            <li><Link to="/Crear_blog">Crear blog <i className="fas fa-info-circle"></i></Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
