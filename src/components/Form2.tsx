import FormButton from './FormButton'

function Form2() {
  const myAction = async (formData: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      NamedNodeMap: formData.get("name"),
      email: formData.get("email"),
    };
    console.log(newPost);
  };

  return (
    <form action={myAction}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="border-2"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="border-2"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <FormButton />
    </form>
  );
}

export default Form2;