$('#limit-page').on('change', function () {
    var limit = 1;
    limit = $('#limit-page').val();
    var data = {
        limit
    };
    $.ajax({
        url: 'getTotalPages.json',
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function (rs) {
            if (rs <= 10) {
                $('#pagination').twbsPagination('destroy');
                $('#pagination').twbsPagination({
                    totalPages: rs,
                    visiblePages: rs,
                    onPageClick: function (event, page) {
                        onPageClick(event, page);
                    }
                });
            } else {
                $('#pagination').twbsPagination('destroy');
                $('#pagination').twbsPagination({
                    totalPages: rs,
                    visiblePages: 10,
                    onPageClick: function (event, page) {
                        onPageClick(event, page);
                    }
                });
            }
        }
    });
});

$('#pagination').twbsPagination({
    totalPages: 20,
    visiblePages: 10,
    onPageClick: function (event, page) {
        onPageClick(event, page);
    }
});

function  onPageClick(event, page) {
    var limit = $('#limit-page').val();
    $.ajax({
        url: 'Page.json',
        type: 'POST',
        dataType: 'json',
        data: {
            page: page,
            limit: limit
        },
        success: function (rs) {
            $('#page').empty();
            var row = ``;
            for (var i = 0; i < rs.length; i++) {
                row += `<tr>
                                <td class="stt" width="0%">` + (i + 1) + `</td>
                                <td width="5%">` + rs[i].MaSuCo + `</td>
                                <td class="tdTenSC" width="8%">` + rs[i].TenSuCo + `</td>
                                <td class="tdTenSC" width="8%">` + rs[i].LoaiSuCo + `</td>
                                <td width="7%">` + rs[i].MucDo + `</td>
                                <td class="tdTenSC" width="8%">` + rs[i].DiaDiem + `</td>
                                <td width="7%">` + rs[i].Ngay + `</td>
                                <td width="5%">` + rs[i].Gio + `</td>
                                <td width="8%">` + rs[i].TinhChat + `</td>
                                <td class="tdTenSC" width="8%">` + rs[i].GuiBC + `</td>
                                <td class="tdMoTa" width="13%">` + rs[i].MoTa + `</td>
                                <td class="tdGiaiPhap" width="14%">` + rs[i].GiaiPhap + `</td>
                                <td width="3%">
                                    <div class="dropdown">
                                        <p class="fa fa-print icon2" style="color: black; font-size: 20px"></p>
                                        <div id="dropdown-export` + (i + 1) + `" class="dropdown-content1">
                                            <p id = "exportPDF` + rs[i].MaSuCo + `">Xuất PDF</p>
                                            <p id = "exportXLS` + rs[i].MaSuCo + `">Xuất XLS</p>
                                            <p id = "exportRTF` + rs[i].MaSuCo + `">Xuất RTF</p>
                                        </div>
                                    </div>
                                </td>
                                <td width="3%">
                                    <a id="edit` + (i + 1) + `" class="fa fa-edit icon1" style="color: darkorange; font-size: 20px"></a>
                                </td> 
                                <td width="3%">
                                    <i class="fa fa-trash icon1" style="color: red; font-size: 20px"></i>
                                </td> 
                            </tr>`;
            }
            $('#page').append(row);
            capNhat();
            xoaSuCo();
            exportSuCo();
        }
    });
}

$(document).ready(function () {
    getIDSC();
});


//lấy ID Ngày Giờ h
function getIDSC() {
    $.ajax({
        url: 'getIDSC.json',
        type: 'POST',
        dataType: 'json',
        success: function (rs) {
            var data = rs[0];
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

function addNewRow(maSC) {
    var data = {
        maSC
    };
    $.ajax({
        url: 'addNewRow.json',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (rs) {
            var data = rs[0];
            var newRow = `<tr>
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
                                        <p class="fa fa-print icon2" style="color: black; font-size: 20px"></p>
                                        <div class="dropdown-content1">
                                            <p id = "exportPDF` + data.MaSuCo + `">Xuất PDF</p>
                                            <p id = "exportXLS` + data.MaSuCo + `">Xuất XLS</p>
                                            <p id = "exportRTF` + data.MaSuCo + `">Xuất RTF</p>
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
            $('#page').append(newRow);
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
    if (tenSC !== "" && loaiSC !== "" && mucDo !== "" && diaDiem !== "" && tinhChat !== "" && guiBC !== "" && moTa !== "" && giaiPhap !== "") {
        var data = {
            maSC,
            tenSC,
            loaiSC,
            mucDo,
            diaDiem,
            ngay,
            gio,
            tinhChat,
            guiBC,
            moTa,
            giaiPhap
        };
        $.ajax({
            url: 'themSC.json',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function (rs) {
                if (rs === 1) {
                    alert("Thêm thành công");
                    addNewRow(maSC);
                    getIDSC();
                    $('#tenSuCo').val("");
                    $('#loaiSuCo').val("");
                    $('#mucDo').val("");
                    $('#diaDiem').val("");
                    $('#tinhChat').val("");
                    $('#guiBC').val("");
                    $('#moTa').val("");
                    $('#giaiPhap').val("");
                } else {
                    alert("Có lỗi khi thêm dữ liệu mới");
                }
            }
        });
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});


function xoaSC(maSC, del) {
    var data = {
        maSC
    };
    $.ajax({
        url: 'xoaSC.json',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (rs) {
            if (rs === 1) {
                alert("Xóa thành công");
                del.remove();
            } else {
                alert("Xóa thất bại");
            }
        }
    });
}

function exportSuCo() {
    $('#page tr td p').click(function () {
        var row = $(this).closest('tr');
        var id;
        id = $(this).closest('tr').find('td:nth-child(1)').text();
        var maSC = $(this).closest('tr').find('td:nth-child(2)').text();
        $('#dropdown-export' + id).css('display', 'block');
        $('tr').css('background-color', '#dddddd');
        row.css('background-color', '#aaaaaa');
        $('#page tr td p').dblclick(function () {
            $('#dropdown-export' + id).css('display', 'none');
        });
        $('#exportPDF' + maSC).click(function () {
            $('#dropdown-export' + id).css('display', 'none');
            $.ajax({
                url: "exportPDF",
                type: 'POST',
                dataType: 'JSON',
                data: {
                    maSC
                },
                success: function (rs) {
                    console.log(rs);
                }
            });
        });
        $('#exportXLS' + maSC).click(function () {
            $('#dropdown-export' + id).css('display', 'none');
            window.location.replace('exportXLS/' + maSC);
        });
        $('#exportRTF' + maSC).click(function () {
            $('#dropdown-export' + id).css('display', 'none');
            window.location.replace('exportRTF/' + maSC);
        });
    });
}

function xoaSuCo() {
    $('#page tr td i').click(function () {
        var maSC = $(this).closest('tr').find('td:nth-child(2)').text();
        var del = $(this).closest('tr');
        var mes = confirm("Bạn có chắc muốn xóa");
        if (mes === true) {
            xoaSC(maSC, del);
        }
    });
}

function capNhat() {
    $('#page tr td a').click(function () {
        $('#btn-ThemSC').attr({
            disabled: true
        });
        $('#btn-ThemSC').css('background-color', '#ccc');
        $('#btn-SuaSC').attr({
            disabled: false
        });
        $('#btn-SuaSC').css('background-color', '#eee');
        $('#btn-Reset').attr({
            disabled: false
        });
        $('#btn-Reset').css('background-color', '#eee');
        var stt = $(this).closest('tr').find('td:nth-child(1)').text();
        var maSC = $(this).closest('tr').find('td:nth-child(2)').text();
        var data = {
            maSC
        };

        if (stt === $(this).closest('tr').find('td:nth-child(1)').text()) {
            $.ajax({
                url: 'getDataUpdate.json',
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function (rs) {
                    var data = rs[0];
                    var ma = data.MaSuCo;
                    $('#maSuCo').val(ma);
                    var ten = data.TenSuCo + "";
                    $('#tenSuCo').val(ten);
                    var loai = data.LoaiSuCo + "";
                    $('#loaiSuCo').val(loai);
                    var mucdo = data.MucDo + "";
                    $('#mucDo').val(mucdo);
                    var diadiem = data.DiaDiem + "";
                    $('#diaDiem').val(diadiem);
                    var ngay = data.Ngay + "";
                    $('#date').val(ngay);
                    var gio = data.Gio + "";
                    $('#time').val(gio);
                    var tinhchat = data.TinhChat + "";
                    $('#tinhChat').val(tinhchat);
                    var guibc = data.GuiBC + "";
                    $('#guiBC').val(guibc);
                    var mota = data.MoTa + "";
                    $('#moTa').val(mota);
                    var giaiphap = data.GiaiPhap + "";
                    $('#giaiPhap').val(giaiphap);
                    $('#btn-SuaSC').click(function () {
                        if (ten === $('#tenSuCo').val() && loai === $('#loaiSuCo').val() && mucdo === $('#mucDo').val() && diadiem === $('#diaDiem').val() && ngay === $('#date').val() && gio === $('#time').val() && tinhchat === $('#tinhChat').val() && guibc === $('#guiBC').val() && mota === $('#moTa').val() && giaiphap === $('#giaiPhap').val()) {
                            alert("Không có thông tin thay đổi\nVui lòng thay đổi thông tin trước khi cập nhật");
                        } else {
                            if (maSC === $('#maSuCo').val()) {
                                var id = stt;
                                updateSC(id);
                            }
//                            
//                            
                        }
                    });
                }
            });
        }
    });
}

function updateSC(stt) {
    var data = {
        maSC: $('#maSuCo').val(),
        tenSC: $('#tenSuCo').val(),
        loaiSC: $('#loaiSuCo').val(),
        mucDo: $('#mucDo').val(),
        diaDiem: $('#diaDiem').val(),
        ngay: $('#date').val(),
        gio: $('#time').val(),
        tinhChat: $('#tinhChat').val(),
        guiBC: $('#guiBC').val(),
        moTa: $('#moTa').val(),
        giaiPhap: $('#giaiPhap').val()
    };
    $.ajax({
        url: 'updateSC.json',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (rs) {
            if (rs === 0) {
                alert("Cập nhật thất bại");
            } else {
                updateData($('#maSuCo').val(), stt);
            }
        }
    });

}

function updateData(maSC, stt) {
    var data = {
        maSC
    };
    $.ajax({
        url: 'updateData.json',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (rs) {
            getIDSC();
            alert("Cập nhật thành công");
            $('#page tr:nth-child(' + stt + ') td:nth-child(3)').html(rs[0].TenSuCo);
            $('#page tr:nth-child(' + stt + ') td:nth-child(4)').html(rs[0].LoaiSuCo);
            $('#page tr:nth-child(' + stt + ') td:nth-child(5)').html(rs[0].MucDo);
            $('#page tr:nth-child(' + stt + ') td:nth-child(6)').html(rs[0].DiaDiem);
            $('#page tr:nth-child(' + stt + ') td:nth-child(7)').html(rs[0].Ngay);
            $('#page tr:nth-child(' + stt + ') td:nth-child(8)').html(rs[0].Gio);
            $('#page tr:nth-child(' + stt + ') td:nth-child(9)').html(rs[0].TinhChat);
            $('#page tr:nth-child(' + stt + ') td:nth-child(10)').html(rs[0].GuiBC);
            $('#page tr:nth-child(' + stt + ') td:nth-child(11)').html(rs[0].MoTa);
            $('#page tr:nth-child(' + stt + ') td:nth-child(12)').html(rs[0].GiaiPhap);
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

$('#btn-Reset').click(function () {
    getIDSC();
    $('#tenSuCo').val("");
    $('#loaiSuCo').val("");
    $('#mucDo').val("");
    $('#diaDiem').val("");
    $('#tinhChat').val("");
    $('#guiBC').val("");
    $('#moTa').val("");
    $('#giaiPhap').val("");
    $('tr').css('background-color', '#dddddd');
    $('#btn-ThemSC').attr({
        disabled: false
    });
    $('#btn-SuaSC').attr({
        disabled: true
    });
    setReset();
});
function setReset() {
    $('#btn-Reset').attr({
        disabled: true
    });
    $('#btn-ThemSC').css('background-color', '#eee');
    $('#btn-SuaSC').css('background-color', '#ccc');
    $('#btn-Reset').css('background-color', '#ccc');
}

$('#tenSuCo').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

$('#loaiSuCo').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

$('#mucDo').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

$('#diaDiem').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

$('#tinhChat').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

$('#guiBC').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

$('#moTa').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

$('#giaiPhap').on('change', function () {
    $('#btn-Reset').attr({
        disabled: false
    });
    $('#btn-Reset').css('background-color', '#eee');
});

