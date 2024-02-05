import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiClock, FiDelete } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../../App/hooks/auth';
import { api } from '../../../App/services/api';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';
import avatarPlaceholder from '../../layouts/assets/avatar_placeholder.svg';

import { Container, Content } from './styles';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const formattedDate = data
    ? moment(data.created_at)
        .tz('America/Sao_Paulo')
        .format('DD/MM/YYYY HH:mm:ss')
    : '';

  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  useEffect(() => {
    async function fetchMoviesDetails() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchMoviesDetails();
  }, [params.id]);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <header>
              <div>
                <a onClick={handleBack}>
                  <ButtonText icon={FiArrowLeft} title='Back' />
                </a>

                <ButtonText icon={FiDelete} title='Delete Movie' />
              </div>
            </header>
            <section>
              <div>
                <h1>{data.title}</h1>
                <Stars rating={data.rating} />
              </div>

              <div className='movie-info'>
                <p>
                  <img src={avatarUrl} alt={user.name} />
                  By {user.name}
                </p>

                <div>
                  <FiClock />

                  <p>{formattedDate}</p>
                </div>
              </div>
            </section>
            {data.movie_tags && (
              <div>
                {data.movie_tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}
            <article>
              <p>{data.description}</p>
            </article>
          </Content>
        </main>
      )}
      ;
    </Container>
  );
}
