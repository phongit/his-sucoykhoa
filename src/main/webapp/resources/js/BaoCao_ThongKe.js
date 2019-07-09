$(document).ready(function () {
});

$('#GuiTatCa').click(function () {
    $('.optionThem').css('display', 'none');
});

$('#GuiChiTiet').click(function () {
    $('.optionThem').css('display', 'block');
});

$('#ngayBD').on('focusout', function () {
    var minDay = $('#ngayBD').val();
    $('#ngayKT').attr({
        disabled: false,
        min: minDay
    });
});

$('#cbtenSC').click(function () {
    var cbtenSC = $('#cbtenSC').is(":checked");
    if (cbtenSC === true) {
        $('#iptenSC').attr({
            disabled: false
        });
    } else {
        $('#iptenSC').val("");
        $('#iptenSC').attr({
            disabled: true
        });
    }
});

$('#cbloaiSC').click(function () {
    var cbloaiSC = $('#cbloaiSC').is(":checked");
    if (cbloaiSC === true) {
        $('#iploaiSC').attr({
            disabled: false
        });
    } else {
        $('#iploaiSC').val("");
        $('#iploaiSC').attr({
            disabled: true
        });
    }
});

$('#cbdiaDiem').click(function () {
    var cbdiaDiem = $('#cbdiaDiem').is(":checked");
    if (cbdiaDiem === true) {
        $('#ipdiaDiem').attr({
            disabled: false
        });
    } else {
        $('#ipdiaDiem').val("");
        $('#ipdiaDiem').attr({
            disabled: true
        });
    }
});

$('#cbmucDo').click(function () {
    var cbmucDo = $('#cbmucDo').is(":checked");
    if (cbmucDo === true) {
        $('#ipmucDo').attr({
            disabled: false
        });
    } else {
        $('#ipmucDo').val("");
        $('#ipmucDo').attr({
            disabled: true
        });
    }
});

$('#cbtinhChat').click(function () {
    var cbtinhChat = $('#cbtinhChat').is(":checked");
    if (cbtinhChat === true) {
        $('#iptinhChat').attr({
            disabled: false
        });
    } else {
        $('#iptinhChat').val("");
        $('#iptinhChat').attr({
            disabled: true
        });
    }
});

$('#cbguiBC').click(function () {
    var cbguiBC = $('#cbguiBC').is(":checked");
    if (cbguiBC === true) {
        $('#ipguiBC').attr({
            disabled: false
        });
    } else {
        $('#ipguiBC').val("");
        $('#ipguiBC').attr({
            disabled: true
        });
    }
});

$('#btn-Review').click(function () {
    var dayStart = $('#ngayBD').val();
    var dayEnd = $('#ngayKT').val();
    var tenSC = $('#iptenSC').val();
    var loaiSC = $('#iploaiSC').val();
    var diaDiem = $('#ipdiaDiem').val();
    var tinhChat = $('#iptinhChat').val();
    var mucDo = $('#ipmucDo').val();
    var guiBC = $('#ipguiBC').val();
    var Option = {
        dayStart,
        dayEnd
    };
    if(tenSC !== ""){
        Option.seal({TenSuCo: tenSC});
    }
    if(loaiSC !== ""){
        Option.push(loaiSC);
    }
    if(diaDiem !== ""){
        Option.push(diaDiem);
    }
    if(tinhChat !== ""){
        Option.push(tinhChat);
    }
    if(mucDo !== ""){
        Option.push(mucDo);
    }
    if(guiBC !== ""){
        Option.push(guiBC);
    }
    var data;
    for (var i = 0; i < Option.length; i++) {
        data += Option[i];
    }
    console.log(Option);

//    $.ajax({
//        url: 'thongke.json',
//        type: 'POST',
//        dataType: 'JSON',
//        data: data,
//        success: function (rs) {
//            console.log(rs);
//        }
//    });
});
