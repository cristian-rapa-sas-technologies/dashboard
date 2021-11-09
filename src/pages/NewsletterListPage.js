import { Link } from "react-router-dom";
const NewsletterListPage = () => {
  return (
    <>
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
        <Link
          to="/newsletter"
          className="dd-toggle dd-toggle-hover animation curent-page"
        >
          Newsletter
        </Link>
      </header>
      <div className="newsletter-container container">
        <div className="newsletter-sidemenu container-sidemenu">
          <nav className="sidemenu-nav newsletter-sidemenu-nav">
            <ul className="sidemenu-list sidemenu-list-newalwtter">
              <li>
                <Link
                  to="/"
                  className="dd-toggle dd-toggle-chat  dd-toggle-chat-docs"
                >
                  <i className="far fa-comment-dots"></i>
                </Link>
              </li>
              <li>
                <button className="dd-toggle">
                  <i className="fas fa-star"></i>
                </button>
              </li>
              <li>
                <button className="dd-toggle">
                  <i className="fas fa-images"></i>
                </button>
              </li>
              <li>
                <button className="dd-toggle">
                  <i className="fas fa-history"></i>
                </button>
              </li>
            </ul>
            <p className="copyright">@2021 SAS-Technologies</p>
          </nav>
        </div>
        <div className="blog_content">
          <div className="tabel">
            <section className="tabel-row-grid fix">
              <p className="id">ID*</p>
              <p className="title">Email</p>
              <p className="desc">Status</p>
              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit ">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
            <section className="tabel-row-grid">
              <p className="id">201.201</p>
              <p className="title">cineva@sas-technologies.ro</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>

              <button className="tabel-dd-toggle-edit">Send</button>
            </section>
          </div>
        </div>
        <div className="sidemenu-second">
          <ul className="container-sidemenu_list">
            <li className="container-sidemenu_items">
              <li className="container-sidemenu_items">
                <Link to="/blog-user" className="dd-toggle_blog">
                  <i className="fas fa-user space"></i>Users
                </Link>
              </li>
            </li>
            <li className="container-sidemenu_items">
              <Link to="/blognew" className="dd-toggle_blog">
                Add new
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
              <p>Status</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p>Email :</p>
              <p>cineva@sas-technologies</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">Send</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Status</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p>Email :</p>
              <p>cineva@sas-technologies</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">Send</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Status</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p>Email :</p>
              <p>cineva@sas-technologies</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">Send</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Status</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p>Email :</p>
              <p>cineva@sas-technologies</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">Send</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Status</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p>Email :</p>
              <p>cineva@sas-technologies</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">Send</button>
            </section>
          </div>
          <div className="blog_content_second-tabel-flex">
            <section>
              <p>ID* :</p>
              <p>201.201</p>
            </section>
            <section>
              <p>Status</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum?
              </p>
            </section>
            <section>
              <p>Email :</p>
              <p>cineva@sas-technologies</p>
            </section>
            <section>
              <button className="dd-toggle dd-toggle-edit">Send</button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterListPage;
