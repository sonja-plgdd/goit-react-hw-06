function Contact({ name, number, id, handleDelete }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{number}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;
