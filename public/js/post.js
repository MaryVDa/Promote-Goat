const newFormHandler = async (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#post-id').value.trim();
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    const socMedia = document.querySelector('#post-socMedia').value.trim();
  
    if (id && title && description && socMedia) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ id, title, description, socMedia }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post.');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post.');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);