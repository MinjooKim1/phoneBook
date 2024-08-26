import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

//1. 왼쪽에 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트 search 창
//2. 리스트에 유저 이름, 전화번호 추가 가능
//3. 리스트에 아이템 몇개있는지 보임
//4. 사용자가 유저를 이름으로 검색 가능

function App() {
  return (
    <div>
      <h1 className="title">Contact</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
