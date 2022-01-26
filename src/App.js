import Menu from "./components/Menu/Menu.js"
import SideMenu from "./components/SideMenu/SideMenu.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards/Cards.js";

function App() {
  return (
    <div>
      <Menu />
      <div className="row">
      <div className="col-2"><SideMenu /></div>
      <div className="col-6 my-4"><Cards /></div></div>
    </div>
  );
}

export default App;
