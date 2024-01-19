import { Input } from "../Input";

import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <a href="#">
        <h1>RocketMovies</h1>
      </a>

      <Input type="search" placeholder="Search by title" />

      <Profile>
        <div>
          <p>Luiz Silva</p>
          <button>Logout</button>
        </div>

        <img src="https://github.com/afsilvaluiz.png" alt="Profile image" />
      </Profile>
    </Container>
  );
}
