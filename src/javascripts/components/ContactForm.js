// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm("xdoyypnk");
  if (state.succeeded) {
      return <p>Thanks for reaching out! I'll get in touch as soon as I can.</p>;
  }
  return (
      <Form onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control type="name" id="name" name="name" />
      </Form.Group>
      <ValidationError prefix="Name" field="name"errors={state.errors}/>  
      <Form.Group>
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control type="email" id="email" name="email" />
      </Form.Group>
      <ValidationError prefix="Email" field="email"errors={state.errors}/>

      <Form.Group>
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={4} name="message" id="message"/>
      </Form.Group>
      <ValidationError prefix="Message" field="message" errors={state.errors}/>
      <br/>
      <Form.Group>
        <Button type="submit" disabled={state.submitting}>Send</Button>
      </Form.Group>
      
    </Form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
