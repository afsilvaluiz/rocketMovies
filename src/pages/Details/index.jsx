import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'


export function Details() {

  return(
    <Container>
      <Header />
      <Section title="Interestellar">
        <Tag title="Drama" />
        <Tag title="Science fiction" />
      </Section>



      <Button title='Back'/>
    </Container>
  )
}


