import { ContactContent } from './ContactContent/ContactConten';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Section>
      <ContactForm />
      <Filter />
      <ContactContent />
    </Section>
  );
};
