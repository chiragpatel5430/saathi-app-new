import './App.css';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const responsiveMenu = () => {
    var element = document.getElementById("navbar");
    element.classList.toggle("expand");
  }

  return (
    <div className="App">
      <div class="header">
        <div class="container">
          <img class="logo" src={logo} />
          <a id="menu-icon" onClick={responsiveMenu}>&#9776;</a>
          {/* <nav id="navbar" class="navbar">
            <ul class="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav> */}

        </div>
      </div>
      <div className='main'>
        <div className='main-1'>
          <div className='main-form'>
            <h4>Please Fill the details To Find Your Best</h4>
            <hr/>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select Country</label>
              <div>
                <select id="selectbasic" name="selectbasic" class="form-control">
                  <option value="1">Option one</option>
                  <option value="2">Option two</option>
                  <option value="3">Option three</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select State</label>
              <div class="">
                <select id="selectbasic" name="selectbasic" class="form-control">
                  <option value="1">Option one</option>
                  <option value="2">Option two</option>
                  <option value="3">Option three</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select State</label>
              <div class="">
                <select id="selectbasic" name="selectbasic" class="form-control">
                  <option value="1">Option one</option>
                  <option value="2">Option two</option>
                  <option value="3">Option three</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select State</label>
              <div class="">
                <select id="selectbasic" name="selectbasic" class="form-control">
                  <option value="1">Option one</option>
                  <option value="2">Option two</option>
                  <option value="3">Option three</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="search-button">
                <button id="button1id" name="button1id" class="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
          <div className='tag-line'>
              Saathi....Har Safar ka Saathi
          </div>
        </div>
        <div className='card1'>
        </div>
      </div>
    </div>
  );
}

export default App;
