(function(){
    var me = {};
    
    me.isEmail = function(email){
        var re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return re.test(email);
    };

    me.isNumber = function(number){
        var re = /^\d+$/;
        return re.test(number);
    };

    me.isNotEmpty = function(str){
        return Boolean(str);
    };

    window.validation = me;
}());