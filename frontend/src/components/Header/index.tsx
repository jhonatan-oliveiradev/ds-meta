import logo from '../../assets/img/logo.svg';
import './styles.css';

const Header = () => {
  return (
    <div>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.github.com/jhonatan-oliveiradev">
              <span> @jhonatan-oliveiradev</span>
            </a>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
