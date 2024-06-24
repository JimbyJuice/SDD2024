document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  try {
    const response = await fetch('https://yourdomain.com/login.php', {
      method: 'POST',
      body: formData,
      // Optionally, set headers if needed (e.g., Content-Type)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Display success message or handle response data
    document.getElementById('message').textContent = `Logged in as ${data.username}`;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('message').textContent = 'Login failed';
  }
});
