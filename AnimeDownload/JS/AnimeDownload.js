let LineText;
let SearchOutCome;
let AnimeName;
let TeraBoxLink;
let Container;
//--------------------------------------------------------------------------------------------------------------------On Load
function ReadAnimeShareLink() {
    let storedText;
    var AnimeShareLinkText = "../../AnimeDownload/Data/AnimeShareLink.txt";

    fetch(AnimeShareLinkText)
        .then(function (response) {
            response.text().then(function (text) {
                storedText = text;
                LineText = storedText.split('\n');
                var No = 1;
                var TempNo = 0;
                while (No != TempNo) {
                    TempNo = TempNo + 1;
                    try {
                        let SplitedLine = LineText[No - 1].split("_____");
                        AnimeName = SplitedLine[1];
                        TeraBoxLink = SplitedLine[2];
                        CreateLink();
                        No = No + 1;
                    }
                    catch
                    {

                    }
                }
            });
        });
}
//--------------------------------------------------------------------------------------------------------------------Create Anime Item
function CreateLink() {
    CheckContainer();
    var a = document.createElement('div');
    a.className = "animeitem";
    a.innerHTML = "<button onclick=\"location.href = '" + TeraBoxLink + "'; \" class=\"animeitembutton\"><img class=\"animeitemimage\" src = \"../../AnimeDownload/Data/SharedAnimePhoto/" + AnimeName + ".jpg\" /><font class=\"animeitemname\">" + AnimeName + "</font></button >";
    document.getElementById("Title-" + Container).appendChild(a);
}
function CheckContainer() {
    let TempChar = AnimeName.split("");
    if (TempChar[0] == "A") {
        Container = "A";
    }
    else if (TempChar[0] == "B") {
        Container = "B";
    }
    else if (TempChar[0] == "C") {
        Container = "C";
    }
    else if (TempChar[0] == "D") {
        Container = "D";
    }
    else if (TempChar[0] == "E") {
        Container = "E";
    }
    else if (TempChar[0] == "F") {
        Container = "F";
    }
    else if (TempChar[0] == "G") {
        Container = "G";
    }
    else if (TempChar[0] == "H") {
        Container = "H";
    }
    else if (TempChar[0] == "I") {
        Container = "I";
    }
    else if (TempChar[0] == "J") {
        Container = "J";
    }
    else if (TempChar[0] == "K") {
        Container = "K";
    }
    else if (TempChar[0] == "L") {
        Container = "L";
    }
    else if (TempChar[0] == "M") {
        Container = "M";
    }
    else if (TempChar[0] == "N") {
        Container = "N";
    }
    else if (TempChar[0] == "O") {
        Container = "O";
    }
    else if (TempChar[0] == "P") {
        Container = "P";
    }
    else if (TempChar[0] == "Q") {
        Container = "Q";
    }
    else if (TempChar[0] == "R") {
        Container = "R";
    }
    else if (TempChar[0] == "S") {
        Container = "S";
    }
    else if (TempChar[0] == "T") {
        Container = "T";
    }
    else if (TempChar[0] == "U") {
        Container = "U";
    }
    else if (TempChar[0] == "V") {
        Container = "V";
    }
    else if (TempChar[0] == "W") {
        Container = "W";
    }
    else if (TempChar[0] == "X") {
        Container = "X";
    }
    else if (TempChar[0] == "Y") {
        Container = "Y";
    }
    else if (TempChar[0] == "Z") {
        Container = "Z";
    }
    else {
        Container = "No";
    }
}
//--------------------------------------------------------------------------------------------------------------------Search Anime
function Search() {
    if (document.getElementById("SearchBar").value != "") {
        ClearList();
        var No = 1;
        var TempNo = 0;
        while (No != TempNo) {
            TempNo = TempNo + 1;
            try {
                let SplitedLine = LineText[No - 1].split("_____");
                AnimeName = SplitedLine[1];
                TeraBoxLink = SplitedLine[2];
                SearchOutPut();
                if (SearchOutCome == "1") {
                    CreateLink();
                }
                No = No + 1;
            }
            catch
            {

            }
        }
    }
}
function SearchOutPut() {
    let TempSplit;
    let TempSplit1;
    TempSplit = AnimeName.toLowerCase().replaceAll(",", '');
    TempSplit = TempSplit.replaceAll("'", '');
    TempSplit1 = TempSplit.split(document.getElementById("SearchBar").value.toLowerCase());
    SearchOutCome = "0";
    try {
        if (TempSplit1[1] != null) {
            SearchOutCome = "1";
        }
    }
    catch {

    }
}
//--------------------------------------------------------------------------------------------------------------------Show All Anime
function ShowAll() {
    ClearList();
    ReadAnimeShareLink();
    document.getElementById("SearchBar").value = "";
}
//--------------------------------------------------------------------------------------------------------------------Clear Anime List
function ClearList() {
    document.getElementById("Title-No").innerHTML = '';
    document.getElementById("Title-A").innerHTML = '';
    document.getElementById("Title-B").innerHTML = '';
    document.getElementById("Title-C").innerHTML = '';
    document.getElementById("Title-D").innerHTML = '';
    document.getElementById("Title-E").innerHTML = '';
    document.getElementById("Title-F").innerHTML = '';
    document.getElementById("Title-G").innerHTML = '';
    document.getElementById("Title-H").innerHTML = '';
    document.getElementById("Title-I").innerHTML = '';
    document.getElementById("Title-J").innerHTML = '';
    document.getElementById("Title-K").innerHTML = '';
    document.getElementById("Title-L").innerHTML = '';
    document.getElementById("Title-M").innerHTML = '';
    document.getElementById("Title-N").innerHTML = '';
    document.getElementById("Title-O").innerHTML = '';
    document.getElementById("Title-P").innerHTML = '';
    document.getElementById("Title-Q").innerHTML = '';
    document.getElementById("Title-R").innerHTML = '';
    document.getElementById("Title-S").innerHTML = '';
    document.getElementById("Title-T").innerHTML = '';
    document.getElementById("Title-U").innerHTML = '';
    document.getElementById("Title-V").innerHTML = '';
    document.getElementById("Title-W").innerHTML = '';
    document.getElementById("Title-X").innerHTML = '';
    document.getElementById("Title-Y").innerHTML = '';
    document.getElementById("Title-Z").innerHTML = '';
}
//--------------------------------------------------------------------------------------------------------------------Go To Top
function TopFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
//--------------------------------------------------------------------------------------------------------------------