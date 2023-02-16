import { FaReact } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <p>Website created with React </p>
        <div className="footer-icon-container"><FaReact /></div>
      </div>
      <div className="footer-right">
        <div className="footer-right-item">
          <p>Icons Credit:</p>
          <a href="https://react-icons.github.io/react-icons">
            React Icons</a>

        </div>
        <div className="footer-right-item">
          <p>Background SVG credit: </p>
          <a href="https://bgjar.com/">BGJar</a>

        </div>
      </div>
    </footer>
  )
}


export default Footer;