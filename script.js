document.addEventListener('DOMContentLoaded', function () {

    function openNewTabFromCardNumber() {
        var cardNumber = document.querySelector('#card-number').value;
        var prefix = document.querySelector('#prefix').value;
        window.open('https://omnicfi.atlassian.net/browse/' + prefix + '-' + cardNumber, '_blank');
    }

    document.querySelector('#btn').addEventListener('click', function () {
        openNewTabFromCardNumber();
    });

    document.querySelector('#card-number').focus();

    document.querySelector('#prefix').addEventListener('change', function () {
        document.querySelector('#card-number').focus();
    });

    document.querySelector('#card-number').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            openNewTabFromCardNumber();
        }
    });

});
