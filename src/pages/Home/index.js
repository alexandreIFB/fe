/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import {
  Card,
  Container,
  SearchNotFound,
  EmpytListContainer,
  ErroContainer,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

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

      {
        contacts.length > 0 && (
          <InputSearchContainer>
            <input
              type="text"
              placeholder="Pesquisar contato"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </InputSearchContainer>
        )
      }

      <Header
        justifyContent={(
          // eslint-disable-next-line no-nested-ternary
          errorContacts
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
        )}
      >
        {(!errorContacts && contacts.length > 0) && (
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
          <>
            {
              (contacts.length > 0 && filteredContacts.length < 1) && (
                <SearchNotFound>
                  <img src={magnifierQuestion} alt="Mag" />

                  <span>
                    Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
                  </span>
                </SearchNotFound>
              )
            }

            <ListContainer orderBy={orderBy}>

              {
                (contacts.length < 1 && !isLoading) && (
                  <EmpytListContainer>
                    <img src={emptyBox} alt="Empyt Box" />
                    <p>
                      Você ainda não tem nenhum contato cadastrado!
                      Clique no botão <strong>”Novo contato”</strong> à cima
                      para cadastrar o seu primeiro!
                    </p>
                  </EmpytListContainer>
                )
              }

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
          </>
        )}
    </Container>
  );
}
