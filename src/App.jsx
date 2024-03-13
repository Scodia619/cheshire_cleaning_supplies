import "./App.css";
import mail from "./assets/mail.svg";
import phone from "./assets/phone.svg";

function App() {
  return (
    <>
      <header className="header">
        <div className="left-header">
          <img
            id="logo"
            src="https://i.ontraport.com/163552.8f0e543de4dbb1fa4feddb04d9859bf7.JPEG"
            alt="Cheshire Cleaning Supplies"
          />
        </div>
        <div className="right-header">
          <div className="phone">
            <img src={phone} alt="Phone: " />
            <h3>07796 582 479</h3>
          </div>
          <div className="email">
            <img src={mail} alt="Email: " />
            <h3>info@CheshireCleaningSupplies.co.uk</h3>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
