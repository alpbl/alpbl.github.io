var num = 0, cur, i, j, calc = function(t) {
    i = 0;
    while (i < t) {
        if (num > 0) {
            $("div").append("<hr />");
        }
        j = 0;
        while (j < 100) {
            num += 1;
            $("div").append("<p id=\"p" + num +"\"></p>");
            $("#p" + num).append("<span class=\"sta\">" + num + "</span>");
            cur = num;
            while (cur > 2) {
                cur = cur % 2 == 0 ? cur / 2 : cur * 3 + 1;
                $("#p" + num).append(" &#8594; " + cur);
            }
            $("#p" + num).append(" &#8594; <span class=\"one\">1</span> <span class=\"get\">&#8730;</span>");
            j += 1;
        }
        i += 1;
    }
};
calc(1);
