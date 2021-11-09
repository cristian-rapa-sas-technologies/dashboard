import { Link } from "react-router-dom";

const BlogNewPage = () => {
  return (
    <div>
      <header className="header">
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
      </header>
      <div className="container">
        <div className="container-sidemenu">
          <ul className="container-sidemenu_list">
            <li className="container-sidemenu_items">
              <button className="dd-toggle_blog  ">
                <i className="fas fa-user space"></i>Users
              </button>
            </li>
            <li className="container-sidemenu_items">
              <Link to="/blognew" className="dd-toggle_blog">
                Add new
              </Link>
            </li>
          </ul>
          <p className="copyright">@2021 SAS-Technologies</p>
        </div>
        <div className="form">
          <Link to="/blog" className="dd-toggle_blog">
            <i className="fas fa-hand-point-left"></i> Back
          </Link>
          <form className="form-content form-grid">
            <div className="label-id">
              <label for="id">Contact ID*</label>
              <input type="text" id="id" className="input-id" required></input>
            </div>

            <div className="label-author">
              <label for="author">Author</label>
              <div className="custom-select">
                <select>
                  <option value="">Select</option>
                  <option value="andrian">Adrian</option>
                  <option value="vlad">Vlad</option>
                </select>
              </div>
            </div>
            <div className="label-email">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                className="input-email"
                required
              ></input>
            </div>
            <div className="label-title">
              <label for="title">Blog Title</label>
              <input
                type="text"
                id="title"
                className="input-title"
                required
              ></input>
            </div>
            <div className="label-cat">
              <label for="cat">Categories</label>
              <input
                type="text"
                id="cat"
                className="input-cat"
                required
              ></input>
            </div>
            <div className="input-send">
              <input type="submit" value="Send" className=""></input>
            </div>
            <div className="textarea">
              <label className="textarea-label" for="textarea">
                Blog Description
              </label>
              <textarea id="textarea" required></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogNewPage;
