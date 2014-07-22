(function(root){
  App = root.App = (root.App ||{})
  Chat = App.Chat = function (socket) {
    this.socket = socket;
    //watch for server comments to add them to our page
    socket.on('from_node_event', function (data) {
      var $li = $('<li>');
      $li.text(data.message);

      $('#log').append($li);
    });
  }

  Chat.prototype.sendMessage = function(message) {
    this.socket.emit('message_event', {message: message})
  };
  
})(this);