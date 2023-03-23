import { Complaint,Login,About,Profile,Sidebar,Expenditure,Committee } from "./Components";
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
    </div>
  );
}
export default App;
