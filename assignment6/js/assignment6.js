

function formValidation() {
    clearerrors();
    result = validatefname();
    result = validatelname() && result;
    result = validatepsd() && result;
    result = validatephone() && result;
    return result;
 }


 function validatefname() {
    
    var errors = document.querySelector('#erfname')
    var permited = false;
    var elem = document.getElementById("fname");
    var inputValue = elem.value.trim();
    if (inputValue.length == 0) {      /* check the length */
        errors.innerHTML += "<br><em>*No input or white space(s) only! Please enter a meaningful name.</em>";
        return false;
    }  

    
    inputValue = inputValue.toUpperCase();  
    for (var i = 0; i < inputValue.length; i++) 
    {
         // check if one character is letter
         if (inputValue.charAt(i) >= "A" && inputValue.charAt(i) <= "Z" )  
         { 
             permited = true; 
         }
    } 
    if (permited)
    {
        for (var i = 0; i < inputValue.length; i++) 
        {
            // check if Allowable characters
            if (!(inputValue.charAt(i) == '-' ||  inputValue.charAt(i) == "'" || (inputValue.charAt(i).toUpperCase() >= "A" && inputValue.charAt(i).toUpperCase() <= "Z"))) 
            {
                
                console.log('Entrou');
                permited = false
            }
        } 
        
    } 

    else
    {

        errors.innerHTML += "<br><em>*Please enter at least one alphabetic characters (a-z) (A-Z).</em>";
        elem.focus();
        return permited;
    }

    if (!permited){

        errors.innerHTML += "<br><em>*Only allow alpha lower case (a-z), upper case (A-Z), hyphen (-) and apostrophe (').</em>"; 
        elem.focus();
        return permited;
    } 


   return permited

 }


 function validatelname() {
        
        var errors = document.querySelector('#erlname')
        var permited = false;
        var elem = document.getElementById("lname");
        var inputValue = elem.value.trim();
        if (inputValue.length == 0) {      /* check the length */
            errors.innerHTML += "<br><em>*No input or white space(s) only! Please enter a meaningful name.</em>";
            return false;
        }  
    
        
        inputValue = inputValue.toUpperCase();  
        for (var i = 0; i < inputValue.length; i++) 
        {
             // check if one character is letter
             if (inputValue.charAt(i) >= "A" && inputValue.charAt(i) <= "Z" )  
             { 
                 permited = true; 
             }
        } 
        if (permited)
        {
            for (var i = 0; i < inputValue.length; i++) 
            {
                // check if Allowable characters
                if (!(inputValue.charAt(i) == '-' ||  inputValue.charAt(i) == "'" || (inputValue.charAt(i).toUpperCase() >= "A" && inputValue.charAt(i).toUpperCase() <= "Z"))) 
                {
                    
                    console.log('Entrou');
                    permited = false
                }
            } 
            
        } 
    
        else
        {
            errors.innerHTML += "<br><em>*Please enter at least one alphabetic characters (a-z) (A-Z).</em>";
            elem.focus();
            return permited;
        }
    
        if (!permited){

            errors.innerHTML += "<br><em>*Only allow alpha lower case (a-z), upper case (A-Z), hyphen (-) and apostrophe (').</em>"; 
            elem.focus();
            return permited;
        } 
    

        return permited
        
     }

     function validatepsd() {
        
        var errors = document.querySelector('#erpwd')
        var permited = false;
        var elem1 = document.getElementById("pwd");
        var elem2 = document.getElementById("repwd");
        var pwd = elem1.value;
        var repwd = elem2.value;

        if (pwd != repwd) 
        {      /* check the length */

            errors.innerHTML += "<br><em>*The Password fields must be equal.</em>";
            return false;
        }  

        if (pwd.length < 8) {      /* check the length */

            errors.innerHTML += "<br><em>*Password must contain at least 8 characters long.</em>";
            return false;
        }  

        for (var i = 0; i < pwd.length; i++) 
        {
             // check if one character is number
             if (pwd.charAt(i) >= "0" && pwd.charAt(i) <= "9" )  
             { 
                 permited = true; 
             }

        } 

        if (permited)
        {

            permited = false;
            for (var i = 0; i < pwd.length; i++) 
            {
                 // check if one character is upper case
                 if (pwd.charAt(i) >= "A" && pwd.charAt(i) <= "Z" )  
                 { 
                     permited = true; 
                 }
    
            } 

            if (permited)
            {
                permited = false;
                for (var i = 0; i < pwd.length; i++) 
                {
                     // check if one character is lower case
                     if (pwd.charAt(i) >= "a" && pwd.charAt(i) <= "z" )  
                     { 
                         permited = true; 
                     }
        
                } 

            }

            else 
            {

                errors.innerHTML += "<br><em>*Password must contain at least 1 upper case.</em>";
                return permited; 
            }

        }

        else 
        {

            errors.innerHTML += "<br><em>*Password must contain at least 1 number.</em>";
            return permited;    
        }

        if (!permited)
        {

            errors.innerHTML += "<br><em>*Password must contain at least 1 lower case.</em>";
            return permited; 
        }

        else {

            return permited;
        }

     }

 function validatephone()
 {
    
    var errors = document.querySelector('#erphone')
    var permited1 = true;
    var permited2 = true;
    var permited3 = true;
    var elem = document.getElementById("phone");
    var phone = elem.value;

    if (phone.length != 12)/* check the length */
    {

         errors.innerHTML += "<br><em>*The Phone number is in a incorrect format.</em>";
         return false;
    }

    if (phone.charAt(3) == "-" && phone.charAt(7) == "-" )
    {
        for (var i = 0; i < (phone.length - 9); i++) 
        {
            if(!(phone.charAt(i) >= '0' && phone.charAt(i) <= '9' ))
            {
                permited1 = false;
            }
        }

        for (var i = 4; i < (phone.length - 5); i++)
        {
            if(!(phone.charAt(i) >= '0' && phone.charAt(i) <= '9' ))
            {
                permited2 = false;
            }
        }

        for (var i = 8; i < phone.length; i++)
        {
            if(!(phone.charAt(i) >= '0' && phone.charAt(i) <= '9' ))
            {
                permited3 = false;
            }
        }

        if(permited1 && permited2 && permited3)
        {

            return true;
        }

        else
        {
  
            errors.innerHTML += "<br><em>*The Phone number is in a incorrect format.</em>";
            return false;
        }


    }

    else 
    {

        errors.innerHTML += "<br><em>*The Phone number is in a incorrect format.</em>";
        return false;
    }


 }

 function clearerrorfname() {
    document.querySelector("#erfname").innerHTML = "";
 }

function clearerrorlname() {
    document.querySelector("#erlname").innerHTML = "";
 }

 function clearerrorpwd() {
    document.querySelector("#erpwd").innerHTML = "";
}

function clearerrorphone() {
    document.querySelector("#erphone").innerHTML = "";  
}


 function clearerrors() {
    document.querySelector("#erfname").innerHTML = "";
    document.querySelector("#erlname").innerHTML = "";
    document.querySelector("#erpwd").innerHTML = "";
    document.querySelector("#erphone").innerHTML = "";
 }
