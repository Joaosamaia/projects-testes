document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('generator-form');
    const landingPagePreview = document.getElementById('landing-page-preview');
    const finalCodeElement = document.getElementById('final-code');
    const addFieldButton = document.getElementById('add-field');
    const additionalFieldsContainer = document.getElementById('additional-fields');
    const templateButtons = document.querySelectorAll('.template-button');

    let fieldCount = 0; // Track the number of fields added

    // Function to dynamically create input fields based on user selection
    function createInputField(elementType) {
        fieldCount++; // Increment the field count
        const fieldGroup = document.createElement('div');
        fieldGroup.classList.add('form-group');

        let fieldHTML = '';
        switch (elementType) {
            case 'h1':
                fieldHTML = `
                    <label for="h1-${fieldCount}">Header:</label>
                    <input type="text" id="h1-${fieldCount}" name="h1-${fieldCount}" required>
                `;
                break;
            case 'text':
                fieldHTML = `
                    <label for="text-${fieldCount}">Text:</label>
                    <input type="text" id="text-${fieldCount}" name="text-${fieldCount}" required>
                `;
                break;
            case 'button':
                fieldHTML = `
                    <label for="button-${fieldCount}">Button Text:</label>
                    <input type="text" id="button-${fieldCount}" name="button-${fieldCount}" required>
                `;
                break;
            default:
                break;
        }

        fieldGroup.innerHTML = fieldHTML;
        additionalFieldsContainer.appendChild(fieldGroup);
    }

    // Function to update the preview and generated code
    function updatePreview() {
        // Reset the preview
        landingPagePreview.innerHTML = '';

        // Start building the HTML code
        let html = `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page Preview</title>
            <link rel="stylesheet" href="css/preview.css">
        </head>
        <style>
        #landing-page-preview main {
            text-align: center;
        }
    </style>
        <body>
            <header id="header">
                <h1>Landing Page Preview</h1>
            </header>
            <main>
            `;
        // Iterate through each input field and generate HTML code
        additionalFieldsContainer.childNodes.forEach(function(fieldGroup) {
            const input = fieldGroup.querySelector('input');
            const elementType = input.getAttribute('id').split('-')[0];

            switch (elementType) {
                case 'h1':
                    const h1Value = input.value;
                    html += `<h1>${h1Value}</h1>`;
                    break;
                case 'text':
                    const textValue = input.value;
                    html += `<p>${textValue}</p>`;
                    break;
                case 'button':
                    const buttonValue = input.value;
                    html += `<button type="button">${buttonValue}</button>`;
                    break;
                default:
                    break;
            }
        });

        // Close the HTML body and document
        html += `</main>
        <footer>
            <p>&copy; ${new Date().getFullYear()} Landing Page Preview</p>
        </footer>
        </body>
        </html>`;

        // Set the preview HTML
        landingPagePreview.innerHTML = html;

        // Generate and display final HTML/CSS code
        finalCodeElement.innerText = html;
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        updatePreview();
    });

    // Event listener for the "Add Field" button click
    addFieldButton.addEventListener('click', function() {
        const elementType = document.getElementById('element-type').value;
        createInputField(elementType);
    });

// Function to load and display the selected template
function loadAndDisplayTemplate(templateContent) {
    // Display the template content in the preview section
    landingPagePreview.innerHTML = templateContent;
    finalCodeElement.innerText = templateContent;
}

// Event listeners for template buttons
templateButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const templateContent = getTemplateContent(this.dataset.template);
        loadAndDisplayTemplate(templateContent);
    });
});

// Function to get template content based on template filename
function getTemplateContent(templateFilename) {
    // Define an object to hold template content for each template filename
    const templates = {
        'template1.html': `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page Template 1</title>
            <style>
                #landing-page-preview body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
        
                #landing-page-preview header {
                    background-color: #333;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                }
        
                #landing-page-preview section {
                    padding: 20px;
                    text-align: center;
                }
        
                #landing-page-preview .container {
                    max-width: 800px;
                    margin: 0 auto;
                }
        
                #landing-page-preview h1 {
                    font-size: 36px;
                    margin-bottom: 20px;
                }
        
                #landing-page-preview p {
                    font-size: 18px;
                    margin-bottom: 20px;
                }
        
                #landing-page-preview .cta-button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 18px;
                }
        
                #landing-page-preview footer {
                    background-color: #333;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to Our Landing Page</h1>
            </header>
            <section>
                <div class="container">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo nec ipsum vestibulum vehicula ac vitae eros. Nulla facilisi. Vivamus at lorem sem. Sed ac eleifend leo. Quisque nec ultrices justo, et pharetra libero.</p>
                    <a href="#" class="cta-button">Learn More</a>
                </div>
            </section>
            <footer>
                <p>&copy; 2024 Sample Landing Page</p>
            </footer>
        </body>
        </html>
        `,'template2.html': `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page Template 2</title>
            <style>
                #landing-page-preview body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
                #landing-page-preview header {
                    background-color: #333;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                }
                #landing-page-preview section {
                    background-color: yellow;
                    padding: 20px;
                    text-align: center;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                #landing-page-preview .container {
                    width: calc(50% - 20px); /* 20px for the margin */
                    margin-bottom: 20px;
                }
                #landing-page-preview h1 {
                    font-size: 3em;
                    margin-bottom: 20px;
                    color: blue;
                    text-align: center;
                }
                #landing-page-preview p {
                    font-size: 1.2em;
                    margin-bottom: 20px;
                    text-align: center;
                }
                #landing-page-preview .btn {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #ffffff;
                    text-align: center;
                    border: none;
                    border-radius: 5px;
                    font-size: 1em;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                }
                #landing-page-preview .btn:hover {
                    background-color: #0056b3;
                }
                #landing-page-preview img {
                    max-width: 100%;
                    display: block;
                    margin: 0 auto;
                }
                footer {
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                    padding: 10px;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to Our Landing Page</h1>
            </header>
            <section>
                <div class="container">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo nec ipsum vestibulum vehicula ac vitae eros. Nulla facilisi. Vivamus at lorem sem. Sed ac eleifend leo. Quisque nec ultrices justo, et pharetra libero.</p>
                    <a href="#" class="btn">Visit Us</a>
                </div>
                <div class="container">
                    <img src="img/myimage.png">
                </div>
            </section>
            <footer>
                <p>&copy; 2024 Sample Landing Page</p>
            </footer>
        </body>
        </html>        
        `,'template3.html': `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page Template 2</title>
            <style>
            #landing-page-preview body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            #landing-page-preview header {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }        
            #landing-page-preview section {
                padding: 20px;
                text-align: center;
            }       
            #landing-page-preview .container {
                max-width: 800px;
                margin: 0 auto;
            }
                #landing-page-preview h1 {
                    font-size: 3em;
                }
                #landing-page-preview p {
                    font-size: 1.2em;
                    margin-bottom: 20px;
                }
                #landing-page-preview img {
                    height: 300px;
                    wodth: 300px;
                }
                #landing-page-preview .btn {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #ffffff;
                    border: none;
                    border-radius: 5px;
                    font-size: 1em;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                }
                #landing-page-preview .btn:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to Our Landing Page</h1>
            </header>
            <section>
                <div class="container">
                    <h1>About Us</h1>
                    <img src="img/myimage.png">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo nec ipsum vestibulum vehicula ac vitae eros. Nulla facilisi. Vivamus at lorem sem. Sed ac eleifend leo. Quisque nec ultrices justo, et pharetra libero.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </section>
            <footer>
                <p>&copy; 2024 Sample Landing Page</p>
            </footer>
        </body>
        </html>
        `,'template4.html': `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page Template 3</title>
            <style>
            #landing-page-preview body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            #landing-page-preview header {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }        
            #landing-page-preview section {
                padding: 20px;
                text-align: center;
            }       
            #landing-page-preview .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 50px;
            }
                #landing-page-preview h1 {
                    font-size: 3em;
                    margin-bottom: 20px;
                }
                #landing-page-preview p {
                    font-size: 1.2em;
                    margin-bottom: 20px;
                }
                #landing-page-preview a {
                    color: blue;
                    text-decoration: none;
                }
                #landing-page-preview a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to Our Landing Page</h1>
            </header>
            <section>
                <div class="container">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo nec ipsum vestibulum vehicula ac vitae eros. Nulla facilisi. Vivamus at lorem sem. Sed ac eleifend leo. Quisque nec ultrices justo, et pharetra libero.</p>
                    <a href="#">Click here to meet our product!</a>
                </div>
            </section>
            <footer>
                <p>&copy; 2024 Sample Landing Page</p>
            </footer>
        </body>
        </html>
        `,'template5.html': `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page Template 4</title>
            <style>
                #landing-page-preview body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
                #landing-page-preview header {
                    background-color: #333;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                }        
                #landing-page-preview section {
                    padding: 20px;
                    text-align: center;
                }       
                #landing-page-preview .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 50px;
                }
                #landing-page-preview h1 {
                    font-size: 3em;
                    margin-bottom: 20px;
                }
                #landing-page-preview p {
                    font-size: 1.2em;
                    margin-bottom: 20px;
                }
                #landing-page-preview a {
                    color: #007bff;
                    text-decoration: none;
                }
                #landing-page-preview a:hover {
                    text-decoration: underline;
                }
                #landing-page-preview .btn {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #ffffff;
                    border: none;
                    border-radius: 5px;
                    font-size: 1em;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                    margin-right: 10px;
                }
                #landing-page-preview .btn:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to Our Landing Page</h1>
            </header>
            <section>
                <div class="container">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo nec ipsum vestibulum vehicula ac vitae eros. Nulla facilisi. Vivamus at lorem sem. Sed ac eleifend leo. Quisque nec ultrices justo, et pharetra libero.</p>
                    <p><a href="#">Click here to meet our newest product!</a></p>
                    <a href="#" class="btn">Our store</a>
                    <a href="#" class="btn">Our company philosophy and values</a>
                </div>
            </section>
            <footer>
                <p>&copy; 2024 Sample Landing Page</p>
            </footer>
        </body>
        </html>
        ` 
        // Add content for other templates here
    };

    // Return the template content based on the filename
    return templates[templateFilename];
}
// Select the button element
const copyCodeButton = document.getElementById('copy-code-button');

// Add event listener for click event
copyCodeButton.addEventListener('click', function() {
    // Select the generated code element
    const generatedCodeElement = document.getElementById('final-code');

    // Get the text content of the generated code element
    let generatedCode = generatedCodeElement.textContent;

    // Check if the generated code is empty
    if (!generatedCode.trim()) {
        // If the generated code is empty, set generatedCode to an empty string
        generatedCode = '';
    }

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = generatedCode;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the content of the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Optionally, provide feedback to the user
    if (generatedCode.trim()) {
        alert('Code copied to clipboard!');
    } else {
        alert('No code to copy!');
    }
});


});
