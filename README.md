# server-sent-text-to-speech
Text is pushed using server sent events to multiple clients; the text is read aloud on the client side. This application doesn't use web sockets. It can be extended to make voice based chatbots at scale. push to multiple clients (similar to notifications) at scale is possible since web sockets are not used to communicate from server to client.
