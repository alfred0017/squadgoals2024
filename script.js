function handleFormSubmission(scriptURL, formName) {
    const form = document.forms[formName];

    if (!form) {
        console.error(`Form with name '${formName}' not found.`);
        return;
    }

    const textarea = form.elements['message'];
    const submitButton = form.querySelector('button');

    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);

                // Change text and disable textarea and button after successful submission
                textarea.value = 'Sent';
                textarea.disabled = true;
                submitButton.disabled = true;
            })
            .catch(error => console.error('Error!', error.message));
    });
}

// Example usage for 10 different forms
handleFormSubmission('https://script.google.com/macros/s/AKfycbxpYBHOSUTmXyVOctAGf8OoY4J7jH0doSpNFeup8Iaj8spjGB-I-WeEzptb0S0REKUb/exec', 'Aes');
handleFormSubmission('https://script.google.com/macros/s/AKfycbxUFkJLL2o97md-06Y0FxYOknDIAQK3wrLdZc8-Nd4GMuSHu8CPNT0EpWn2Ow64d2fg/exec', 'Ariane');
handleFormSubmission('https://script.google.com/macros/s/AKfycbw5zE-QSfPx6zLfU0JSdYBYFDNczVvkUhX1ZQCk0cdzl62wuGNAPChXTIxtlQ3v2p6U/exec', 'Bon');
handleFormSubmission('https://script.google.com/macros/s/AKfycbxd_qAZof-SkR1EDsnzLVoP0E6_dxHWABToj2l580_AtTFMufXSq3HGtRw72deIhyjQ/exec', 'Ced');
handleFormSubmission('https://script.google.com/macros/s/AKfycbw4fKMIA34GEIFedBnqKfYxauyrIi7qSld061kVMHEg5qe9WcufIJzFVu6OiOt00vu9/exec', 'Cas');
handleFormSubmission('https://script.google.com/macros/s/AKfycbx65pPlz6EAtvNMQtp1Il_8D8VYaw73BbSnuCdM0TMXQ9me4o5kf2C3hBEE3otSzGk4xA/exec', 'Ces');
handleFormSubmission('https://script.google.com/macros/s/AKfycbwi_PqhR6jNAMxa0wOzwhl_WLdVMvNeRlcdWtVJPXiTS5ktTA6mLc9mAIVp-24n4WJh/exec', 'Fred');
handleFormSubmission('https://script.google.com/macros/s/AKfycbwYGXPkISD9o1omqm9m10Kjp7naaqGlk9USxyd_dWzOjq9tekaNaZc0Ndj6Km_2468frA/exec', 'Deng');
handleFormSubmission('https://script.google.com/macros/s/AKfycbzfT03pRryoYjlOy5XwCc5UqKf01an4hz6SNC2HI0oDg2J4xuvvsGdcOFNELDHFeAes/exec', 'Gela');
handleFormSubmission('https://script.google.com/macros/s/AKfycbxFWp9sronxv9y0r8RUIpXjJanZPiPrsyEgc7Zx_C0fB2U91rAt9_Ood2MMIyt2WWxW/exec', 'Kyang');
// Repeat for other forms with their respective script URLs
