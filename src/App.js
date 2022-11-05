import React from "react";

function App() {
  return (
    <>
      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">KEMAL (@humangillerden)</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="images/pp.png"
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="date-footer">
              2022 © All rights reserved<br /><a href="https://startbootstrap.com/theme/resume" target={'_blank'} rel="noreferrer noopener">Theme</a> & <a href="https://reactjs.org/" target={'_blank'} rel="noreferrer noopener">React.js</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content*/}
      <div className="container-fluid p-0">
        {/* About*/}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Kemal
              <span className="text-primary">(@humang.)</span>
            </h1>
            <div className="subheading mb-5">
              Blockchain & Frontend Developer · Engineer 
              <p><a href="https://twitter.com/codeencoder" target={'_blank'} rel="noreferrer noopener" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter on KEMAL">@codeencoder</a></p>
            </div>
            {/* <p className="lead mb-5">
              its a codeencoder <i className="fa-regular fa-face-smile" />
            </p> */}
            <div className="social-icons">
              <a className="social-icon" href="https://github.com/humangillerden" target={'_blank'} rel="noreferrer noopener" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Github">
                <i className="fab fa-github" />
              </a>
              <a className="social-icon" href="https://twitter.com/codeencoder" target={'_blank'} rel="noreferrer noopener" data-bs-toggle="tooltip" data-bs-placement="right" title="Twitter">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Experience*/}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Blockchain Developer</h3>
                <div className="subheading mb-3"><a href="https://10seclabs.com" target={'_blank'} rel="noreferrer noopener">10SecLabs</a> Frontend, Blockchain, NFT and Token Solutions</div>
                <div className="subheading mb-1 fs-5">Projects I've worked on as a developer:</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                <a href="https://nft.metagalaxyland.com" target={'_blank'} rel="noreferrer noopener">Metagalaxyland NFT</a> (as a blockchain (BSC) dev.)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                <a href="https://spaceshib.co" target={'_blank'} rel="noreferrer noopener">SpaceShib</a> (as a blockchain (ETH) dev.)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                <a href="https://alibaba.10secondlabs.com" target={'_blank'} rel="noreferrer noopener">Ali Baba Pass</a> (as a frontend & blockchain (Solana) dev.)
              </li>
            </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">july 2022 - Present</span>
              </div>
            </div>
            {/* <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Design Intern</h3>
                <div className="subheading mb-3">...</div>
                <p>
                  ...
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 2008 - June 2010</span>
              </div>
            </div> */}
          </div>
        </section>
        <hr className="m-0" />
        {/* Skills*/}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5">
                <i className="fab fa-html5" />
              </li>
              <li className="list-inline-item"data-bs-toggle="tooltip" data-bs-placement="bottom" title="Javascript">
                <i className="fab fa-js-square" />
              </li>
              <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="React.js">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Node.js">
                <i className="fab fa-node-js" />
              </li>
              <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="NPM">
                <i className="fab fa-npm" />
              </li>
              <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="PHP">
                <i className="fab fa-php" />
              </li>
            </ul>
            <div className="subheading mb-3">Others</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                MySQL Database Management
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                MongoDB Management
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;