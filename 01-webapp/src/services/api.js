const headerSet = () => {
  const h = new Headers();
  h.append('Content-Type', 'application/json');
  return h;
};

export function postData(data, endpoint) {
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headerSet(),
  })
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(resdata => resdata);
}