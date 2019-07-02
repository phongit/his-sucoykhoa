$(document).ready(function () {

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
        alert(data);
        if (tenDM !== "" && nguoiCN !=="") {
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

    function updateDM(stt, TenDM, NgayCN, NguoiCN) {
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
                            $('#table-TenSC tr:nth-child(' + stt + ') td:nth-child(3)').html(tenDM);
                            $('#table-TenSC tr:nth-child(' + stt + ') td:nth-child(4)').html(ngayCN);
                            $('#table-TenSC tr:nth-child(' + stt + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "2") {
                            $('#table-LoaiSC tr:nth-child(' + stt + ') td:nth-child(3)').html(tenDM);
                            $('#table-LoaiSC tr:nth-child(' + stt + ') td:nth-child(4)').html(ngayCN);
                            $('#table-LoaiSC tr:nth-child(' + stt + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "3") {
                            $('#table-MucDo tr:nth-child(' + stt + ') td:nth-child(3)').html(tenDM);
                            $('#table-MucDo tr:nth-child(' + stt + ') td:nth-child(4)').html(ngayCN);
                            $('#table-MucDo tr:nth-child(' + stt + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "4") {
                            $('#table-DiaDiem tr:nth-child(' + stt + ') td:nth-child(3)').html(tenDM);
                            $('#table-DiaDiem tr:nth-child(' + stt + ') td:nth-child(4)').html(ngayCN);
                            $('#table-DiaDiem tr:nth-child(' + stt + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "5") {
                            $('#table-TinhChat tr:nth-child(' + stt + ') td:nth-child(3)').html(tenDM);
                            $('#table-TinhChat tr:nth-child(' + stt + ') td:nth-child(4)').html(ngayCN);
                            $('#table-TinhChat tr:nth-child(' + stt + ') td:nth-child(5)').html(nguoiCN);
                        } else if (loaiDM === "6") {
                            $('#table-GuiBC tr:nth-child(' + stt + ') td:nth-child(3)').html(tenDM);
                            $('#table-GuiBC tr:nth-child(' + stt + ') td:nth-child(4)').html(ngayCN);
                            $('#table-GuiBC tr:nth-child(' + stt + ') td:nth-child(5)').html(nguoiCN);
                        }
//                        stt = null;
                    }
                });
            } else {
                alert("Không có thông tin nào được thay đổi\n\Vui lòng thay đổi các giá trị trước khi cập nhật");
            }

        });
    }

    function editDM(tenDM) {
        $('#' + tenDM + ' tr td a').click(function () {
            document.getElementById("btn-ThemDM").disabled = true;
            document.getElementById("btn-SuaDM").disabled = false;
            var stt = null;
            stt = $(this).closest('#tr-TenSC').find('td:nth-child(1)').text();
            var MaDM = $(this).closest('#tr-TenSC').find('td:nth-child(2)').text();
            var TenDM = $(this).closest('#tr-TenSC').find('td:nth-child(3)').text();
            var NgayCN = $(this).closest('#tr-TenSC').find('td:nth-child(4)').text();
            var NguoiCN = $(this).closest('#tr-TenSC').find('td:nth-child(5)').text();
            var ID = document.getElementById('MaDM').value = MaDM;
            var TEN = document.getElementById('TenDM').value = TenDM;
            var NgayCN = document.getElementById('NgayCN').value = NgayCN;
            $("#NguoiCN").val(NguoiCN);
            updateDM(stt, TenDM, NgayCN, NguoiCN);
        });
    }

    function delDM(tenTB) {
        $('#' + tenTB + ' tr td i').click(function (e) {
            getID();
            $('#TenDM').val("");
            $('#NguoiCN').val("");
            var mes = confirm("Bạn có chắc muốn xóa");
            if (mes === true) {
                var MaDM = $(this).closest('#tr-TenSC').find('td:nth-child(2)').text();
                var ID = document.getElementById('MaDM').value = MaDM;
                var stt = $(this).closest('#tr-TenSC').find('td:nth-child(1)').text();
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
                    success: function (result) {
                        alert("Xóa thành công");
                        $('#' + tenTB + ' tr:nth-child(' + stt + ')').remove();
                    }
                });
            }
        });
    }

    $('#LoaiDM').change(function () {
        getID();
    });

    $('#btn-ThemDM').click(function () {
        addDM();
    });

    $('#table-TenSC tr td a').click(function () {
        editDM('table-TenSC');
    });

    $('#table-LoaiSC tr td a').click(function () {
        editDM('table-LoaiSC');
    });

    $('#table-MucDo tr td a').click(function () {
        editDM('table-MucDo');
    });

    $('#table-DiaDiem tr td a').click(function () {
        editDM('table-DiaDiem');
    });

    $('#table-TinhChat tr td a').click(function () {
        editDM('table-TinhChat');
    });

    $('#table-GuiBC tr td a').click(function () {
        editDM('table-GuiBC');
    });

    $('#table-TenSC tr td i').click(function () {
        delDM('table-TenSC');
    });

    $('#table-LoaiSC tr td i').click(function () {
        delDM('table-LoaiSC');
    });

    $('#table-MucDo tr td i').click(function () {
        delDM('table-MucDo');
    });

    $('#table-DiaDiem tr td i').click(function () {
        delDM('table-DiaDiem');
    });

    $('#table-TinhChat tr td i').click(function () {
        delDM('table-TinhChat');
    });

    $('#table-GuiBC tr td i').click(function () {
        delDM('table-GuiBC');
    });

    $('#tableTenSC').click(function () {
        $("#LoaiDM").val("1").change();
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
        getID();
    });

    $('#tableLoaiSC').click(function () {
        document.getElementById("btn-ThemDM").disabled = false;
        document.getElementById("btn-SuaDM").disabled = true;
        $("#LoaiDM").val("2").change();
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
});