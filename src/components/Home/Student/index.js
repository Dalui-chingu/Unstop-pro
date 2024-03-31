import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import jobseeker from './jobseeker.jpg'
const Student = () => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          <div className='row px-5 py-5 '>
            <div className='col-6'>
            <h1 >Welcome Student!</h1>
          <p className="col-md-12 fs-5 my-5">
            Unstop Recruitment System is a recruiting app that makes the
            hiring process faster and simpler so that your team can hire the
            best people, faster.
          </p>
            </div>
          
          <img className='col-6' src={jobseeker} alt='recruiter' height={"50%"} width={"50%"}></img>
          </div>
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Student;
