import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'


export function Details() {

  return(
    <Container>
      <Header />

      <ButtonText icon={FiArrowLeft} title="Back"/>

      <Section title="Interestellar">
        <Tag title="Drama" />
        <Tag title="Science fiction" />
      </Section>



      <Button title='Back'/>
    </Container>
  )
}


