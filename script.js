$(document).ready(function() {

    var days = [
    {
        name : 'Ind Day',
        day :16
    },
    {
        name : 'Labor Day',
        day :1
    }
    ];

    var t = $('table');
    t.addClass('classy');

//function IsetEvent(date.name, date.day)

    function insertEvent (name, day) {
        if (name.length) {
            console.log('name is' + name);
        } else {
            console.error('no name!');
        return;
        }

        console.log(day);

       if (day >0) {
            console.log('day is' + day);
        } else {
            console.error('no day!');
            return;
        }

        var offset = 1;

        $($('td')[offset + (day -1)]).append('<span class="event">'+ name +'</span>');
    }

    var btn = $('#submitter');

    btn.on('click', function (evt) {
        evt.preventDefault();

        console.log('clicked button!');

        // var name = $('[name="eventName"]').val();
        // var day = $('[name="eventDay"]').val();
        var nameField = $('[name="eventName"]');
        var name = nameField.val();
        var dayField = $('[name="eventDay"]');
        var day = dayField.val();

        insertEvent(name, day);

        // $('[name="eventName"]').val('');
        // $('[name="eventDay"]').val('');

        nameField.val('');
        dayField.val('');

        $('#myModal').modal('hide');

    });


//initial setup
    $.each(days, function (index, dateOb) {
        insertEvent(dateOb.name, dateOb.day);
    });


    /*
    $('#eventName').on('keyup', function (event) {
        console.log($('#eventName').val());
    */

//add day clicked to the form
    $('td').on('click', function (event) {
        console.log(event);

        var day = $(event.target).children('.date').text();
        $('[name="eventDay"]').val(day);

        $('#myModal').modal('toggle');

        console.log(day);
    });

});


