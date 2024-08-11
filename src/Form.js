import "./Form.css";
import Model from "./Model";
import { useState } from "react";
export default function Form() {
  const [modelMsg, setModelMsg] = useState(
    "The form has been send successfully"
  );
  const [error, setError] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [formdetails, setFormDetails] = useState({
    name: "",
    phone: "",
    age: "",
    isEmploy: false,
    salary: "",
  });
  function handleFormInputs(e) {
    e.preventDefault();
    setShowModel(true);
    setError(false);
    const { age } = formdetails;
    const { phone } = formdetails;
    setModelMsg("The form has been send successfully");
    if (age < 18 || age > 100) {
      setModelMsg("Age have to be between 18 and 100");
      setError(true);
    } else if (phone.length < 11 || phone.length > 12) {
      setModelMsg("The phone structure not true");
      setError(true);
    }
  }
  function handleCloseDiv() {
    if (showModel) {
      setShowModel(false);
    }
  }
  const btnIsDisabled =
    formdetails.name == "" || formdetails.age == "" || formdetails.phone == "";
  return (
    <div className="container" onClick={handleCloseDiv}>
      <form>
        <h1>Requesting a Loan</h1>
        <hr />
        <label>
          Name:
          <input
            placeholder="Your Full Name"
            value={formdetails.name}
            onChange={(event) => {
              setFormDetails({ ...formdetails, name: event.target.value });
            }}
          />
        </label>
        <label>
          Phone Number:
          <input
            placeholder="Your Phone number"
            value={formdetails.phone}
            onChange={(event) => {
              setFormDetails({ ...formdetails, phone: event.target.value });
            }}
          />
        </label>
        <label>
          Age:
          <input
            placeholder="Your Age"
            value={formdetails.age}
            onChange={(event) => {
              setFormDetails({ ...formdetails, age: event.target.value });
            }}
          />
        </label>
        <label>
          Are you an employee?
          <input
            type="checkbox"
            value={formdetails}
            onChange={(event) => {
              setFormDetails({
                ...formdetails,
                isEmploy: event.target.checked,
              });
            }}
          />
        </label>
        <label>
          Salary:
          <select
            value={formdetails.salary}
            onChange={(event) => {
              setFormDetails({
                ...formdetails,
                salary: event.target.value,
              });
            }}
          >
            <option>Less than 500$</option>
            <option>more than 500$</option>
            <option>Less than 1500$</option>
          </select>
        </label>
        <button
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleFormInputs}
          disabled={btnIsDisabled}
        >
          submit
        </button>
        <Model error={error} name={modelMsg} isVisible={showModel} />
      </form>
    </div>
  );
}
