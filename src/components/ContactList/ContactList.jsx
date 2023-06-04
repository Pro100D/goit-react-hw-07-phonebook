import { useSelector } from 'react-redux';

import { filterSelector } from 'redux/selectors';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactSlice';

import {
  ListContact,
  ListContactItem,
  ListContactInfo,
  ListRemoveBtn,
} from './ContactList.styled';

const ConatctList = () => {
  const filters = useSelector(filterSelector);

  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deletePost] = useDeleteContactsMutation();

  if (!contacts) return;
  const filtredListContact = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
  );
  return (
    <>
      {error && <h1>Not Faund:(</h1>}
      {isLoading && <h2>please wait loading...</h2>}
      <ListContact>
        {filtredListContact.map(({ id, name, phone }) => (
          <ListContactItem key={id}>
            <ListContactInfo>
              {name}: {phone}
            </ListContactInfo>
            <ListRemoveBtn type="button" onClick={() => deletePost(id)}>
              remove
            </ListRemoveBtn>
          </ListContactItem>
        ))}
      </ListContact>
    </>
  );
};

export default ConatctList;
