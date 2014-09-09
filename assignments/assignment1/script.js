$(function() {
    $('.contact').on('click', function(event) {
        event.preventDefault();
        var contacts = getContacts(),
            selected = $(this).attr('id');
        showContact(contacts[selected]);
        $('.contact-display').show();
    });

    function getContacts() {
        var contacts = {
            contact1:
                {
                    fullName: 'Ben Spoon',
                    phone: '215-435-3552',
                    emails: ['ben@benspoon.com', 'spoonb@philau.edu']
                },
            contact2:
                {
                    fullName: 'John Richman',
                    phone: '215-555-4311',
                    emails: ['jRichman@example.com','johnR@example.com']
                },
            contact3:
                {
                    fullName: 'Sam Holland',
                    phone: '215-555-1234',
                    emails: ['sHolland@example.com','samH@awesome.com']
                },
            contact4:
                {
                    fullName: 'Janet Foobar',
                    phone: '215-555-4322',
                    emails: ['jFoobar@example.com','janetF@test.com']
                }
        }
        return contacts;
    }
    function showContact(contact) {
        $('.contact-name').text(contact.fullName);
        $('.contact-phone').text(contact.phone);
        $('.contact-email').text(contact.emails[0]);
    }
});
