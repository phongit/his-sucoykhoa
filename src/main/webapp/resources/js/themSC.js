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
});


