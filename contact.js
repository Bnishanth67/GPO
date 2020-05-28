function sendEmail() {
    var name = $("#name");
    var email = $("#email");

    var body = $("#message");

    if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(message)) {
        $.ajax({
            url: 'sendEmail.php',
            method: 'POST',
            dataType: 'json',
            data: {
                name: name.val(),
                email: email.val(),

                message: message.val()
            },
            success: function(response) {
                if (response.status == "success")
                    alert('Email Has Been Sent!');
                else {
                    alert('Please Try Again!');
                    console.log(response);
                }
            }
        });
    }
}

function isNotEmpty(caller) {
    if (caller.val() == "") {
        caller.css('border', '1px solid red');
        return false;
    } else
        caller.css('border', '');

    return true;
}