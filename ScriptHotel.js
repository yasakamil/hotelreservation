function sub()
{
    if((document.forminput.id.value!='')&&(document.forminput.server.value!=''))
    {
        alert("Your tickets have been booked.");
    }
}

function cektanggal() {
    var date = new Date();
    var month = new date.getMonth() + 1; //month dimulai dari index 0 //5
    var day = date.getDate();
    var year = date.getFullYear();
    var output = month + "/" + day + "/" + year;
    var tanggal = document.getElementById("tanggal").value;
    if (Date.parse(tanggal) < Date.parse(output)) {
        alert("Anda tidak bisa memilih tanggal kurang dari tanggal saat ini")
    }
}

function hitung() {
    var s = document.getElementsByName("roomtype"); //Twin- 0, Suite- 1, Executive- 2
    var harga = 0;
    for (i = 0; i < s.length; i++) {
        //i <3
        if (s[i].checked) {
            if (s[i].value == "Twin") {
                harga = 350000;
            } else if (s[i].value == "Suite") {
                harga = 500000;
            } else {
                harga = 1000000;
            }
        }
    }
    document.getElementById("harga").value = harga;
    var jumlah = document.getElementById("jumlah").value;
    var total = harga * jumlah;
    document.getElementById("total").value = total;
    }
function booking() {
    var cek=0; //tanggal sesuai
    var nama = document.getElementById("nama").value;
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var output = month + "/" + day + "/" + year;
    var tanggal = document.getElementById("tanggal").value;
    if (Date.parse(tanggal) < Date.parse(output)) {
        cek = 1; //tanggal invalid
    }
    var movie = document.getElementById("movie").value;
    var timing = document.getElementById("timing").value;

    var s = document.getElementsByName("roomtype");
    var harga = 0;
    for (i = 0; i < s.length; i++) {
    if (s[i].value == "Twin") {
        harga = 350000;
    } else if (s[i].value == "Suite") {
        harga = 500000;
    } else {
        harga = 1000000;
    }
    roomtype = s[i].value;
}
document.getElementById("harga").value = harga;
    var jumlah = document.getElementById("jumlah").value;
    var total = harga * jumlah;
    document.getElementById("total").value = total;
    var output =
        "Nama : " + nama + "<br/>" +
        "Tanggal booking : " + tanggal + "<br/>" +
        "Room Type : " + roomtype + "<br/>" +
        "Harga : " + harga + "<br/>" +
        "Jumlah Tiket : " + jumlah + "<br/>" +
        "Total : " + total;
    if (cek == 0) {
        document.getElementById("output").innerHTML = output;
    } else {
        alert("Anda tidak bisa memilih tanggal kurang dari tanggal saat ini");
    }
    return false;
}
