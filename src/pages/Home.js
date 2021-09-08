import './Home.css';
import PageNavigation from '../components/PageNavigation';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const lorem_short = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

// TODO: Replace placeholders with actual assets

function Intro() {
  return (
    <Container>
      <Row>
        <Col>
          <Image src="https://via.placeholder.com/200.png/09f/fff"/>
        </Col>
        <Col>
          <p className='intro'>{lorem}</p>
        </Col>
        <Col>
          <Image src="https://via.placeholder.com/200.png/09f/fff"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="btn-custom">let's do this</Button>
        </Col>
      </Row>
    </Container>
  );
}

// TODO: These have nice interactivity, need to import custom styling though

function FAQ() {
  return (
    <div className={'faqBody'}>
      <Row>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{lorem_short}</Accordion.Header>
              <Accordion.Body>
                {lorem}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{lorem_short}</Accordion.Header>
              <Accordion.Body>
                {lorem}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{lorem_short}</Accordion.Header>
              <Accordion.Body>
                {lorem}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{lorem_short}</Accordion.Header>
              <Accordion.Body>
                {lorem}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}

export default function Home() {
    return (
      <div className={'home'}>
          <div className={'landingPad'}>
            <PageNavigation/>
            <h1>SEXLESS TEXAS</h1>
          </div>
          <Intro/>
          <div className={'faq'}>
            <h3>FAQS</h3>
            <FAQ/>
          </div>
          <p className={'dropALine'}>Get In Touch: <a href="/">DROP A LINE</a></p>
      </div>
    );
}