import { Complaint,Login,About,Profile,Sidebar,Expenditure,Committee,Register,Announcement,AnnouncementHead} from "./Components";
import './App.css';

function App() {
  return (
    <div>
      <AnnouncementHead/>
      <Announcement/>
      <Complaint />
      <Profile/>
      <Sidebar/>
      <Expenditure />
      <Committee/>
      <Register/>
      <Login/>
      <About/>
    </div>
  );
}
export default App;
