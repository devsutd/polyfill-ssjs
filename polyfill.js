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

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
      var searchLength = this.length - searchString.length;
      position = position || searchLength;
      return this.indexOf(searchString, position) === position;
    };
  }

  if (!String.prototype.trim) {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
  }
</script>
