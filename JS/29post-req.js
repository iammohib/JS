const createTodo = async (todo) => {
  const options = {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const prom = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  const response = await prom.json();
  return response;
};

const getFact = async () => {
  const catApi = await fetch("https://catfact.ninja/fact");
  const res = await catApi.json();
  return res;
};

const getTodo = async (id) => {
  const getTodoFetch = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + id
  );
  const getTodoFetchR = await getTodoFetch.json();
  return getTodoFetchR;
};

const mainFunc = async () => {
  const todo = {
    title: "hello",
    body: "mohib",
    userId: 1,
  };
  const todoR = await createTodo(todo);
  console.log(todoR);

  const getTodoR = await getTodo(100);
  console.log(getTodoR);

  let i = 0;
  while (i < 2) {
    const catFactR = await getFact();
    console.log(catFactR);
    i++;
  }
};

mainFunc();
