import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";
function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Yunus Olgan", phone_number: "053936655.." },
    { fullname: "Ahmet Yılmaz", phone_number: "053132525.." },
    { fullname: "Hatice Esma", phone_number: "053526532.." },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
