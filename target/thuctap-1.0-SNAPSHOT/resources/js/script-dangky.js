document.getElementById('Insert').onclick = () => {
    var hoten = document.getElementsByName()('uname').value;
    var ngaysinh = document.getElementsByName('date').value;
    var gioitinh = document.getElementsByName(('gioitinh'))
    var cmnd = document.getElementsByName('uid').value;
    var idBH = document.getElementsByName('idbaohiem').value;
    var dateBH = document.getElementsByName(('datebaohiem'))
    var address = document.getElementsByName('address').value;
    var lienlac = document.getElementsByName('sdt').value;
    AddThe(hoten, ngaysinh, gioitinh, cmnd, idBH, dateBH, address, lienlac);
    alert("Thêm thành công");
}