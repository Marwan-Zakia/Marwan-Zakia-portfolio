/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";

import ill2 from "assets/img/ill/ill-2.svg";
import { Link } from "react-router-dom";
import landing from "assets/img/theme/landing.jpg";
import profile from "assets/img/theme/profile.jpg";
import img from "assets/img/theme/img-2-1200x1000.jpg";
import promom from "assets/img/theme/promo-1.png";
// import promom from "assets/img/theme/img-2-1200x1000.jpg";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                     Hello there  {" "}
                        <span>Welcome to my awesome Website </span>
                      </h1>
                      <p className="lead text-white">
                      I currently studying web development at ASAC
                      </p>
                      <div className="btn-wrapper">
                      </div>
                    </Col>
                   
                  </Row>
                </div>
              </Container>
              
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            
            {/* 1st Hero Variation */}
          </div>
          
          <section className="section section-lg pt-lg-0 mt--200">
     
          </section>
          <section className="section section-lg">
   
          </section>
          <section className="section bg-secondary">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link href="https://github.com/Vteam-201/PartHunt">
                    <CardImg
                      alt="..."
                      src={landing}
                      
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/profile-page">
                    <CardImg
                      alt="..."
                      src={profile}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
              <CardImg
                      alt="..."
                      src={img}
                    />  
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/profile-page">
                    <CardImg
                      alt="..."
                      src={promom}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          </section>
          <section className="section section-lg pt-0">
          </section>
         
          <Download />
        </main>
        
      </>
    );
  }
}

export default Landing;
