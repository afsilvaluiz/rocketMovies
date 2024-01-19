import { Container } from "./styles";
import { FiStar } from "react-icons/fi";

export function Stars({ className }) {
  return (
    <Container>
      <li className="bg">
        <FiStar />
      </li>
    </Container>
  );
}
