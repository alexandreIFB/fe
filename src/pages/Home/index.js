import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
// import Modal from '../../components/Moda';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter((contact) => (
    contact.name.toUpperCase().includes(searchTerm.toUpperCase())));

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('Erro', error);
      });
  }, [orderBy]);

  function handleToggleOrderyBy() {
    setOrderBy((prevState) => (
      prevState === 'asc' ? 'desc' : 'asc'
    ));
  }

  function handleSearchTermChange(event) {
    return setSearchTerm(event.target.value);
  }

  return (
    <Container>

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer orderBy={orderBy}>
        {
          filteredContacts.length > 0 && (
            <header>
              <button type="button" className="sort-button" onClick={handleToggleOrderyBy}>
                <span>Nome</span>
                <img src={arrow} alt="ArrowUp" />
              </button>
            </header>
          )
        }
        {/* <header>
          <button type="button" className="sort-button" onClick={handleToggleOrderyBy}>
            <span>Nome</span>
            <img src={arrow} alt="ArrowUp" />
          </button>
        </header> */}

        {
          filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category_name && (<small>{contact.category_name}</small>)}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>

                <button type="button">
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))
        }
      </ListContainer>

    </Container>
  );
}
