let currentId = 1;

    document.getElementById('fetchButton').addEventListener('click', () => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${currentId}`)
        .then(res=> {
          if (!res.ok) {
            throw new Error('Monacemebis Migebis Shecdoma');
          }
          return res.json();
        })
        .then(json => {
          const userList = document.getElementById('userList');
          const listItem = document.createElement('li');
          listItem.textContent = `ID: ${json.id}, Title: ${json.title}, Completed: ${json.completed}`;
          userList.appendChild(listItem);

          currentId++;
        })
        .catch(error => {
          console.error('Shecdoma:', error);
        });
    });