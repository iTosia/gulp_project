(function(){

    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');

    if(openFormButton){
        openFormButton.addEventListener('click', function(e){
            e.preventDefault();
            CORP.form.open();
        })
    }

    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            if (CORP.form.isValid()){
                console.log('All good');
            } else{
                console.log('Not valid');
            }
        })
    }

}());