
class NameForm extends React.Component {
  constructor(props) {
    super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
  }
  
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
        setSubmitting(false);
    }, 3000)
  }

  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
       <div>Submtting Form...</div>
     }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
          <label>
            <p>LastName</p>
            <input lastname="lastname" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
