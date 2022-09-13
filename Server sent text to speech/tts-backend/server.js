const http = require("http");

let server = http
  .createServer((request, response) => {
    console.log("Requested url: " + request.url + " from: " + request);

    if (request.url.toLowerCase() === "/events") {
      response.writeHead(200, {
        Connection: "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*"
      });
      setTimeout(() => {
        if(!response.finished){
          response.write("event: flightStateUpdate\n");
          // response.write('data: {"flight": "I768", "state": "I am. pre testosterone era steve austin."}');
          response.write('data: {"flight":"I678","state":"Andhera kaayam rahe."}')
          response.write("\n\n");
        }        
      }, 4000);
      setTimeout(() => {
        if(!response.finished){
          response.write("event: flightStateUpdate\n");
          // response.write('data: {"flight": "I768", "state": "Hi Sindhu. How are you doing? Are you ding well?"}');
          response.write('data: {"flight": "I768", "state": "Yay. I am alive. it is so good to breathe air for the first time."}');
          response.write("\n\n");
        }        
      }, 10000);
      setTimeout(() => {
        if(!response.finished){
        response.write("event: flightRemoval\n");
        var randNum = Math.floor(Math.random() * 6);
        sendText = 'data: {"flight": "I768", "state"='+randNum.toString()+'}'
        response.write(sendText);
        console.log('sent: ' + sendText)
        response.write("\n\n");
        }
      }, 4000);

    } else {
      response.writeHead(404);
      response.end();
    }
    // request.on("close", () => {
    //   if (!response.finished) {
    //     response.end();
    //     console.log("Stopped sending events.");
    //   }
    // });

//   setTimeout(() => {
//   if (!response.finished) {
//     response.write("event: closedConnection\n");
//     response.write("data: ");
//     response.write("\n\n");
//   }
// }, 3000);

  })
// while(true){
  server.listen(5000, () => {
    console.log("Server running at http://127.0.0.1:5000/");
  });
// }

// while(true){
// };