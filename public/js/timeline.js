// Assuming you have a timeline.js file in your "public/js" directory

// Fetch data from the server
fetch('/api/postPoutes')
  .then(response => response.json())
  .then(data => {
    // Process the data and generate HTML for the timeline

    const timelineContainer = document.getElementById('timeline-container');

    // Iterate over each post and create HTML elements
    data.posts.forEach(post => {
      const postElement = createPostElement(post);
      timelineContainer.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error fetching timeline data:', error);
  });

// Create HTML elements for a single post
function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const avatarElement = document.createElement('img');
  avatarElement.classList.add('avatar');
  avatarElement.src = post.avatar;
  postElement.appendChild(avatarElement);

  const imageElement = document.createElement('img');
  imageElement.classList.add('post-image');
  imageElement.src = post.image;
  postElement.appendChild(imageElement);

  const captionElement = document.createElement('p');
  captionElement.classList.add('caption');
  captionElement.textContent = post.caption;
  postElement.appendChild(captionElement);

  const likesElement = document.createElement('p');
  likesElement.classList.add('likes');
  likesElement.textContent = `Likes: ${post.likes}`;
  postElement.appendChild(likesElement);

  const commentsElement = document.createElement('p');
  commentsElement.classList.add('comments');
  commentsElement.textContent = `Comments: ${post.comments}`;
  postElement.appendChild(commentsElement);

  return postElement;
}
