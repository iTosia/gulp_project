(function(){

    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');

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

    if(nav){
        nav.addEventListener('click', function(e){
            e.preventDefault();
            var target = e.target;

            if(target.tagName.toLowerCase() !== 'a'){
                return;
            }

            e.preventDefault();
            CORP.navigation.toggleToActiveLink(target);
        });
    }

}());