import { Container } from "react-bootstrap";
import ChildComponent from "./components/ChildComponent";
export default function App({ helloMessage }) {
  return (
    <Container>
      <h1>hello</h1>

      <ChildComponent helloMessage={helloMessage} />
    </Container>
  );
}
