import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import './App.css';
import MyPieChart from "./components/operations/Pie";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div className="App">

        <Header/>
        <Nav/>
        <Operations/>
        <Goals/>
        <Accounts/>

      <MyPieChart/>
    </div>
  );
}

export default App;
