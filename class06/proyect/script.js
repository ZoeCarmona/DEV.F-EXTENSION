let form = document.getElementById('commentForm');
let commentInput = document.getElementById('commentInput');
let commentsContainer = document.getElementById('commentsContainer');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let commentText = commentInput.value;

  if (commentText.trim() === '') {
    alert('Please write a comment.');
    return;
  }

  let commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  let commentParagraph = document.createElement('p');
  commentParagraph.textContent = commentText;

  let dateParagraph = document.createElement('p');
  dateParagraph.classList.add('comment-date');
  dateParagraph.textContent = new Date().toLocaleString();

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', function() {
    commentDiv.remove();
  });

  commentDiv.appendChild(commentParagraph);
  commentDiv.appendChild(dateParagraph);
  commentDiv.appendChild(deleteButton);

  commentsContainer.appendChild(commentDiv);

  commentInput.value = '';
});