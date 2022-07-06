import { Link } from 'react-router-dom';
import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
// import Modal from '../../components/Moda';

export default function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="ArrowUp" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Alexandre Abreu</strong>
              <small>Instagram</small>
            </div>
            <span>abreuxandi2010@gmail.com</span>
            <span>(61) 9 9193-5209</span>
          </div>

          <div className="actions">
            <Link to="/edit/12">
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Alexandre Abreu</strong>
              <small>Instagram</small>
            </div>
            <span>abreuxandi2010@gmail.com</span>
            <span>(61) 9 9193-5209</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Alexandre Abreu</strong>
              <small>Instagram</small>
            </div>
            <span>abreuxandi2010@gmail.com</span>
            <span>(61) 9 9193-5209</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>

    </Container>
  );
}
