import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details() {

  return(
    <Container>
      <Header />
      <Section title="New Movie">
      </Section>
      <Button title='Back'/>
    </Container>
  )
}


