

const LS_KEY = "feedback-form-state";


const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");

initForm();

form.addEventListener("input", onFormInput);

form.addEventListener("submit", onFormSubmit);



function onFormInput(event) {
    const { name, value } = event.target;
  
    formData[name] = value.trim();
  
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    const { email, message } = formData;
  
    if (!email || !message) {
    alert("Fill please all fields");
    return;
}

    console.log(formData);

 
    form.reset();
    localStorage.removeItem(LS_KEY);

  
    formData.email = "";
    formData.message = "";
}

function initForm() {
    const savedData = localStorage.getItem(LS_KEY);
    if (!savedData) return;

  
    const data = JSON.parse(savedData);

 
formData.email = data.email || "";
formData.message = data.message || "";

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;
}
