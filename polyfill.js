<script runat="server">
  Platform.Load("core", "1");

  Array.prototype.filter =  function(callback, context){
    var arr = [];
    for(i=0; i< this.length; i++){
      if(callback.call(context, this[i], i, this)){
        arr.push(this[i])
      }
    }
    return arr;
  }

  Array.prototype.forEach = function(callback){
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  Array.prototype.map = function(callbackFn) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      arr.push(callbackFn(this[i], i, this));
    }
    return arr;
  }

</script>
