import { useState } from 'react';
import urls from '../constants/urls';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);  
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.toLowerCase().match(emailRegex)) {
            console.log('error');
            toast.error('Email is not valid');
            return;
        }
        setLoading(true);
        try {
            const postContact = await fetch(urls.CONTACT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email,
                content: content
              })
            });
            if (postContact.status === 200) {
                toast.success('Thank you! We’ve received your message and will get back to you as soon as possible.')
                setLoading(false);
                setSent(true);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            setContent('');
            setEmail(''); 
        }
    }

  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>If you would like to get in touch, please reach out via <a href='mailto:thao0210@gmail.com'>email</a> or connect with me on <a href='https://www.linkedin.com/in/th%E1%BA%A3o-nguy%E1%BB%85n-80924b7b/' target='_blank'>LinkedIn</a> or input to the form below</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
          </label>
          <input
              type="email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: 6, marginTop: 4 }}
              placeholder="Your email"
            />
        </div>
        <div>
          <label>
            Content
          </label>
          <textarea
              value={content}
              required
              onChange={e => setContent(e.target.value)}
              style={{ width: '100%', padding: 6, marginTop: 4, minHeight: 80 }}
              placeholder="Your message"
            />
        </div>
        <div className='button-container'>
          <button type="submit" disabled={!content || !email}>{loading ? 'Sending...' : 'Send'}</button>
        </div>
        {sent && <div>Message sent!</div>}
      </form>
    </div>
  );
};

export default Contact;