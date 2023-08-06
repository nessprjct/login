import logo from './logo.svg';
import './App.css';



function App() {

  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>LOGIN </legend>
          <table>
              <tr>
                <td> <input type="text" placeholder="UserName or Email"></input> </td>
              </tr>
              <tr>
                <td> <input type="password" placeholder="PassWord"></input> </td>
              </tr>
              <tr>
                <td className="rmbr"><input type="checkbox"></input><label>Remember me</label> </td>
              </tr>                
              <tr>
                <td><button> Login Now </button></td>
              </tr>             
              <tr>
                <td><p>Don't have an account? <a href="">SignUp</a></p></td>
              </tr>                        
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
