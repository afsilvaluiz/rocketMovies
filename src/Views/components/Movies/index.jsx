import { motion } from 'framer-motion';

import { Stars } from '../Stars';
import { Tag } from '../Tag';

import { Container } from './styles';

export function Movies({ data, ...rest }) {
  return (
    <motion.div
      key={String(data.id)}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container {...rest}>
        <h1>{data.title}</h1>

        <Stars rating={data.rating} />

        <p>{data.description}</p>

        {data.tags && (
          <footer>
            {data.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </footer>
        )}
      </Container>
    </motion.div>
  );
}
