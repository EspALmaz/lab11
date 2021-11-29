$(document).ready(function() {
$("#forms").validate({
rules: {

email: {
required: true,
email: true
},
password: {
  required: true,
minlength: 6,
maxlength: 12
},
confirm_password: {
  required: true,
minlength: 6,
maxlength: 12,
equalTo : "#password"
},
}
});
});

