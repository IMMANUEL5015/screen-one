import { Header, SideNav } from "./components";
import GeneralTransactions from "./pages/GeneralTransactions";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Header />
      <GeneralTransactions />
    </div>
  );
}

export default App;
