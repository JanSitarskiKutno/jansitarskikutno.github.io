function skills(x)
{
    let a = document.getElementById("skill");

    switch (x)
    {
        case 1:
            a.innerHTML = "Uczę się od 2021r";
            break;
        case 2:
            a.innerHTML = "Uczę się od 2024r";
            break;
        case 3:
            a.innerHTML = "Uczę się od 2023r";
            break;
    }
}

function projects(x)
{
    let a = document.getElementById("project");
    
    switch (x)
    {
        case 1:
            a.innerHTML = "<a href='../projects/encdec.html'>Enkrypcja</a><a href='../projects/kalendarz.html'>Kalendarz</a><a href='../projects/sounds.html'>Dźwięki</a><a href='../projects/movie.html'>Film</a>";
            break;
        case 2:
            a.innerHTML = "<a href='https://github.com/ogweird/password-manager' target='blank'>Menedżer Haseł</a><a href='https://github.com/ogweird/bing-bot' target='blank'>Bot Wyszukujący W Bing</a>";
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

    navigation_items += "<span onclick='change_achievement(" + previous + ")' style='margin: 10px; cursor: pointer;'>Poprzedni</span>";
    navigation_items += "<span onclick='change_achievement(" + next + ")' style='margin: 10px; cursor: pointer;'>Następny</span>";

    navigation.innerHTML = navigation_items;
}

function xor_enc()
{
    let a = document.getElementById('tekst_xor').value.split("");
    let b = parseInt(document.getElementById('key_xor').value);

    for (let i = 0; i < a.length; i++) 
    { 
        a[i] = (String.fromCharCode((a[i].charCodeAt(0)) ^ b)); 
    } 

    document.getElementById('wynik').value = a.join("");
}

function mail()
{
    navigator.clipboard.writeText("doeshotter@outlook.com");
    alert("Skopiowano adres e-mail do schowka");
}
