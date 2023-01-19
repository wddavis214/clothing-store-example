import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home.components";
import Directory from "./components/directory/directory.component"
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => {
  return <h1>I am the shop page.</h1>
}



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Directory />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
