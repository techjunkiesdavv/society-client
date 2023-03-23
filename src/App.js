import { Complaint,Login,About,Profile,Sidebar,Expenditure,Committee,Register,Announcement} from "./Components";
import './App.css';

function App() {
  return (
    <div>
      <Announcement/>
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
