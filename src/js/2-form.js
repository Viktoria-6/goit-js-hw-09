const formState = {
  email: '',
  message: '',
};
const STOTAGE_KEY = ' feedback-form-state';

const form = document.querySelector('.feedback-form');

const saveData = localStorage.getItem(STOTAGE_KEY);
if (saveData) {
  try {
    const parsedData = JSON.parse(saveData);

    formState.email = parsedData.email || '';
    formState.message = parsedData.message || '';

    form.elements.email.value = formState.email;
    form.elements.message = formState.message.trim();
  } catch (error) {
    console.error('Помилка парсингу даних', error);
  }
}

form.addEventListener('input', event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formState[fieldName] = fieldValue.trim();
  localStorage.setItem(STOTAGE_KEY, JSON.stringify(formState));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formState.email || !formState.message) {
    alert('Fill please fields');
    return;
  }
  console.log(formState);
  localStorage.removeItem(STOTAGE_KEY);
  formState.email = '';
  formState.message = '';
  form.reset();
});
