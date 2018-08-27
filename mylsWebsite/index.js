(function () {
    'use strict';
    var form = $("form"),
        send = $("#send"),
        inputName = $("#name"),
        inputEmail = $("#email"),
        inputSubject = $("#subject"),
        inputMessage = $("#message"),
        display = $("#display"),
        modalB = $(".modalB");

    modalB.on('click', function (event) {
        form.trigger('reset');
        send.off('click');
        display.empty();
        console.log('hi');
        send.on('click', function (event) {
            console.log("hi");
            var name = inputName.val() ? inputName.val() : '',
                email = inputEmail.val() ? inputEmail.val() : '',
                subject = inputSubject.val() ? inputSubject.val() : '',
                message = inputMessage.val() ? inputMessage.val() : '';
            $.post("mail.php", { name: name, email: email, subject: subject, message: message },
                function () {
                    display.empty();
                    form.trigger('reset');
                    send.off('click');
                    $('<div class="alert alert-success" role="alert">' +
                        'Thank You' + name + 'you will be contacted shortly' +
                        '</div>').appendTo(display);
                }).fail(function (jqxhr) {
                    var response = jqxhr.responseText;
                    display.empty();
                    send.off('click');
                    $('<div class="alert alert-danger" role="alert">' +
                        'Error!' + response +
                        '</div>').appendTo(display);
                });
        });
    });

}());