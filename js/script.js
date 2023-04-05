
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit-btn')
    const form = document.getElementById('emptyForm')

    function validateEmail()
    {
        const emailError = document.getElementById('email-error')
        const mailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+?\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!email.value.match(mailRegex))
        {
            emailError.innerHTML = " Please enter a valid email";
            emailInput.style.borderColor = "#ff0303";
            emailError.style.top = "100%";
            return false;
        }
            //? Remove Email Error
        emailError.innerHTML = "";
        emailInput.style.borderColor = "";
        return true;
    }

    form.addEventListener("submit" , function(button) {
        // button.preventDefault()

        let fullName = fullNameInput.value; 
        let email = emailInput.value; 
        let password = passwordInput.value; 
        let emailCheck = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+?\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
        
        if( !fullName  || !password || password.length < 8  || !emailCheck )
        {    button.target.classList.toggle("move"); }
        else {
            button.target.classList.toggle("stop");
            document.getElementById('submit-btn').style.cursor = 'pointer';
        }

        fullNameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
    })

    submitBtn.addEventListener("mouseover" , (button) =>{
        let fullName = fullNameInput.value; 
        let email = emailInput.value; 
        let password = passwordInput.value; 
        let emailCheck = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+?\.)+([a-zA-Z0-9]{2,4})+$/.test(email);

        if( !fullName  || !password || password.length < 8  || !emailCheck )
        {    button.target.classList.toggle("move"); }
        else {
            button.target.classList.toggle("stop");
            document.getElementById('submit-btn').style.cursor = 'pointer';
            document.getElementById('submit-btn').style.transition = '.5s';
            
        }
    })

    
    // ~  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+?\.)+([a-zA-Z0-9]{2,4})+$/ ---> this is validation for Email with regular expression
    
    // ? .test() will get either true or false
    
    
    // let x = [1,2,3,5]
    // x.forEach((e) =>{ if(e >2 && e<5) return; 
    //     console.log(e);
    // })



    // && /[a-zA-Z0-9]{8}/.test(password)

// var a = 0;
//     function mouseOver()
//     {
//         // e.preventDefault()
//         const fullName = document.forms['suForm']['fullName'].value;
//         const email = document.forms['suForm']['email'].value;
//         const password = document.forms['suForm']['password'].value;

//         // const fullName = document.getElementById('fullName').value;
//         // const email = document.getElementById('email').value;
//         // const password = document.getElementById('password').value;
    
//         const tick = document.querySelector('#checkbox');
//         const emailCheck = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
//         if( fullName === "" || 
//             !email.match(emailCheck) || 
//             password === "" || password < 8 
//             || tick.checked == false && a == 0 )
//         {
//             buttonMoveLeft();
//             a = 1;
//             return false;
//         }
//         if( fullName === "" || 
//             !email.match(emailCheck) || 
//             password === "" || password < 8 
//             || tick.checked == false && a == 1 )
//         {
//             buttonMoveRight();
//             a = 2;
//             return false;
//         }
//         if( fullName === "" || 
//             !email.match(emailCheck) || 
//             password === "" || password < 8 
//             || tick.checked == false && a == 2 )
//         {
//             buttonMoveLeft();
//             a = 1;
//             return false;
//         } else {
//             document.getElementById('submit-btn').style.cursor = 'pointer'
//             return false;
//         }
//     };

//     function buttonMoveLeft(){
//         const button = document.getElementById('submit-btn');
//         button.style.transform = 'translateX(-160%)';
//         // button.style.background = 'green';
//     };
//     function buttonMoveRight(){
//         const button = document.getElementById('submit-btn');
//         button.style.transform = 'translateX(0%)';
//         // button.style.background = 'black';
//     };
//     function resetBtn(){
//         const button = document.getElementById('submit-btn');
//         button.style.transform = 'translateX(0%)';
//     };