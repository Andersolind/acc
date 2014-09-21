
$(function () {
    $("#btnAdd").click(function () {
        var getVal = $("#Onum").val();
        var url = "/Home/Order?oligonucleotideNum=" + getVal + "";
        window.location = url;
    });
    $('#Onum').keyup(function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    $('#shipping_Date').datepicker();

    $('.dropdown-toggle').click(function () {
        var location = $(this).attr('href');
        window.location.href = location;
        return false;
    });

});


