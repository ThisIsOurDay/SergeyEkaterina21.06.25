(function () {
    var _id = "4d992b4dce0c1fea4827f40a11819dbc";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:251px;height:41px;'></div>");
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1], // Отображение дней, часов, минут и секунд
            "type": {
                "currentType": "1",
                "params": {
                    "usertime": true,
                    "tz": "3", // Московское время (UTC+3)
                    "utc": new Date("2025-06-21T10:10:00+03:00").getTime() // 21 июня 2025 года 10:10 по московскому времени
                }
            },
            "design": {
                "type": "text",
                "params": {
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "31",
                    "number-font-color": "#565656",
                    "separator-margin": "15",
                    "separator-on": true,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "10",
                    "text-font-color": "#565656"
                }
            },
            "designId": 1,
            "theme": "white",
            "width": 251,
            "height": 41
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);