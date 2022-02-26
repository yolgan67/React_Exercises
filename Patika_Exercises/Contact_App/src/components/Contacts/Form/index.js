import { useState, useEffect } from "react";

const initial_values = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initial_values);

  useEffect(() => {
    setForm(initial_values);
  }, [contacts]);
  // Ekleme işleminin use Effect ile yapılmış hali, setFormu handleSubmit() ilede kullanabilirdim.

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    console.log(form);
    addContact([...contacts, form]);
    // addContact((prevState)=>[...prevState,form])
    // Önceki state i alıp,  formu ekleme yaptık
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            name="fullname"
            placeholder="Enter a name"
            value={form.fullname}
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="phone_number"
            placeholder="Enter a phone number"
            value={form.phone_number}
          />
        </div>

        <div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
