import React, { useState, useEffect } from "react";

async function getMessage() {
  const Message_Url = 'http://localhost:4001/';
  const query = {
    query: `{
      greeting
    }`
  };
  const response = await fetch(Message_Url, {
    'method': 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify(query)
  });

  const { data } = await response.json();
  return data;
}

function Message() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getMessage().then(data => {
      setMessage(data);
    }).catch(e => { setMessage(e); });

    return () => { setMessage(null); console.log("unmount!") }
  }, []);

  console.log(message);

  return message ? <span>- {message.greeting}</span> : <span>wait...</span>
}

export default Message;