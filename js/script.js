let button = document.querySelector('button');

const getData = () => {
  fetch('https://akademia108.pl/api/ajax/get-post.php', {
    mode: 'cors',
    method: 'GET',
  })
    .then(response => response.json())
    .then((data) => {

      let parWrapper = document.getElementsByClassName('paragraph-wrapper')[0];

      let parUserId = document.createElement('p');
      let parId = document.createElement('p');
      let parTitle = document.createElement('p');
      let parBody = document.createElement('p');
      let hr = document.createElement('hr');

      parUserId.innerText = 'User ID: ' + data.userId;
      parId.innerText = 'ID: ' + data.id;
      parTitle.innerText = 'Title: ' + data.title;
      parBody.innerText = 'Body: ' + data.body;

      parWrapper.appendChild(parUserId);
      parWrapper.appendChild(parId);
      parWrapper.appendChild(parTitle);
      parWrapper.appendChild(parBody);
      parWrapper.appendChild(hr);

    })
    .catch((error) => {
      console.error('Error', error);
    })


}

button.addEventListener('click', getData);

