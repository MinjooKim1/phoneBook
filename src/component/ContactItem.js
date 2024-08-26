import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div className="item-box">
      <Row>
        <Col lg={2}>
          <img
            width={50}
            src="https://cdnweb01.wikitree.co.kr/webdata/editor/202402/03/img_20240203033446_b9296d13.webp"
            alt="mimo"
          />
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
