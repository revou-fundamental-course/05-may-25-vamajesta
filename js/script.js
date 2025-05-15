    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name) {
        alert('Please enter your name.');
        form.name.focus();
        return;
      }
      if (!email) {
        alert('Please enter your email.');
        form.email.focus();
        return;
      }
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        form.email.focus();
        return;
      }
      if (!message) {
        alert('Please enter your message.');
        form.message.focus();
        return;
      }
      alert('Thank you for contacting SoundWave Studio! We will get back to you soon.');
      form.reset();
    });
