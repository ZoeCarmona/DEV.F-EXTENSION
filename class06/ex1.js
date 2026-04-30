let title = document.getElementById('title');
let paragraph = document.getElementById('paragraph');
let button = document.getElementById('button');

button.addEventListener('click', function() {
  title.innerHTML = 'Updated content!';
  paragraph.innerHTML = 'The content has been changed.';
});