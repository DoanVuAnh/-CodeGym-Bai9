function month() {
    let month = +document.getElementById("entermonth").value;
    switch (month){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            document.getElementById("month").innerHTML = "31 days";
            break;
        case 4: case 6: case 9: case 11:
            document.getElementById("month").innerHTML = "30 days";
            break;
        case 2:
            document.getElementById("month").innerHTML = "28 or 29 days";
            break;
        default:
            document.getElementById("month").innerHTML = "Please re-enter the month";
            break;

    }

}