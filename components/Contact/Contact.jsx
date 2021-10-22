import { useForm } from '@formspree/react';
import ContactComplete from './ContactComplete';
import ContactForm from './ContactForm';

export default function Contact() {
	const [state, handleSubmit] = useForm('xvoveere');

	if (state.succeeded) {
		return <ContactComplete />;
	}

	return <ContactForm handleSubmit={handleSubmit} />;
}
