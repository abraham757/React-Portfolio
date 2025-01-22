import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id === 'exampleFormControlInput1' ? 'email' : 'message']: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/response');
    };

    return (
<div class="container">
  <h1>Let's connect!</h1>
  <form target="_blank" action="https://formsubmit.co/abrahan.egonzalez@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
    );
}