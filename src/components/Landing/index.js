import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import main from './assets/main.svg'
const Landing = () => {
  return (
    <Container>
      <div className="p-5 mb-4 bg-light rounded-3 row">
        <div className="container-fluid py-5 col-6">
          <h1 className="display-5 fw-bold">Recruit faster with Unstop pro!</h1>
          <p className="col-md-12 fs-4">
            Unstop Recruitment System is a recruiting app that makes the
            hiring process faster and simpler so that your team can hire the
            best people, faster.
          </p>
          <p>
            <Link to={ROUTES.LOG_IN}>
              <Button variant="success">Get Started</Button>
            </Link>
          </p>
        </div>
        <div className='col-6'>
            <img src = {main} alt= "job hunt" className = 'imag main-img' width={"60%"}></img>

        </div>
      </div>
    </Container>
  );
};

export default Landing;
