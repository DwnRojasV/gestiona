const inputs = document.querySelectorAll('.form__input');
const button = document.querySelector('.form__button');
const INPUT_INVALID_CLASS = "form__input--invalid";
const inputCheckValidity = (input, invalidClassName) => {
    if (!input.checkValidity()) {
        input.classList.add(invalidClassName);
    } else {
        input.classList.remove(invalidClassName);
    }
}

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        inputCheckValidity(input, INPUT_INVALID_CLASS)
        if (input.value === "") input.classList.remove(INPUT_INVALID_CLASS)
    })
})

button.addEventListener('click', () => {
    inputs.forEach((input) => {
        inputCheckValidity(input, INPUT_INVALID_CLASS)
    })
})

