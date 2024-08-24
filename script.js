const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const formValidationSuccess = document.getElementById('formValidationSuccess');

        emailInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);

        function validateEmail(email) {
            return email.length > 3 && email.includes('@') && email.includes('.');
        }

        function validatePassword(password) {
            return password.length > 8;
        }

        function validateForm() {
            const isEmailValid = validateEmail(emailInput.value);
            const isPasswordValid = validatePassword(passwordInput.value);

            if (isEmailValid) {
                emailError.style.display = 'none';
            } else {
                emailError.style.display = 'block';
            }

            if (isPasswordValid) {
                passwordError.style.display = 'none';
            } else {
                passwordError.style.display = 'block';
            }

            // Show success message if both email and password are valid
            if (isEmailValid && isPasswordValid) {
                formValidationSuccess.style.display = 'block';
            } else {
                formValidationSuccess.style.display = 'none';
            }
        }

        function submitForm() {
            validateForm(); // Revalidate on submit in case the user tries to submit without input changes

            const isEmailValid = validateEmail(emailInput.value);
            const isPasswordValid = validatePassword(passwordInput.value);

            if (isEmailValid && isPasswordValid) {
                if (confirm('Are you sure you want to sign up?')) {
                    alert('Successful signup!');
                } else {
                    // Clear the input values and reset error messages
                    emailInput.value = '';
                    passwordInput.value = '';
                    emailError.style.display = 'block';
                    passwordError.style.display = 'block';
                    formValidationSuccess.style.display = 'none';
                }
            } else {
                alert('Please fix the errors in the form before submitting.');
            }
        }