import "./App.css";
import  {useSelector} from 'react-redux'


function App() {

const userList= useSelector((state)=>state.user.value )
console.log(userList)
return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 m-2">
          <div className="addUser card p-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter UserName
              </label>
              <input
                type="test"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Username"
              />
            </div>
            <button className="btn btn-outline-success">Add User</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
