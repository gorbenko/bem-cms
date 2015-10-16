$(function () {
    $.get('/messages', function (data) {
        $('.messages').append(data);
    });

    $('.btn-send').on('click', function () {
        var message = $('.message').val();

        $.post('/messages/add', {
            message: message
        }, function (data) {
            $('.messages').append(function () {
                var date = moment(data.date).format('MMMM Do YYYY, h:mm:ss a');
                return $('<li>').html(data.message + ' (' + date + ')');
            });
        });
    })
});
