import logo from "./logo.svg";
import "./App.css";
import customData from "./data.json";
import { Link } from "react-router-dom";
function App() {
    console.log(customData);

    return (
        <div className="App">
            <ul>
                {customData.map((product) => (
                    <li>
                        {" "}
                        <Link to={`singlepage/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
