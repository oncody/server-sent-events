window.onload = function getEndpoint() {
  if(!getElementValue('concat-value')) {
    setElementValue('concat-value', '')
  }

  const eventSource = new EventSource('/event');

  eventSource.onmessage = event => {
    setElementValue('message-value', event.data);
  };

  eventSource.addEventListener('sumEvent', event => {
    setElementValue('sum-value', Number(event.data) + Number(getElementValue('sum-value')));
  });

  eventSource.addEventListener('concatEvent', event => {
    setElementValue('concat-value', getElementValue('concat-value') + event.data);
  });
};

function getElementValue(elementName) {
  return document.getElementById(elementName).innerHTML;
}

function setElementValue(elementName, value) {
  document.getElementById(elementName).innerHTML = value;
}
