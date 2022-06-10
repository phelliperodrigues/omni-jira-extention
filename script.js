document.addEventListener('DOMContentLoaded', function () {

    function openNewTabFromCardNumber() {
       
        window.open(generateLink(), '_blank');
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

    function generateLink() {
        var cardNumber = document.querySelector('#card-number').value;
        var prefix = document.querySelector('#prefix').value;
        return 'https://omnicfi.atlassian.net/browse/' + prefix + '-' + cardNumber;
    }

    document.querySelector('#btn-copy').addEventListener('click', function () {
        var link = generateLink();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(link).then(() => {
              console.log('Copied to clipboard successfully.');
            }, (err) => {
              console.log('Failed to copy the text to clipboard.', err);
            });
          } else if (window.clipboardData) {
            window.clipboardData.setData("Text", input);
          }
    });
});
