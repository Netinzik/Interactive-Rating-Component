document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('.submit-button');

  button.addEventListener('click', feedback)

  function feedback(){
    var value = document.querySelector('.input-real:checked').value;
    var feedback_section = document.querySelector('.rating-state-star');

    feedback_section.innerHTML = `
    <div class="feedback">
    <img
      class="image-feedback"
      src="./assets/images/illustration-thank-you.svg"
      alt="Thank You"
    />
    <p class="result-feedback">You selected ${value} out of 5</p>

    <div class="text-feedback">
      <h1 class="text-feedback-title">Thank you!</h1>
      <p class="text-feedback-description">
        We appreciate you taking the time to give a rating. If you ever
        need more support, don't hesitate to get in touch!
      </p>
    </div>
  </div>
    `;
  }
});