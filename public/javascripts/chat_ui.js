(function(root){
  App = root.App = (root.App ||{})
  
  
  ChatUI = App.ChatUI = function(chat){
    chat.socket = io.connect();
    
    this.chat = chat;
    var that = this;
    $('form').on('submit', function (event) {
      event.preventDefault();
      that.register(event);
    });
  };

  ChatUI.prototype.register = function(event){
    var receivedMessage = this.getMessage()
    this.sendMessage(receivedMessage);
    // this.display(receivedMessage)
  };

  ChatUI.prototype.getMessage = function() {
    return $('textarea').val();
  };

  ChatUI.prototype.sendMessage = function(message) {
    return this.chat.sendMessage(message)
  };

  ChatUI.prototype.display = function(message) {
    var $li = $('<li>');
    $li.text(message);

    $('#log').append($li);
  };


})(this);
