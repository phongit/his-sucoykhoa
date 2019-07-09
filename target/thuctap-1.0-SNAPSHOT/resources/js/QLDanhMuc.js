$(document).ready(function () {
    $("#LoaiDM").val("1").change();
    getID();
    changeLimit("");
    changeLimit("LoaiDM");
    changeLimit("MucDo");
    changeLimit("DiaDiem");
    changeLimit("TinhChat");
    changeLimit("GuiBC");
});
function getID() {
    var loaiDM = $("#LoaiDM").val();
    data = {
        loaiDM
    };
    $.ajax({
        url: "getID.json",
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function (result) {
            var data = result[0];
            $("#MaDM").val(data.MaDM + 1);
            $('#NgayCN').val(data.NgayHT);
        }
    });
}

function addDM() {
    var loaiDM = $('#LoaiDM').val();
    var maDM = $('#MaDM').val();
    var tenDM = $('#TenDM').val();
    var ngayCN = $('#NgayCN').val();
    var nguoiCN = $('#NguoiCN').val();
    var data = {
        loaiDM: loaiDM,
        maDM: maDM,
        tenDM: tenDM,
        ngayCN: ngayCN,
        nguoiCN: nguoiCN
    };
    if (tenDM !== "" && nguoiCN !== "") {
        $.ajax({
            url: "addDM.json",
            type: 'post',
            dataType: 'json',
            data: data,
            success: function (result) {
                alert("Thành Công");
                var newRow = `<tr id="tr-TenSC">
                                    <td class="tdma">` + maDM + `</td>
                                    <td class="tdten">` + tenDM + `</td>
                                    <td class="td-ngay">` + ngayCN + `</td>
                                    <td class="td-nguoi-cn">` + nguoiCN + `</td>
                                    <td class="col-id">
                                        <a class="fa fa-edit icon" style="color: darkgoldenrod; font-size: 25px;"></a>
                                    </td>
                                    <td class="col-id" class='td-del'>
                                        <i class="fa fa-trash-o icon" style="color: red; font-size: 25px;"></i>
                                    </td>
                                </tr>`;
                if (loaiDM === "1") {
                    $('#table-TenSC').append(newRow);
                } else if (loaiDM === "2") {
                    $('#table-LoaiSC').append(newRow);
                } else if (loaiDM === "3") {
                    $('#table-MucDo').append(newRow);
                } else if (loaiDM === "4") {
                    $('#table-DiaDiem').append(newRow);
                } else if (loaiDM === "5") {
                    $('#table-TinhChat').append(newRow);
                } else if (loaiDM === "6") {
                    $('#table-GuiBC').append(newRow);
                }
            }
        });
    } else {
        alert("Không có dữ liệu để thêm.\n\Vui lòng điền đầy đủ thông tin");
    }
}

function updateDM(id, MaDM, TenDM, NgayCN, NguoiCN) {
    $('#btn-SuaDM').click(function () {
        var loaiDM = $('#LoaiDM').val();
        var maDM = $('#MaDM').val();
        var tenDM = $('#TenDM').val();
        var ngayCN = $('#NgayCN').val();
        var nguoiCN = $('#NguoiCN').val();
        if (TenDM !== tenDM || NgayCN !== ngayCN || NguoiCN !== nguoiCN) {
            var data = {
                loaiDM: loaiDM,
                maDM: maDM,
                tenDM: tenDM,
                ngayCN: ngayCN,
                nguoiCN: nguoiCN
            };
            if (MaDM === maDM) {
                $.ajax({
                    url: "updateDM.json",
                    type: 'post',
                    dataType: 'json',
                    data: data,
                    success: function (result) {
                        document.getElementById("btn-ThemDM").disabled = false;
                        document.getElementById("btn-SuaDM").disabled = true;
                        getID();
                        $('#TenDM').val("");
                        $('#NguoiCN').val("");
                        if (loaiDM === "1") {
                            $('#table-TenSC tr:nth-child(' + id + ') td:nth-child(3)').html(tenDM);
                            $('#table-TenSC tr:nth-child(' + id + ') td:nth-child(4)').html(ngayCN);
                            $('#table-TenSC tr:nth-child(' + id + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "2") {
                            $('#table-LoaiSC tr:nth-child(' + id + ') td:nth-child(3)').html(tenDM);
                            $('#table-LoaiSC tr:nth-child(' + id + ') td:nth-child(4)').html(ngayCN);
                            $('#table-LoaiSC tr:nth-child(' + id + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "3") {
                            $('#table-MucDo tr:nth-child(' + id + ') td:nth-child(3)').html(tenDM);
                            $('#table-MucDo tr:nth-child(' + id + ') td:nth-child(4)').html(ngayCN);
                            $('#table-MucDo tr:nth-child(' + id + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "4") {
                            $('#table-DiaDiem tr:nth-child(' + id + ') td:nth-child(3)').html(tenDM);
                            $('#table-DiaDiem tr:nth-child(' + id + ') td:nth-child(4)').html(ngayCN);
                            $('#table-DiaDiem tr:nth-child(' + id + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "5") {
                            $('#table-TinhChat tr:nth-child(' + id + ') td:nth-child(3)').html(tenDM);
                            $('#table-TinhChat tr:nth-child(' + id + ') td:nth-child(4)').html(ngayCN);
                            $('#table-TinhChat tr:nth-child(' + id + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "6") {
                            $('#table-GuiBC tr:nth-child(' + id + ') td:nth-child(3)').html(tenDM);
                            $('#table-GuiBC tr:nth-child(' + id + ') td:nth-child(4)').html(ngayCN);
                            $('#table-GuiBC tr:nth-child(' + id + ') td:nth-child(5)').html(nguoiCN);
                        }
                        id = null;
                    }
                });

            }
        } else {
            alert("Không có thông tin nào được thay đổi\n\Vui lòng thay đổi các giá trị trước khi cập nhật");
        }

    });
}

function editDM(tenDM) {
    $('#' + tenDM + ' tr td a').click(function () {
        document.getElementById("btn-ThemDM").disabled = true;
        document.getElementById("btn-SuaDM").disabled = false;
        var stt = $(this).closest('#tr-TenSC').find('td:nth-child(1)').text();
        var MaDM = $(this).closest('#tr-TenSC').find('td:nth-child(2)').text();
        var loaiDM = $('#LoaiDM').val();
        $.ajax({
            url: 'getDataDM.json',
            type: 'POST',
            dataType: 'json',
            data: {
                loaiDM: loaiDM,
                maDM: MaDM
            },
            success: function (rs) {
                var maDM = rs[0].MaDM + "";
                $('#MaDM').val(maDM);
                $('#TenDM').val(rs[0].TenDM);
                $('#NgayCN').val(rs[0].NgayCN);
                $('#NguoiCN').val(rs[0].NguoiCN);
                var id = stt;
                var tenDM = $('#TenDM').val();
                var ngayCN = $('#NgayCN').val();
                var nguoiCN = $('#NguoiCN').val();
                updateDM(id, MaDM, tenDM, ngayCN, nguoiCN);
            }
        });
    });
}

$('#LoaiDM').change(function () {
    getID();
});
$('#btn-ThemDM').click(function () {
    addDM();
});
$('#tableTenSC').click(function () {
    $("#LoaiDM").val("1").change();
    getTotalPagesDM(10, 1, "");
    getID();
    document.getElementById("btn-ThemDM").disabled = false;
    document.getElementById("btn-SuaDM").disabled = true;
    $('.table-TenSC').css('display', 'block');
    $('.table-LoaiSC').css('display', 'none');
    $('.table-MucDo').css('display', 'none');
    $('.table-DiaDiem').css('display', 'none');
    $('.table-TinhChat').css('display', 'none');
    $('.table-GuiBC').css('display', 'none');
    $('.show-tableTenSC').css('background-color', 'dodgerblue');
    $('.show-tableLoaiSC').css('background-color', 'teal');
    $('.show-tableMucDo').css('background-color', 'teal');
    $('.show-tableDiaDiem').css('background-color', 'teal');
    $('.show-tableTinhChat').css('background-color', 'teal');
    $('.show-tableGuiBC').css('background-color', 'teal');
});

$('#tableLoaiSC').click(function () {
    document.getElementById("btn-ThemDM").disabled = false;
    document.getElementById("btn-SuaDM").disabled = true;
    $("#LoaiDM").val("2").change();
    getTotalPagesDM(10, 2, "LoaiDM");
    $('.table-TenSC').css('display', 'none');
    $('.table-LoaiSC').css('display', 'block');
    $('.table-MucDo').css('display', 'none');
    $('.table-DiaDiem').css('display', 'none');
    $('.table-TinhChat').css('display', 'none');
    $('.table-GuiBC').css('display', 'none');
    $('.show-tableTenSC').css('background-color', 'teal');
    $('.show-tableLoaiSC').css('background-color', 'dodgerblue');
    $('.show-tableMucDo').css('background-color', 'teal');
    $('.show-tableDiaDiem').css('background-color', 'teal');
    $('.show-tableTinhChat').css('background-color', 'teal');
    $('.show-tableGuiBC').css('background-color', 'teal');
    getID();
});

$('#tableMucDo').click(function () {
    document.getElementById("btn-ThemDM").disabled = false;
    document.getElementById("btn-SuaDM").disabled = true;
    $("#LoaiDM").val("3").change();
    getTotalPagesDM(10, 3, "MucDo");
    $('.table-TenSC').css('display', 'none');
    $('.table-LoaiSC').css('display', 'none');
    $('.table-MucDo').css('display', 'block');
    $('.table-DiaDiem').css('display', 'none');
    $('.table-TinhChat').css('display', 'none');
    $('.table-GuiBC').css('display', 'none');
    $('.show-tableTenSC').css('background-color', 'teal');
    $('.show-tableLoaiSC').css('background-color', 'teal');
    $('.show-tableMucDo').css('background-color', 'dodgerblue');
    $('.show-tableDiaDiem').css('background-color', 'teal');
    $('.show-tableTinhChat').css('background-color', 'teal');
    $('.show-tableGuiBC').css('background-color', 'teal');
    getID();
});

$('#tableDiaDiem').click(function () {
    document.getElementById("btn-ThemDM").disabled = false;
    document.getElementById("btn-SuaDM").disabled = true;
    $("#LoaiDM").val("4").change();
    getTotalPagesDM(10, 4, "DiaDiem");
    $('.table-TenSC').css('display', 'none');
    $('.table-LoaiSC').css('display', 'none');
    $('.table-MucDo').css('display', 'none');
    $('.table-DiaDiem').css('display', 'block');
    $('.table-TinhChat').css('display', 'none');
    $('.table-GuiBC').css('display', 'none');
    $('.show-tableTenSC').css('background-color', 'teal');
    $('.show-tableLoaiSC').css('background-color', 'teal');
    $('.show-tableMucDo').css('background-color', 'teal');
    $('.show-tableDiaDiem').css('background-color', 'dodgerblue');
    $('.show-tableTinhChat').css('background-color', 'teal');
    $('.show-tableGuiBC').css('background-color', 'teal');
    getID();
});

$('#tableTinhChat').click(function () {
    document.getElementById("btn-ThemDM").disabled = false;
    document.getElementById("btn-SuaDM").disabled = true;
    $("#LoaiDM").val("5").change();
    getTotalPagesDM(10, 5, "TinhChat");
    $('.table-TenSC').css('display', 'none');
    $('.table-LoaiSC').css('display', 'none');
    $('.table-MucDo').css('display', 'none');
    $('.table-DiaDiem').css('display', 'none');
    $('.table-TinhChat').css('display', 'block');
    $('.table-GuiBC').css('display', 'none');
    $('.show-tableTenSC').css('background-color', 'teal');
    $('.show-tableLoaiSC').css('background-color', 'teal');
    $('.show-tableMucDo').css('background-color', 'teal');
    $('.show-tableDiaDiem').css('background-color', 'teal');
    $('.show-tableTinhChat').css('background-color', 'dodgerblue');
    $('.show-tableGuiBC').css('background-color', 'teal');
    getID();
});

$('#tableGuiBC').click(function () {
    document.getElementById("btn-ThemDM").disabled = false;
    document.getElementById("btn-SuaDM").disabled = true;
    $("#LoaiDM").val("6").change();
    getTotalPagesDM(10, 6, "GuiBC");
    $('.table-TenSC').css('display', 'none');
    $('.table-LoaiSC').css('display', 'none');
    $('.table-MucDo').css('display', 'none');
    $('.table-DiaDiem').css('display', 'none');
    $('.table-TinhChat').css('display', 'none');
    $('.table-GuiBC').css('display', 'block');
    $('.show-tableTenSC').css('background-color', 'teal');
    $('.show-tableLoaiSC').css('background-color', 'teal');
    $('.show-tableMucDo').css('background-color', 'teal');
    $('.show-tableDiaDiem').css('background-color', 'teal');
    $('.show-tableTinhChat').css('background-color', 'teal');
    $('.show-tableGuiBC').css('background-color', 'dodgerblue');
    getID();
});

function getTotalPagesDM(limit, loaiDM, tenTB) {
    var data = {
        limit,
        loaiDM
    };
    $.ajax({
        url: 'getTotalPagesDM.json',
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function (rs) {
            if (rs <= 10) {
                $('#pagination' + tenTB).twbsPagination('destroy');
                $('#pagination' + tenTB).twbsPagination({
                    totalPages: rs,
                    visiblePages: rs,
                    onPageClick: function (event, page) {
                        onPageClick(event, page);
                    }
                });
            } else {
                $('#pagination' + tenTB).twbsPagination('destroy');
                $('#pagination' + tenTB).twbsPagination({
                    totalPages: rs,
                    visiblePages: 10,
                    onPageClick: function (event, page) {
                        onPageClick(event, page);
                    }
                });
            }
        }
    });
}
function  changeLimit(tenTB) {
    $('#limit-page'+tenTB).on('change', function () {
        var loaiDM = $('#LoaiDM').val();
        var limit = 1;
        limit = $('#limit-page'+tenTB).val();
        getTotalPagesDM(limit, loaiDM, tenTB);
    });
}
//$('#limit-page').on('change', function () {
//    var loaiDM = $('#LoaiDM').val() + "";
//    var limit = 1;
//    limit = $('#limit-page').val();
//    if (loaiDM === "1") {
//        getTotalPagesDM(limit, loaiDM, "pagination");
//    } else if (loaiDM === "2") {
//        getTotalPagesDM(limit, loaiDM, "paginationLoaiDM");
//    } else if (loaiDM === "3") {
//        getTotalPagesDM(limit, loaiDM, "paginationMucDo");
//    } else if (loaiDM === "4") {
//        getTotalPagesDM(limit, loaiDM, "paginationDiaDiem");
//    } else if (loaiDM === "5") {
//        getTotalPagesDM(limit, loaiDM, "paginationTinhChat");
//    } else if (loaiDM === "6") {
//        getTotalPagesDM(limit, loaiDM, "paginationGuiBC");
//    }
//});

$('#pagination').twbsPagination({
    totalPages: 20,
    visiblePages: 10,
    onPageClick: function (event, page) {
        onPageClick(event, page);
    }
});

function  onPageClick(event, page) {
    var loaiDM = $('#LoaiDM').val();
    var limit = $('#limit-page').val();
    $.ajax({
        url: 'PageDM.json',
        type: 'POST',
        dataType: 'json',
        data: {
            loaiDM: loaiDM,
            page: page,
            limit: limit
        },
        success: function (rs) {
            appendTR('table-TenSC', rs);
            appendTR('table-LoaiSC', rs);
            appendTR('table-MucDo', rs);
            appendTR('table-DiaDiem', rs);
            appendTR('table-TinhChat', rs);
            appendTR('table-GuiBC', rs);

            //Xóa DM
            deleteDM('table-TenSC');
            deleteDM('table-GuiBC');
            deleteDM('table-TinhChat');
            deleteDM('table-DiaDiem');
            deleteDM('table-MucDo');
            deleteDM('table-LoaiSC');
            //Cập nhật DM
            editDM('table-TenSC');
            editDM('table-LoaiSC');
            editDM('table-MucDo');
            editDM('table-DiaDiem');
            editDM('table-TinhChat');
            editDM('table-GuiBC');
        }
    });
}

function appendTR(tenTB, rs) {
    $('#' + tenTB).empty();
    var row = ``;
    for (var i = 0; i < rs.length; i++) {
        row += `<tr id="tr-TenSC">
                    <td class="stt">` + (i + 1) + `</td>
                    <td class="tdma">` + rs[i].MaDM + `</td>
                    <td class="tdten">` + rs[i].TenDM + `</td>
                    <td class="td-ngay">` + rs[i].NgayCN + `</td>
                    <td class="td-nguoi-cn">` + rs[i].NguoiCN + `</td>
                    <td class="col-id">
                        <a class="fa fa-edit icon" style="color: darkgoldenrod; font-size: 25px;"></a>
                    </td>
                    <td class="col-id" class='td-del'>
                        <i class="fa fa-trash-o icon" style="color: red; font-size: 25px;"></i>
                    </td>
                </tr>`;
    }
    $('#' + tenTB).append(row);
}

function deleteDM(tenTB) {
    $('#' + tenTB + ' tr td i').click(function (e) {
        getID();
        $('#TenDM').val("");
        $('#NguoiCN').val("");
        var mes = confirm("Bạn có chắc muốn xóa");
        if (mes === true) {
            var MaDM = $(this).closest('#tr-TenSC').find('td:nth-child(2)').text();
            var ID = document.getElementById('MaDM').value = MaDM;
            var del = $(this).closest('#tr-TenSC');
            var loaiDM = $('#LoaiDM').val();
            var data = {
                ID,
                loaiDM
            };
            $.ajax({
                url: "deleteDM.json",
                type: 'post',
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
    });
}