export default function Form({ handleCreateUser, handleDeleteUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleCreateUser(event);
    event.target.reset();
  }
  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
      <button
        className="form__submit-button"
        type="button"
        onClick={handleDeleteUser}
      >
        Delete
      </button>
    </form>
  );
}
