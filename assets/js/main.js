let itemsForm = document.querySelectorAll('.form');
let btn = document.querySelector('.cadastro__btn');
let span = document.querySelectorAll('.form__span');
let erro = document.querySelectorAll('.icone__erro');
let spanOk = document.querySelector('.form__span--ok')

function aparecerErro (pos) {
    erro[pos].classList.remove('esconder');
    erro[pos].classList.add('aparecer');

    itemsForm[pos].classList.remove('borda__cor');
    itemsForm[pos].classList.add('borda__cor--erro');
}

function sumirErro () {
    itemsForm.forEach((item, pos) => {
        item.addEventListener('focus', function () {
            if(pos == 2) {
                item.placeholder = 'Email Adress';
                item.classList.remove('form__cor--erro');
                item.classList.add('form__cor');

                erro[pos].classList.remove('aparecer');
                erro[pos].classList.add('esconder');

                item.classList.remove('borda__cor--erro');
                item.classList.add('borda__cor');

                span[pos].innerHTML = '';
            } else {
                erro[pos].classList.remove('aparecer');
                erro[pos].classList.add('esconder');

                item.classList.remove('borda__cor--erro');
                item.classList.add('borda__cor');

                span[pos].innerHTML = '';
            }
        })
    })
}

btn.addEventListener('click', function (event){
    event.preventDefault();

    itemsForm.forEach((item, pos) => {
        if (item.value == '') {
            if(pos == 0) {
                span[pos].innerHTML = `<p>First Name cannot be empty</p>`
                aparecerErro(pos);     
            } if(pos == 1) {
                span[pos].innerHTML = `<p>Last Name cannot be empty</p>`
                aparecerErro(pos); 
            } if(pos == 2) {
                span[pos].innerHTML = `<p>Looks like this not an email</p>`
                item.placeholder = 'email@example/com';
                item.classList.remove('form__cor');
                item.classList.add('form__cor--erro');
                aparecerErro(pos);  
            } if(pos == 3) {
                span[pos].innerHTML = `<p>Password cannot be empty</p>`
                aparecerErro(pos); 
            }

            sumirErro();
        } else {
            if (!itemsForm[2].checkValidity()) {
                span[2].innerHTML = '<p>Please, provide a valid email</p>';
                aparecerErro(2);
                sumirErro();
            } else {
                if (!itemsForm[0].value == '' && !itemsForm[1].value == '' && !itemsForm[2].value == '' && !itemsForm[3].value == '') {
                    spanOk.innerHTML = `<p>
                    Thank you for your register.</p>`;
                    setTimeout(function() {
                        itemsForm[0].value = ``;
                        itemsForm[1].value = ``;
                        itemsForm[2].value = ``;
                        itemsForm[3].value = ``;
                    }, 20)
                }
            }
        }
    }) 
})

