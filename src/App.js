import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./scss/main.scss";
import ChatPage from "./pages/ChatPage";
import BlogListPage from "./pages/BlogListPage";
import NewsletterListPage from "./pages/NewsletterListPage";
import BlogNewPage from "./pages/BlogNewPage";
import BlogUsers from "./pages/BlogUsers";

function App() {
  return (
    <Router>
      {/* <header className="header">
        <Link to="/" className="logo">
          <div></div>
        </Link>

        <Link to="/" className="dd-toggle dd-toggle-hover my animation ">
          Chat
        </Link>
        <Link to="/blog" className="dd-toggle dd-toggle-hover animation ">
          Blog
        </Link>
        <Link to="/newsletter" className="dd-toggle dd-toggle-hover animation ">
          Newsletter
        </Link>
      </header> */}

      <main className="main">
        <Switch>
          <Route path="/newsletter">
            <NewsletterListPage />
          </Route>
          <Route path="/blog">
            <BlogListPage />
          </Route>
          <Route path="/blog-user">
            <BlogUsers />
          </Route>
          <Route path="/blognew">
            <BlogNewPage />
          </Route>
          <Route path="/">
            <ChatPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
