document.getElementById('btn-loaiSC').onclick = () => {
    $('.table-loaiSC').css('display', 'block');
    $('.table-tenSC').css('display', 'none');
    $('.table-phongKhoa').css('display', 'none');
    $('.table-lyDo').css('display', 'none');
    $('.table-hauQua').css('display', 'none');
};

document.getElementById('btn-tenSC').onclick = () => {
    $('.table-tenSC').css('display', 'block');
    $('.table-loaiSC').css('display', 'none');
    $('.table-phongKhoa').css('display', 'none');
    $('.table-lyDo').css('display', 'none');
    $('.table-hauQua').css('display', 'none');
};

document.getElementById('btn-phongKhoa').onclick = () => {
    $('.table-phongKhoa').css('display', 'block');
    $('.table-tenSC').css('display', 'none');
    $('.table-loaiSC').css('display', 'none');
    $('.table-lyDo').css('display', 'none');
    $('.table-hauQua').css('display', 'none');
};

document.getElementById('btn-nguyenNhan').onclick = () => {
    $('.table-lyDo').css('display', 'block');
    $('.table-tenSC').css('display', 'none');
    $('.table-loaiSC').css('display', 'none');
    $('.table-phongKhoa').css('display', 'none');
    $('.table-hauQua').css('display', 'none');
};

document.getElementById('btn-hauQua').onclick = () => {
    $('.table-hauQua').css('display', 'block');
    $('.table-tenSC').css('display', 'none');
    $('.table-loaiSC').css('display', 'none');
    $('.table-phongKhoa').css('display', 'none');
    $('.table-lyDo').css('display', 'none');
};

$('#btn-themDMloai').click(function (){
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'block');
});

$('#btn-themDMten').click(function (){
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'block');
});

$('#btn-themDMphong').click(function (){
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'block');
});

$('#btn-themDMlydo').click(function (){
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'block');
});

$('#btn-themDMhauqua').click(function (){
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'block');
});

$('.btn-back').click(function (){
    $('.tab-themDM').css('display', 'block');
    $('.container-left').css('width', '100%');
    $('.container-right').css('display', 'none');
    $('.container-right1').css('display', 'none');
});

$('#tbLoaiSC tr td i').click(function (e) {
    //Loai Su co
    var id = $(this).closest('.trLoaiSC').find('td:nth-child(1)').text();
    alert(id);
    location.assign('deleteLoai/' + id);
});

$('#tbLoaiSC tr td a').click(function (e) {
    var id = $(this).closest('.trLoaiSC').find('td:nth-child(1)').text();
    var ten = $(this).closest('.trLoaiSC').find('td:nth-child(2)').text();

    var ID = document.getElementById('id-upLoaiSC').value = id;
    var TEN = document.getElementById('ten-upLoaiSC').value = ten;

    $('.container-right').css('display', 'none');
    $('.container-right1').css('display', 'block');
    $('.tab').css('width', '19.5%');
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'none');
});

$('#tbTenSC tr td i').click(function (e) {
    //Ten Su co
    var id = $(this).closest('.trTenSC').find('td:nth-child(1)').text();
    alert(id);
    location.assign('deleteTen/' + id);
});

$('#tbTenSC tr td a').click(function (e) {
    var id = $(this).closest('.trTenSC').find('td:nth-child(1)').text();
    var ten = $(this).closest('.trTenSC').find('td:nth-child(2)').text();

    var ID = document.getElementById('id-upTenSC').value = id;
    var TEN = document.getElementById('ten-upTenSC').value = ten;

    $('.container-right').css('display', 'none');
    $('.container-right1').css('display', 'block');
    $('.tab').css('width', '19.5%');
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'none');

});

$('#tbKhoaPhong tr td i').click(function (e) {
    //Ten Su co
    var id = $(this).closest('.trKhoaPhong').find('td:nth-child(1)').text();
    alert(id);
    location.assign('deleteKhoaPhong/' + id);
});

$('#tbKhoaPhong tr td a').click(function (e) {
    var id = $(this).closest('.trKhoaPhong').find('td:nth-child(1)').text();
    var ten = $(this).closest('.trKhoaPhong').find('td:nth-child(2)').text();

    var ID = document.getElementById('id-upKP').value = id;
    var TEN = document.getElementById('ten-upKP').value = ten;

    $('.container-right').css('display', 'none');
    $('.container-right1').css('display', 'block');
    $('.tab').css('width', '19.5%');
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'none');

});

$('#tbLyDo tr td i').click(function (e) {
    var id = $(this).closest('.trLyDo').find('td:nth-child(1)').text();
    alert(id);
    location.assign('deleteLyDo/' + id);
});

$('#tbLyDo tr td a').click(function (e) {
    var id = $(this).closest('.trLyDo').find('td:nth-child(1)').text();
    var ten = $(this).closest('.trLyDo').find('td:nth-child(2)').text();

    var ID = document.getElementById('id-upNN').value = id;
    var TEN = document.getElementById('ten-upNN').value = ten;

    $('.container-right').css('display', 'none');
    $('.container-right1').css('display', 'block');
    $('.tab').css('width', '19.5%');
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'none');

});

$('#tbHauQua tr td i').click(function (e) {
    //Ten Su co
    var id = $(this).closest('.trHauQua').find('td:nth-child(1)').text();
    alert(id);
    location.assign('deleteHauQua/' + id);
});

$('#tbHauQua tr td a').click(function (e) {
    var id = $(this).closest('.trHauQua').find('td:nth-child(1)').text();
    var ten = $(this).closest('.trHauQua').find('td:nth-child(2)').text();

    var ID = document.getElementById('id-upHQ').value = id;
    var TEN = document.getElementById('ten-upHQ').value = ten;

    $('.container-right').css('display', 'none');
    $('.container-right1').css('display', 'block');
    $('.tab').css('width', '19.5%');
    $('.tab-themDM').css('display', 'none');
    $('.container-left').css('width', '49.8%');
    $('.container-right').css('display', 'none');

});

function sortTable(tb) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('' + tb + '');
    console.log(table);
    switching = true;
    /*Make a loop that will continue until
     no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
         first, which contains table headers):*/
        for (i = 0; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
             one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i + 1].getElementsByTagName("td")[1];
            //check if the two rows should switch place:
            if (x.innerHTML.toUpperCase() > y.innerHTML.toUpperCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
             and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}