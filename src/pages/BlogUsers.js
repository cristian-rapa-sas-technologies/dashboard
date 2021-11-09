import { Link } from "react-router-dom";

function BlogUsers() {
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
              <Link to="/blog-user" className="dd-toggle_blog">
                <i className="fas fa-user space"></i>Users
              </Link>
            </li>
            <li className="container-sidemenu_items">
              <Link to="/blognew" className="dd-toggle_blog">
                Add new
              </Link>
            </li>
            <li className="container-sidemenu_items">
              <Link to="/blog" className="dd-toggle_blog">
                <i className="fas fa-hand-point-left"></i> Back
              </Link>
            </li>
          </ul>
          <p className="copyright">@2021 SAS-Technologies</p>
        </div>
        <div className="blog_content blog_content_first">
          <div className="tabel">
            <section className="tabel-row user-grid fix">
              <p className="id">Contact ID*</p>
              <p className="author">Author</p>
              <p className="title">Blog title</p>
              <p className="desc">Decription</p>
              <p className="categorii">Categotii</p>
              <p className="date">Date</p>
              <p className="email">Email</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit ">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
            <section className="tabel-row user-grid">
              <p className="id">201.201</p>
              <p className="author">James O.</p>
              <p className="title">About us</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
              <p className="categorii">Categotii</p>
              <p className="date">21.10.2021</p>
              <p className="user-emial">cineva@sas-technologies.ro</p>
              <button className="tabel-dd-toggle-edit">edit</button>
              <button className="tabel-dd-toggle-delete">delete</button>
            </section>
          </div>
        </div>
        <div className="sidemenu-second">
          <ul className="container-sidemenu_list">
            <li className="container-sidemenu_items">
              <Link to="/blognew" className="dd-toggle_blog">
                Add new
              </Link>
            </li>
            <li className="container-sidemenu_items">
              <Link to="/blog" className="dd-toggle_blog">
                <i className="fas fa-hand-point-left"></i> Back
              </Link>
            </li>
          </ul>
        </div>
        <div className=" blog_content_second">
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Author :</p>
              <p>Author Name.</p>
            </section>
            <section>
              <p>Blog Title :</p>
              <p>About us</p>
            </section>
            <section>
              <p>Description :</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p> Categotii :</p>
              <p>Web dev</p>
            </section>

            <section>
              <p> Date :</p>
              <p>12.11.2021</p>
            </section>

            <section>
              <p>Email</p>
              <p>cineva@sas-technologies.ro</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">edit</button>
              <button className="dd-toggle dd-toggle-delete">delete</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Author :</p>
              <p>Author Name.</p>
            </section>
            <section>
              <p>Blog Title :</p>
              <p>About us</p>
            </section>
            <section>
              <p>Description :</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p> Categotii :</p>
              <p>Web dev</p>
            </section>

            <section>
              <p> Date :</p>
              <p>12.11.2021</p>
            </section>

            <section>
              <p>Email</p>
              <p>cineva@sas-technologies.ro</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">edit</button>
              <button className="dd-toggle dd-toggle-delete">delete</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Author :</p>
              <p>Author Name.</p>
            </section>
            <section>
              <p>Blog Title :</p>
              <p>About us</p>
            </section>
            <section>
              <p>Description :</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p> Categotii :</p>
              <p>Web dev</p>
            </section>

            <section>
              <p> Date :</p>
              <p>12.11.2021</p>
            </section>

            <section>
              <p>Email</p>
              <p>cineva@sas-technologies.ro</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">edit</button>
              <button className="dd-toggle dd-toggle-delete">delete</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Author :</p>
              <p>Author Name.</p>
            </section>
            <section>
              <p>Blog Title :</p>
              <p>About us</p>
            </section>
            <section>
              <p>Description :</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p> Categotii :</p>
              <p>Web dev</p>
            </section>

            <section>
              <p> Date :</p>
              <p>12.11.2021</p>
            </section>

            <section>
              <p>Email</p>
              <p>cineva@sas-technologies.ro</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">edit</button>
              <button className="dd-toggle dd-toggle-delete">delete</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Author :</p>
              <p>Author Name.</p>
            </section>
            <section>
              <p>Blog Title :</p>
              <p>About us</p>
            </section>
            <section>
              <p>Description :</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p> Categotii :</p>
              <p>Web dev</p>
            </section>

            <section>
              <p> Date :</p>
              <p>12.11.2021</p>
            </section>

            <section>
              <p>Email</p>
              <p>cineva@sas-technologies.ro</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">edit</button>
              <button className="dd-toggle dd-toggle-delete">delete</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Author :</p>
              <p>Author Name.</p>
            </section>
            <section>
              <p>Blog Title :</p>
              <p>About us</p>
            </section>
            <section>
              <p>Description :</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p> Categotii :</p>
              <p>Web dev</p>
            </section>

            <section>
              <p> Date :</p>
              <p>12.11.2021</p>
            </section>

            <section>
              <p>Email</p>
              <p>cineva@sas-technologies.ro</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">edit</button>
              <button className="dd-toggle dd-toggle-delete">delete</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogUsers;
