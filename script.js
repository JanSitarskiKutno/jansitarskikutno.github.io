function skills(x)
{
    let a = document.getElementById("skill");

    switch (x)
    {
        case 1:
            a.innerHTML = "Uczę się od 2021r"
            break;
        case 2:
            a.innerHTML = "Uczę się od 2024r"
            break;
        case 3:
            a.innerHTML = "Uczę się od 2023r"
            break;
    }
}

function projects(x)
{
    let a = document.getElementById("project");
    
    switch (x)
    {
        case 1:
            a.innerHTML = "<a href='../projects/encdec.html'>Enkrypcja Tekstu</a><a href='#'>Kalendarz</a>"
            break;
        case 2:
            a.innerHTML = "<a href='https://github.com/ogweird/password-manager' target='blank'>Menedżer Haseł</a><a href='https://github.com/ogweird/bing-bot' target='blank'>Bot Wyszukujący W Bing</a><a href='https://github.com/ogweird/math-lib' target='blank'>Biblioteka Matematyczna</a>"
            break;
    }
}

var ac = new Array(
    "Udział i przejście do drugiego etapu w konkursie programistycznym Gigathon w 2023r",
    "Udział i przejście do drugiego etapu w konkursie programistycznym Gigathon w 2024r",
    "Udział w warsztatach ICP-HUB w 2024r",
    "Wyróżńienie w konkursie z języka angielskiego w 2020r"
);

function change_achievement(i)
{
    i = isNaN(i = parseInt(i)) ? 0 : i;

    if (i < 0 || i > ac.length) {
        i = 0;
    }

    let a = document.getElementById("achievement");
    let navigation = document.getElementById("navigation");

    a.innerHTML = ac[i];

    let previous = i > 0 ? i - 1 : 0;
    let next = i < ac.length - 1 ? i + 1 : ac.length - 1;

    let navigation_items = ""

    navigation_items += "<span onclick='change_achievement(" + previous + ")' style='margin: 10px;'><</span>";
    navigation_items += "<span onclick='change_achievement(" + next + ")' style='margin: 10px;'>></span>";

    navigation.innerHTML = navigation_items;
}