import shortid from "shortid";

const mockData = (store) => {
  const resourcesListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: resourcesListId, listTitle: "Resources" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: resourcesListId,
      cardId: shortid.generate(),
      cardText: "Financial & Growth Data"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: resourcesListId,
      cardId: shortid.generate(),
      cardText: "2017 Goals & KPIs"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: resourcesListId,
      cardId: shortid.generate(),
      cardText: "Brand Guide"
    }
  });

  const todoId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: todoId, listTitle: "To Do" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: todoId,
      cardId: shortid.generate(),
      cardText: "Task 1"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: todoId,
      cardId: shortid.generate(),
      cardText: "Task 2"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: todoId,
      cardId: shortid.generate(),
      cardText: "Task 3"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: todoId,
      cardId: shortid.generate(),
      cardText: "Task 4"
    }
  });

  const doingId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: doingId, listTitle: "Doing" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doingId,
      cardId: shortid.generate(),
      cardText: "Task 5"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doingId,
      cardId: shortid.generate(),
      cardText: "Task 6"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doingId,
      cardId: shortid.generate(),
      cardText: "Task 7"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doingId,
      cardId: shortid.generate(),
      cardText: "Task 8"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doingId,
      cardId: shortid.generate(),
      cardText: "Task 9"
    }
  });

  const doneId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: doneId, listTitle: "Done" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doneId,
      cardId: shortid.generate(),
      cardText: "Task 10"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doneId,
      cardId: shortid.generate(),
      cardText: "Task 11"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doneId,
      cardId: shortid.generate(),
      cardText: "Task 12"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: doneId,
      cardId: shortid.generate(),
      cardText: "Task 13"
    }
  });
};
export default mockData;