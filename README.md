# React Firebase SuperChat

A simple full-stack chat demo with **React** and **Firebase**.

# How it works

It's a single group chatroom that everybody can participate in, similar to SuperChat on YouTube.

- To enter the chat, a user must log in using a Google account.
- Once login, a user can post messages to the chat.
- Each message is a document in the Firestore database containing the text, user id, and timestamp.
- We make a query to the database for the most recent messages.
- Whenever the underlining data changes from the backend, the React app will update with the most recent messages on the frontend.