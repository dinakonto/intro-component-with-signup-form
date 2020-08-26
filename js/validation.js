$(function() {
  $("#signup-form").validate({
    rules: {
      fname : {
        required: true,
      },
      lname : {
        required: true,
      },
      email : {
        required: true,
        email: true
      },
      pword : {
        required: true,
        minlength: 6
      }
    },
    messages: {
      fname: {
        required: "First Name cannot be empty"
      },
      lname: {
        required: "Last Name cannot be empty"
      },
      email: {
        required: "Email cannot be empty",
        email: "Looks like this is not an email"
      },
      pword: {
        required: "Password cannot be empty",
        minlength: "Password must be at least 6 characters"
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass("input-error").removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass("input-error").addClass(validClass);
    }
  });
})
