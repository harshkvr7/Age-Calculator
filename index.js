$(document).ready(function () {

    const date = new Date();

    const curr_year = date.getFullYear();
    const curr_month = date.getMonth() + 1;
    const curr_day = date.getDate();

    var age_years = 0;
    var age_months = 0;
    var age_days = 0;

    $("svg").on("click", function () {
        var input_day = $("#dayi").val();
        var input_month = $("#monthi").val();
        var input_year = $("#yeari").val();

        age_years = curr_year - input_year;
        age_months = curr_month - input_month;
        age_days = curr_day - input_day;

        if (age_days < 0) {
            age_months--;
            age_days += 30;  
        }

        if (age_months < 0) {
            age_years--;
            age_months += 12;
        }

        $("#yearo").text(age_years);
        $("#montho").text(age_months);
        $("#dayo").text(age_days);

    });
});

