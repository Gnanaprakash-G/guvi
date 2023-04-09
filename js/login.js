if(localStorage.getItem('session')=='success'){
  console.log(localStorage.getItem('session'))
}
const Email=document.getElementById('input-email');
const Password=document.getElementById('input-password');
const btn1=document.querySelector(".btn1");
btn1.addEventListener('click',(e)=>
{
  e.preventDefault();
  let email=Email.value;
  let password=Password.value;
  $.ajax({
    url:'php/login.php',
    method:'post',
    data:{
      emailPHP:email,
      passwordPHP:password,
      action:"login"
    },
    success:function(response)
    {
      if(response=='success')
      {
        localStorage.setItem("session","success");
        window.location.replace("profile.html");
      }
        const disp=document.querySelector('.display');
        disp.innerHTML=response;
        disp.style.color='red';
    }
  });
  return true;
});