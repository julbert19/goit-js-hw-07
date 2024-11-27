const loginForm = document.querySelector('.login-form');
const bodyEl = document.querySelector('body');
// bodyEl.style.display = 'grid';
// bodyEl.style.alignItems = 'center';
// loginForm.style.display = 'grid';
// loginForm.style.gridTemplateColumns = '1fr';
loginForm.style.display = 'flex';
loginForm.style.flexDirection = 'column';

loginForm.style.alignItems = 'center';
loginForm.style.width = '30%';
const labels = document.querySelectorAll('label');
console.log(labels)
labels.forEach(label => {
    label.style.display = 'block';
    // label.style.flexDirection = 'row';
    label.style.alignItems = 'center';
    
})

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.style.display = 'block';
    input.style.width='100%';
})
    

// label {
//   display: flex;
//   flex-direction: row; /* Розташування елементів в рядок */
//   align-items: center; /* Вертикальне вирівнювання по центру */
// }
// loginForm.style.width= ("100%"); 
// loginForm.style.maxWidth = ("400px"); 
// loginForm.style.margin = ("50px auto"); 
// loginForm.style.padding = ("20px");
// loginForm.style.borderRadius = ("4px");
// loginForm.style.fontFamily = ("Montserrat, sans-serif");



  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formElements = event.target.elements;
    const email = formElements.email.value.trim(); 
    const password = formElements.password.value.trim();

    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log(formData); 

    loginForm.reset(); 
  });

