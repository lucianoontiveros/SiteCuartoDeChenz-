import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Mi Footer</h5>
            <p>
              Aquí puedes poner lo que quieras, como información sobre tu empresa, enlaces útiles, etc.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Enlace 1</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Enlace 2</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Enlace 3</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Enlace 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2024 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">mdbootstrap.com</a>
      </div>
    </footer>
  );
}

export default Footer;
