// write your JavaScript here
'use strict';
const stars = document.querySelectorAll('#star');
const feedback = document.querySelector('p');

const feedbackMessages = {
  1: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  2: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  3: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  4: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  5: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service."
}

stars.forEach((star, index) => {
   star.addEventListener('click', function () {
     // Remove 'selected' class from all stars first
     stars.forEach(star => star.classList.remove('selected'));
 
     // Add 'selected' class to all stars up to and including the clicked one
     for (let i = 0; i <= index; i++) {
       stars[i].classList.add('selected');
     }
     const rating = index + 1;
     feedback.textContent = feedbackMessages[rating]
   });
 });
