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

//$('#pagination').twbsPagination({
//    totalPages: 4,
//    visiblePages: 4,
//    onPageClick: function (event, page) {
//        onPageClick(event, page);
//    }
//});

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
                                        <div class="dropdown-content1">
                                            <p onclick="window.location.replace('exportPDF')">Xuất PDF</p>
                                            <p onclick="window.location.replace('exportXLS')">Xuất XLS</p>
                                            <p onclick="window.location.replace('exportRTF')">Xuất RTF</p>
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
        }
    });
}

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
        var stt = '';
        stt = $(this).closest('tr').find('td:nth-child(1)').text();
        var maSC = $(this).closest('tr').find('td:nth-child(2)').text();
        var data = {
            maSC
        };
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
                        updateSC(stt);
                    }
                });
            }
        });
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
            alert("Cập nhật thành công");
            alert(stt);
             getIDSC();
            $('#page tr:nth-child(' + stt + ') td:nth-child(3)').html(rs[0].TenSuCo);
            $('#page tr:nth-child(' + stt + ') td:nth-child(4)').html(rs[0].LoaiSuCo);
            $('#page tr:nth-child(' + stt + ') td:nth-child(5)').html(rs[0].MucDo);
            $('#page tr:nth-child(' + stt + ') td:nth-child(6)').html(rs[0].DiaDiem);
            $('#page tr:nth-child(' + stt + ') td:nth-child(7)').html(rs[0].Ngay);
            $('#page tr:nth-child(' + stt + ') td:nth-child(8)').html(rs[0].Gio );
            $('#page tr:nth-child(' + stt + ') td:nth-child(9)').html(rs[0].TinhChat );
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


