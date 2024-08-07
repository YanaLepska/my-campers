import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";


const ContactsPage = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.contactTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      
      <ContactList />
    </div>
  );
};

export default ContactsPage;
