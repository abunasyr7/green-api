import "./Contacts.css";
import MessangerIcon from "../img/messenger.png"

const Contacts = () => {


  return (
    <div className="contacts">
      <img src={MessangerIcon} alt="Messanger Icon" style={{width: 25, height: 25}} />
      <ul>
        <li className="contacts__container">
          <div className="photo"></div>
          <div className="contacts__info">
            <h1>Name</h1>
            <p>Message</p>
          </div>
        </li>
        <li className="contacts__container">
          <div className="photo"></div>
          <div className="contacts__info">
            <h1>Name</h1>
            <p>Message</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
