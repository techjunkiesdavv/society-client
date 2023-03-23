import { Complaint,Login,About,Profile,Sidebar,Expenditure } from "./Components";
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
    </div>
  );
}
export default App;
