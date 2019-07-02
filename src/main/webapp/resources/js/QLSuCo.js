$(document).ready(function () {
    getIDSC();

});

function getIDSC() {
    $.ajax({
        url: "getIDSC.json",
        type: 'POST',
        dataType: 'JSON',
        success: function (result) {
            var data = result[0];
            if (data.MaSuCo === 'null') {
                $('#maSuCo').val(1);
            } else {
                $('#maSuCo').val(data.MaSuCo + 1);
            }
            $('#date').val(data.NGHT.slice(0, 10));
            $('#time').val(data.NGHT.slice(11, 16));
        }
    });
}

function getDataSC(maSC) {
    var data = {
        maSC
    };
    $.ajax({
        url: "getDataSC.json",
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function (result) {
            var data = result[0];
            alert("Thêm Thành Công");
            var newRow = ` <tr>
                                <td width="5%">` + data.MaSuCo + `</td>
                                <td class="tdTenSC" width="8%">` + data.TenSuCo + `</td>
                                <td class="tdTenSC" width="8%">` + data.LoaiSuCo + `</td>
                                <td width="7%">` + data.MucDo + `</td>
                                <td class="tdTenSC" width="8%">` + data.DiaDiem + `</td>
                                <td width="7%">` + data.Ngay + `</td>
                                <td width="5%">` + data.Gio + `</td>
                                <td width="8%">` + data.TinhChat + `</td>
                                <td class="tdTenSC" width="8%">` + data.GuiBC + `</td>
                                <td class="tdMoTa" width="13%">` + data.MoTa + `</td>
                                <td class="tdGiaiPhap" width="14%">` + data.GiaiPhap + `</td>
                                <td width="3%">
                                    <div class="dropdown">
                                        <p class="fa fa-print icon2" style="color: black; font-size: 25px"></p>
                                        <div class="dropdown-content1">
                                            <p onclick="window.location.replace('exportPDF')">Xuất PDF</p>
                                            <p onclick="window.location.replace('exportXLS')">Xuất XLS</p>
                                            <p onclick="window.location.replace('exportRTF')">Xuất RTF</p>
                                        </div>
                                    </div>
                                </td>
                                <td width="3%">
                                    <a class="fa fa-edit icon1" style="color: darkorange; font-size: 25px"></a>
                                </td> 
                                <td width="3%">
                                    <i class="fa fa-trash icon1" style="color: red; font-size: 20px"></i>
                                </td>
                            </tr>`;
            $('#myTable').append(newRow);
        }
    });
}

function loadDataUpdate(maSC) {
    var data = {
        maSC: maSC
    };
    $.ajax({
        url: "getData.json",
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function (result) {
            var data = result[0];
            $('#maSuCo').val(data.MaSuCo);
            $('#tenSuCo').val(data.TenSuCo);
            $('#loaiSuCo').val(data.LoaiSuCo);
            $('#mucDo').val(data.MucDo);
            $('#diaDiem').val(data.DiaDiem);
            $('#date').val(data.Ngay);
            $('#time').val(data.Gio);
            $('#tinhChat').val(data.TinhChat);
            $('#guiBC').val(data.GuiBC);
            $('#moTa').val(data.MoTa);
            $('#giaiPhap').val(data.GiaiPhap);
        }
    });
}

function getDataEditSC(stt, maSC) {
    alert('getDataEditSC ' + maSC);
    var data = {
        maSC
    };
    $.ajax({
        url: "getDataEditSC.json",
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function (result) {
            var data = result[0];
            alert(data);
            getIDSC();
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(3)').html(data.TenSuCo);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(4)').html(data.LoaiSuCo);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(5)').html(data.MucDo);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(6)').html(data.DiaDiem);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(7)').html(data.Ngay);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(8)').html(data.Gio);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(9)').html(data.TinhChat);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(10)').html(data.GuiBC);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(11)').html(data.MoTa);
            $('#myTable tr:nth-child(' + stt + ') td:nth-child(12)').html(data.GiaiPhap);
            $('#tenSuCo').val("");
            $('#loaiSuCo').val("");
            $('#mucDo').val("");
            $('#diaDiem').val("");
            $('#tinhChat').val("");
            $('#guiBC').val("");
            $('#moTa').val("");
            $('#giaiPhap').val("");
        }
    });
}

function addSuCo(maSC, tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap) {
    var data = {
        maSC: maSC,
        tenSC: tenSC,
        loaiSC: loaiSC,
        mucDo: mucDo,
        diaDiem: diaDiem,
        ngay: ngay,
        gio: gio,
        tinhChat: tinhChat,
        guiBC: guiBC,
        moTa: moTa,
        giaiPhap: giaiPhap
    };

    $.ajax({
        url: 'addSuCo.json',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (result) {
            getDataSC(maSC);
            getIDSC();
            $('#tenSuCo').val("");
            $('#loaiSuCo').val("");
            $('#mucDo').val("");
            $('#diaDiem').val("");
            $('#tinhChat').val("");
            $('#guiBC').val("");
            $('#moTa').val("");
            $('#giaiPhap').val("");
        }
    });


}

function updateSC(stt, maSC, tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap) {
    var data = {
        maSC: maSC,
        tenSC: tenSC,
        loaiSC: loaiSC,
        mucDo: mucDo,
        diaDiem: diaDiem,
        ngay: ngay,
        gio: gio,
        tinhChat: tinhChat,
        guiBC: guiBC,
        moTa: moTa,
        giaiPhap: giaiPhap
    };

    $.ajax({
        url: 'updateSC.json',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (result) {
            if (result === 1) {
                alert("Cập nhật thành công");
                getDataEditSC(stt, maSC);
            } else {
                alert("Cập nhật thất bại");
            }

        }
    });
}

function delSuCo(maSC, stt) {
    var data = {
        maSC
    };

    $.ajax({
        url: 'delSuCo.json',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (rs) {
            if (rs === 1) {
                alert("Xóa thành công");
                $('#myTable tr:nth-child(' + stt + ')').remove();
            } else {
                alert("Có lỗi trong khi xóa\nXóa KHÔNG thành công");
            }

        }
    });
}

function exportPDF(maSC) {
    var data = {
        maSC
    };
    $.ajax({
        url: 'exportPDF',
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function (rs) {

        }
    });
}

$('#btn-ThemSC').click(function () {
    var maSC = $('#maSuCo').val();
    var tenSC = $('#tenSuCo').val();
    var loaiSC = $('#loaiSuCo').val();
    var mucDo = $('#mucDo').val();
    var diaDiem = $('#diaDiem').val();
    var ngay = $('#date').val();
    var gio = $('#time').val();
    var tinhChat = $('#tinhChat').val();
    var guiBC = $('#guiBC').val();
    var moTa = $('#moTa').val();
    var giaiPhap = $('#giaiPhap').val();
    if (maSC !== "" && tenSC !== "" && loaiSC !== "" && mucDo !== "" && diaDiem !== "" && tinhChat !== "" && guiBC !== "" && moTa !== "" && giaiPhap !== "") {
        addSuCo(maSC, tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap);
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});


var stt;
$('#myTable tr td a').click(function () {
    stt = $(this).closest('tr').find('td:nth-child(1)').text();
    var maSC = $(this).closest('tr').find('td:nth-child(2)').text();
    loadDataUpdate(maSC);
    
});

$('#myTable tr td i').click(function () {
    stt = $(this).closest('tr').find('td:nth-child(1)').text();
    var maSC = $(this).closest('tr').find('td:nth-child(2)').text();
    var mes = confirm("Bạn có chắc muốn xóa");
    if (mes === true) {
        delSuCo(maSC, stt);
    }
});

$('#btn-SuaSC').click(function () {
        var maSC = $('#maSuCo').val();
        var tenSC = $('#tenSuCo').val();
        var loaiSC = $('#loaiSuCo').val();
        var mucDo = $('#mucDo').val();
        var diaDiem = $('#diaDiem').val();
        var ngay = $('#date').val();
        var gio = $('#time').val();
        var tinhChat = $('#tinhChat').val();
        var guiBC = $('#guiBC').val();
        var moTa = $('#moTa').val();
        var giaiPhap = $('#giaiPhap').val();

        var data = {
            maSC: maSC
        };

        $.ajax({
            url: "getData.json",
            type: 'POST',
            dataType: 'JSON',
            data: data,
            success: function (result) {
                var data = result[0];
                var dt = data.LoaiSuCo + "";
                if (tenSC === data.TenSuCo + "" && loaiSC === data.LoaiSuCo + "" && mucDo === data.MucDo + "" && diaDiem === data.DiaDiem + "" && ngay === data.Ngay + "" && gio === data.Gio + "" && tinhChat === data.TinhChat + "" && guiBC === data.GuiBC + "" && moTa === data.MoTa + "" && giaiPhap === data.GiaiPhap + "") {
                    alert("Không có thông tin thay đổi\nVui lòng thay đổi thông tin trước khi cập nhật");
                } else {
                    updateSC(stt, maSC, tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap);
                }
            }
        });
    });