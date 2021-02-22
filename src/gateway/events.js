// const events = [];
const serverUrl = "https://602fd661a1e9d20017af124d.mockapi.io/api/v1/events";

const createEvent = (events) =>
  fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(events),
  });

const removeEvent = (id) => {
  return fetch(`${serverUrl}/${id}`, {
    method: "DELETE",
  });
};

const eventsFetching = () => {
  return fetch(serverUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Internal Server Error. Can't display events");
    })
    .then((events) =>
      events.map(({ id, dateFrom, dateTo, ...event }) => ({
        id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...event,
      }))
    );
};

const updateEvent = (id, updatedEvent) => {
  return fetch(`${serverUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedEvent),
  });
};

export { createEvent, removeEvent, eventsFetching, updateEvent };
