
// form submission

let submit_buton = document.getElementById("submit_id");
let FormError = document.getElementById("form_error");
let inputFiled = document.querySelectorAll("input");
console.log(inputFiled);
let i ;


function formValidation(event){
  event.preventDefault();

 for(i=0 ;i<inputFiled.length;i++){
  // console.log("hiii i am i "+i);
  if(inputFiled[i].value.length == 0){
    // console.log("Please input a Value");
    inputFiled[i].style.borderColor = "red";
    FormError.innerHTML = "Please Fill the fields";
    FormError.style.color = "red";
   }

   else if(inputFiled[i].value.length != 0 )
   inputFiled[i].style.borderColor = "green"; 
 
 }

}

submit_buton.addEventListener("click",formValidation);


// focus set



const formId = document.getElementById('form_id');

formId.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
}, true);

formId.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true);







// first name validation code

    let first_name = document.getElementById("fname_id");
    let fname_regex = /^[A-Za-z]+$/;
    let fnameMessage = document.getElementById("fname_message");
    let firstName;

     
  
    function f_name_validation(){
      firstName = first_name.value;

      if(!firstName.match(fname_regex)){
        fnameMessage.innerHTML = "The First Name must be the only letter that uppercase or lowercase The First Name must not have white spaces";

        console.log("mistake");
      }
      
      }
      first_name.addEventListener("keyup",f_name_validation);

    

// last name validation code

  let last_name = document.getElementById("lname_id");
  let lname_regex = /^[A-Za-z]+$/;
  let lnameMessage = document.getElementById("lname_message");
  let lastName


     function l_name_validation(){
        lastName = last_name.value;

         if(!lastName.match(lname_regex)){
          lnameMessage.innerHTML ="The First Name must be the only letter that uppercase or lowercase The First Name must not have white spaces";
       }
   }

   last_name.addEventListener("keyup",l_name_validation);

// email validation code

   let emaill = document.getElementById("email_id");  
   let EmailMessage = document.getElementById("email_message");
   let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   let email_value;


 

     function validateEmail(){
      email_value = emaill.value;
      let check = email_value.match(emailRegex);

     if(!check){ 
      EmailMessage.innerHTML = "Enter Valid Email Address"
    }
  
  }
  emaill.addEventListener("keyup",validateEmail);

  // username name validation code



   let username = document.getElementById("username_id");  
   let UserNameMessage = document.getElementById("username_message");
   let userNameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
   let username_value


  
     function validateUserName(){
     username_value = username.value;
    

     if(!username_value.match(userNameRegex)){ 
      UserNameMessage.innerHTML = "Username should start with an alphabet so, [A-Za-z].All other characters can be alphabets, numbers or an underscore.length must be 8-30 characters."
    }

  }

  username.addEventListener("keyup",validateUserName);



 // password validation code

 let password = document.getElementById("p1");
 let paswordMessage = document.getElementById("paswd_message");
 let password_regex = /^[A-Za-z]\w{7,14}$/;
 let password_value;

 
 function verifyPassword(){
    password_value = password.value;

    if(!password_value.match(password_regex)){
      paswordMessage.innerHTML = "Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]";
       
    }

    if(password == ""){
        pasword_error.innerHTML = "Fill the password please!";
        
    }
    else{
        
    }

    return password_value;
 }

 password.addEventListener("keyup",verifyPassword);


// confirm password validation code

let confirm_password = document.getElementById("p2");
let confirmMessage = document.getElementById("confirm_paswd_message");
let  confirm_password_value;


   

    function CheckPassword(){

      
        password_value = password.value;

        confirm_password_value = confirm_password.value;

        if(!password_value.match(confirm_password_value)){
          confirmMessage.innerHTML = "'Passwod Must be same!'"
           console.log("not match");
        }
        else{
            console.log("sucess");     
            
        }
        
    }

    confirm_password.addEventListener("keyup",CheckPassword)

    // gender validation code

    // let genderMale = document.getElementById("male1");
    // let genderFemale = document.getElementById("female1");
    // let genderError = document.getElementById("gender_error");
    // let submit = document.getElementById("submit_id");

    // submit.addEventListener("click",genderValidation)

    // function genderValidation(event){
    //     event.preventDefault();
    //     const male = genderMale.value;
    //     const female = genderFemale.value;
    //     console.log(male);
    //     console.log(female);

    //     if(male.checked==false || female.checked==false)
    //     {
    //         genderError.innerHTML = "You must select male or female";
    //         console.log("gender clicked");
            
    //     }
    //     else{
    //         console.log("sucess");
    //     }
           

    // }


    // dob validation code

    let dob_regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/ ;
   
    let dob = document.getElementById("dob_id");
    let DobMessage = document.getElementById("dob_message");
    let dob_value;
    let birth;
    let birth_year;
    let present_date;
    let present_month;
    let present_year;
    let present_dob;
    let age;

    
    function validateDate(){
       dob_value = dob.value;
       console.log(dob_value);
      
       birth = new Date(dob_value);
       birth_year = birth.getFullYear();
       console.log(`birth year is ${birth_year}`);
       present_dob = new Date();

       present_date = present_dob.getDate();
       present_month = present_dob.getMonth()+1; 
       present_year = present_dob.getFullYear();
      
       console.log(`present year is ${present_year}`);

           if(present_date<10) 
          {
            present_date='0'+present_date;
          } 

         if(present_month<10) 
         {
          present_month='0'+present_month;
         } 
      
         present_date = present_year + '-'+ present_month + '-' + present_date;
         console.log(`present date is ${present_date}`);

         age = present_year - birth_year;
         console.log(`age is ${age}`);

       
      
        if(!dob_value.match(dob_regex) || dob_value == " " ){

        console.log("error format");
        DobMessage.innerHTML = "Please Enter Valid Formmat"
       }

       if (age<18){
         console.log("Age should be more than 18 years");
         DobMessage.innerHTML = "Age should be more than 18 years"
       }

       else{

        console.log("sucess ghfjfj");
       }
    }
    dob.addEventListener("change",validateDate);

   