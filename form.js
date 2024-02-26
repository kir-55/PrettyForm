$().ready(function () {
    jQuery.validator.addMethod("pesel", function(value, element) {
            let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
            let sum = 0;
            let controlNumber = parseInt(value.substring(10, 11));
        
            for (let i = 0; i < weight.length; i++) {
                sum += (parseInt(value.substring(i, i + 1)) * weight[i]);
            }
            sum = sum % 10;
            return (10 - sum) % 10 === controlNumber;
        
    }, "Pesel jest niepoprawny!");

    jQuery.validator.addMethod("phonePL", function(phone_number, element) {
        phone_number = "+48" + phone_number;
        //phone_number = phone_number.replace(/\s+/g, "");
        return phone_number.match(/(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/);
    }, "To nie jest numer telefonu!");


    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return /^[a-z]+$/i.test(value);
      }, "Tylko litery"); 


    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo('#error-div');
        },


        rules: {
            age:{
                required: true,
                number: true,
                max: 120,
                min: 3
            },
            name: {
                required: true,
                lettersonly : true
            },
            vorname: {
                required: true,
                lettersonly : true
            },
            pearsoncode: {
                required: true,
                number: true,
                pesel: true
            },
            password: {
                required: true,
                minlength: 8
            },
            email: {
                required: true,
                email: true
            },
            phonenumber:{
                required: true,
                phonePL: true
            }
        },
        // In 'messages' user have to specify message as per rules
        messages: {
            age:{
                required: "Podaj swój wiek!",
                number: "Wiek nie jest numerem!",
                max: "Podaj poprawny wiek!",
                min: "Zakładamy że masz więcej niż 2 lata!"
            },
            name: {
                required: "Podaj swoje imie!",
                lettersonly : "Imie może zawierac tylko litery!"
            },
            vorname: {
                required: "Podaj swoje nazwisko!",
                lettersonly : "Nazwisko może zawierac tylko litery!"
            },
            pearsoncode: {
                required: "Podaj pesel!",
                number: "Podaj liczbowy pesel!",
                pesel: "Podaj poprawny pesel!"
            },
            password: {
                required: "Hasło jest niezbędne!",
                minlength: "Hasło od 8 znaków!"
            },
            email:
            {
                required: "E-mail jest wymagany!",
                email: "Podaj poprawny e-mail!"
            },
            phonenumber:{
                required: "Podaj numer telefonu!",
                phonePL: "To nie jest numer telefonu!"
            }

        }
    });
});