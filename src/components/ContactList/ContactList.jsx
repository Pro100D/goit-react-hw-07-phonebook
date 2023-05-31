import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListContact,
  ListContactItem,
  ListContactInfo,
  ListRemoveBtn,
} from './ContactList.styled';
import {
  contactsSelector,
  filterSelector,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

const ConatctList = () => {
  const contacts = useSelector(contactsSelector);
  const filters = useSelector(filterSelector);
  const isLoad = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredListContact = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
  );
  return (
    <>
      {isLoad ? (
        <h2>please wait loading...</h2>
      ) : (
        <ListContact>
          {filtredListContact.map(contact => (
            <ListContactItem key={contact.id}>
              <ListContactInfo>
                {contact.name}: {contact.phone}
              </ListContactInfo>
              <ListRemoveBtn
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                remove
              </ListRemoveBtn>
            </ListContactItem>
          ))}
        </ListContact>
      )}
    </>
  );
};

export default ConatctList;
