Server.createChat = function(io){
  io.on('connection', function(socket){
    console.log("Connected!");
  
    socket.emit('from_node_event', {message: "Hi from node!"});
  
    socket.on('message_event', function(data){
      console.log(data);
    
      io.sockets.emit('from_node_event', {message: data.message})

    });
  });  
};