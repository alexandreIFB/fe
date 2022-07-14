import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import {
  Card, Container, ErroContainer, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';

import Loader from '../../components/Loader';
import ContactsService from '../../service/ContactsService';
import { Button } from '../../components/Button';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorContacts, setErrorContacts] = useState(false);
  const filteredContacts = useMemo(() => (contacts.filter((contact) => (
    contact.name.toUpperCase().includes(searchTerm.toUpperCase())))
  ), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setContacts(contactsList);
      setErrorContacts(false);
    } catch (error) {
      setErrorContacts(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderyBy() {
    setOrderBy((prevState) => (
      prevState === 'asc' ? 'desc' : 'asc'
    ));
  }

  function handleSearchTermChange(event) {
    return setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </InputSearchContainer>

      <Header errorContacts={errorContacts}>
        {!errorContacts && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}

        <Link to="/new">Novo Contato</Link>
      </Header>

      {errorContacts && (
        <ErroContainer>
          <img src={sad} alt="sadImage" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>Tentar Novamente</Button>
          </div>
        </ErroContainer>
      )}

      {!errorContacts
        && (
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

            {
              (filteredContacts.map((contact) => (
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
              )))
            }
          </ListContainer>
        )}

    </Container>
  );
}
