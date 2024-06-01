import './Style.css';

function Footer({ setPageTab }) {

  return (
    <>
      <div className="footer">
        <div className="foot-icon">
          {/* <i className="fa-solid fa-house" /> */}
          <p onClick={() => setPageTab('Home')}>Home</p>
        </div>
        <div className="foot-icon">
          {/* <i className="fa-solid fa-search" /> */}
          <p onClick={() => setPageTab('Search')}>Search</p>
        </div>
        <div className="foot-icon">
          {/* <i className="fa-solid fa-layer-group" /> */}
          <p onClick={() => setPageTab('Library')}>Library</p>
        </div>
        <div className="foot-icon">
          {/* <i className="fa-solid fa-user" /> */}
          <p onClick={() => setPageTab('About')}>About</p>
        </div>
      </div>
    </>
  );
}

export default Footer;