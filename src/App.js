import './App.css';

function App() {
  return (
    <>
    <Home />
    <Form />
    <Home />
    </>
  );
}

const Home = () =>{
  return(
    <>
    <h1>Hello world</h1>
      <b>
        Bold words
      </b>
    <i>
      Italic words
    </i>
    </>
  );
}

const Form = () =>{
  return (
    <>
    <div>
      <form>
        <label htmlFor='email'>Email: </label>
        <input type="email" id='email'/>
        <br />
        <label htmlFor='password'>Password: </label>
        <input type="password" id='email'/>
        <br/>
        <button type='submit'>Submit</button>
      </form>

    </div>

    </>
  ) 
}
export default App;
