import { Container, Brand, Profile } from './style'

import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input type="search" placeholder="Search by title" />

      <Profile>
        <div>
          <strong>Luiz Silva</strong>
          <button>Logout</button>
        </div>

        <img src="https://github.com/afsilvaluiz.png"
          alt="Profile image"
        />
      </Profile>

    </Container>
  )
}