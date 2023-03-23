import { Complaint,Login,About,Profile,Sidebar,Expenditure,Committee,Register} from "./Components";
import './App.css';
function App() {
  return (
    <div>
      <About/>
      <Login/>
      <Complaint />
      <Profile/>
      <Sidebar/>
      <Expenditure />
      <Committee/>
      <Register/>
    </div>
  );
}
export default App;
