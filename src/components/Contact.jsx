import React from "react";
import { socialData } from "../data";
import { Col, Row } from "react-bootstrap";

// Components
import { Title } from "./globalStyledComponents";



export default function Contact() {
  return (<> <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
         </Title>
         <Row className="mt-3 align-items-center">
            {socialData.map((social) => {
              return (
                <Col xs={4} key={social.id} className="my-md-5">
                  <figure>
                  <a href={social.link}> <button style={{border:'none'}}>  {social.icon}</button></a>
                    <figcaption>{social.title}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          
          </>      
  );
}
