const task1 = new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 complete"), 2000);
  });
  task1.then((message) => console.log(message));
  
  
  const task2 = new Promise((_, reject) => {
    reject("Task 2 failed");
  });
  task2.catch((error) => console.error(error));
  
  
  const task3 = Promise.resolve(5);
  task3
    .then((number) => number * 2)
    .then((doubled) => console.log(doubled));
  
  
  const task4 = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("First"), 2000);
    });
  
  task4()
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => setTimeout(() => resolve("Second"), 1000));
    })
    .then((message) => console.log(message));
  
  
  const task5 = () =>
    new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), 2000);
    });
  
  task5().catch((error) => console.error(error));
  
  
  const task6 = () =>
    new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(() => resolve("Task 1 complete"), delay);
    });
  
  task6().then((message) => console.log(message));
  
  
  const task7 = () =>
    new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 3000) + 1000;
      setTimeout(() => resolve("First"), delay);
    });
  
  task7()
    .then((message) => {
      console.log(message);
      const delay = Math.floor(Math.random() * 3000) + 1000;
      return new Promise((resolve) => setTimeout(() => resolve("Second"), delay));
    })
    .then((message) => console.log(message));
  
  
  const task8 = () =>
    new Promise((_, reject) => {
      const delay = Math.floor(Math.random() * 4000) + 1000;
      setTimeout(() => reject("Task 3 failed"), delay);
    });
  
  task8().catch((error) => console.error(error));
  
  
  const task9 = () =>
    new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 5000) + 1000;
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber > 0.5) resolve("Task 1 complete");
        else resolve("Task 1 was quick");
      }, delay);
    });
  
  task9().then((message) => console.log(message));
  
  
  const task10 = () =>
    new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 4000) + 1000;
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber < 0.3) reject("Task 3 failed");
        else resolve("Task 3 complete");
      }, delay);
    });
  
  task10()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  