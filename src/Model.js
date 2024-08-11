import "./Model.css";

export default function Model({ error, name, isVisible }) {
  if (isVisible) {
    return (
      <div className="modelContainer">
        <div className="container">
          <h3 style={error == true ? { color: "red" } : { color: "green" }}>
            {name}
          </h3>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
