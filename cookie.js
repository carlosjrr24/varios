if (!get_cookie("username")) {
    var username = prompt("Please enter your name", "");

    if (username) {
        var current_date = new Date;
        var cookie_year = current_date.getFullYear() + 1;
        var cookie_month = current_date.getMonth();
        var cookie_day = current_date.getDate();
        set_cookie("username", username, cookie_year, cookie_month, cookie_day);
    }
} else {
    var username = get_cookie("username");
    document.write("Hi " + username + ", welcome to my website!");
    document.write("<br><a href=\"javascript:delete_cookie('username');
        document.location.reload();\
        ">
        Forget about me! < /a>" );
    }