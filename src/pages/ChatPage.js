import { Link } from "react-router-dom";

const ChatPage = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <div></div>
        </Link>

        <Link
          to="/"
          className="dd-toggle dd-toggle-hover my animation curent-page"
        >
          Chat
        </Link>
        <Link to="/blog" className="dd-toggle dd-toggle-hover animation ">
          Blog
        </Link>
        <Link to="/newsletter" className="dd-toggle dd-toggle-hover animation ">
          Newsletter
        </Link>
      </header>
      <div className="main-flex">
        <div className="main-chat">
          <div className="sidemenu">
            <nav className="sidemenu-nav">
              <ul className="sidemenu-list">
                <li>
                  <button className="dd-toggle dd-toggle-chat">
                    <i className="far fa-comment-dots"></i>
                  </button>
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
            </nav>
          </div>

          <div className="chat">
            <div className="people">
              <div className="people-input">
                <input
                  type="search"
                  id="text"
                  className="people-text"
                  required
                />
                <button type="submit" className="people-search">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />

                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green"></i>
                  </p>
                </div>
              </button>
              <button className="people-name dd-toggle-chat">
                <img
                  className="dd-toggle-img"
                  src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
                  alt="User"
                />
                <div className="people-flex">
                  <p>
                    <span className="people-capital">james bond</span>12:30
                  </p>
                  <p>
                    <span>ai n-ai priza dai la top</span>
                    <i className="fas fa-circle people-bg-green  "></i>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="content">
          <div className=" content-header">
            <img
              className="dd-toggle-img"
              src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
              alt="User"
            />
            <h1>James Bond</h1>
            <button className="dd-toggle header-dd-toggle">
              <i className="fas fa-search"></i>
            </button>
            <button className="dd-toggle header-dd-toggle">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
          <div className="body">
            <p className="body-message body-client-message">
              hello, how are you
            </p>
            <p className="body-message body-user-message">Hi , good ! You?</p>
          </div>
          <div className="footer">
            <button className="footer-dd-toggle dd-toggle" type="submit">
              <i className="far fa-smile-wink"></i>
            </button>
            <button className="footer-dd-toggle dd-toggle" type="submit">
              <i className="fas fa-paperclip"></i>
            </button>
            <input
              type="text"
              className="footer-input"
              placeholder="Scrieti un mesaj"
              required
            />
            <button className="footer-dd-toggle dd-toggle" type="submit">
              <i className="fas fa-paper-plane footer-rotate"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
