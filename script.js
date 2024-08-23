
// function submitData(){
//     var params={
//         from_name : document.getElementById("name").value,
//         email_id : document.getElementById("email").value,
//         message : document.getElementById("message").value
//     } 
//     alert(params.from_name+params.email_id+params.message);
//     emailjs.init({
//         publicKey: "glzQYZX3he-fWKijc",
//     });
    
//     form.classList.add('was-validate')
//     emailjs.send("service_vc0tlby","template_rpqo7pr",params);
// }

const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(form.checkValidity()){
        var params={
            from_name : document.getElementById("name").value,
            email_id : document.getElementById("email").value,
            message : document.getElementById("message").value
        } 
        console.log(params)
        emailjs.init({
            publicKey: "glzQYZX3he-fWKijc",
        });
        emailjs.send("service_vc0tlby","template_rpqo7pr",params).then(()=>alert('email sent successfully'));
    }

    form.classList.add('was-validated')
    
})