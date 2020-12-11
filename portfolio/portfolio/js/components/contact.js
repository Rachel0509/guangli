import { SendMail } from './mailer.js';

(()=>{
     // form element
     let submitForm = document.querySelector('#contact-form');
     // submit button
     let submitBtn = document.querySelector('.submit-btn');
 
     // get form values
     function getInputValues(inputIds) {
         let valueObj = {};
 
         inputIds.forEach((v, i) => {
             valueObj[v] = document.querySelector(`#${v}`).value;
         });
         return valueObj;
     }
 
     // validate the input
     function formValidation(validationIds, inputValues) {
         let isSubmit = false;
         validationIds.forEach((v, i) => {
             let errorEl = document.querySelector(`.${v.field}`);
             if (!inputValues[v.field]) {
                 errorEl.style.display = 'block';
                 errorEl.textContent = v.message;
                 isSubmit = false;
             } else {
                 errorEl.style.display = 'none';
                 isSubmit = true;
             }
         })
         return isSubmit;
     }
 
     // handle the fail
     function processMailFailure(e) {
         alert(e.message);
     }
 
     // handle the success
     function processMailSuccess(r) {
         alert(r.message);
     }
 
     // send mail
     function sendMail() {
 
         let inputIds = ['firstname', 'lastname', 'email', 'message'];
         let inputValues = getInputValues(inputIds);
 
         let validationIds = [{
             field: 'firstname',
             message: 'Please input firstname'
         }, {
             field: 'lastname',
             message: 'Please input lastname'
         }, {
             field: 'email',
             message: 'Please input email'
         }];
         let isSubmit = formValidation(validationIds, inputValues);
 
         if (isSubmit) {
             SendMail(submitForm).then(r => {
                 processMailSuccess(r);
             }).catch(e => {
                 processMailFailure(e);
             });
         }
     }
 
     // bind submit button click
     submitBtn.addEventListener('click', sendMail);
})();