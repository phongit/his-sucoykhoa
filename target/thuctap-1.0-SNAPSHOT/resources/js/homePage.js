document.getElementById('btn-add').onclick = () => {
    $('.form1').css('display', 'block');
    $('.form2').css('display', 'none');
};


document.getElementById('btn-list').onclick = () => {
    $('.form1').css('display', 'none');
    $('.form2').css('display', 'block');
};

document.getElementById('Insert').onclick = () => {
//    alert('Thêm thành công');  
};

document.getElementById('add-loaiSC').onclick = () => {
    window.location.replace('themDanhMuc');
};

document.getElementById('add-tenSC').onclick = () => {
    window.location.replace('themDanhMuc');
};

document.getElementById('add-diadiem').onclick = () => {
    window.location.replace('themDanhMuc');
};


document.getElementById('add-nguyennhan').onclick = () => {
    window.location.replace('themDanhMuc');
};

document.getElementById('add-hauqua').onclick = () => {
    window.location.replace('themDanhMuc');
};

function sortTable(cot) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
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
            x = rows[i].getElementsByTagName("td")[cot];
            y = rows[i + 1].getElementsByTagName("td")[cot];
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

$('#myTable tr td a').click(function (e) {
    //Loai Su co
    var id = $(this).closest('.trList').find('td:nth-child(1)').text();
    alert(id);
    location.assign('list/' + id);
});