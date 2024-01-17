import { Container, Brand, Profile, Logout } from './style'

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      {/*
      <Search></Search>
      */}

      <Profile>
        <div>
          <strong>Luiz Silva</strong>
        </div>

        <img src="https://github.com/afsilvaluiz.png"
          alt="Profile image"
        />
      </Profile>

      <Logout>Logout</Logout>
    </Container>
  )
}