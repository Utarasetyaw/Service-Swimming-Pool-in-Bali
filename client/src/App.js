import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import AdminBlog from "./pages/Admin/AdminBlog";
import AdminProduct from "./pages/Admin/AdminProduct";
import AdminProductCreate from "./pages/AdminCreate/AdminProductCreate"
import AdminProductEdit from "./pages/AdminEdit/AdminProductEdit"
import Edit from "./pages/Edit";
import Create from "./pages/Create";


function App() {
  return (
    <div className="overflow-hidden no-scrollbar">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/blog" component={Blog} />
          <Route path="/create" component={Create} />
          <Route path="/admin/product/create" component={AdminProductCreate} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin/blog" component={AdminBlog} />
          <Route path="/admin/product" component={AdminProduct} />
          <Route path="/edit" component={Edit} />
          <Route path="/editp" component={AdminProductEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
