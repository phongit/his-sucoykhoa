<%-- 
    Document   : TableLoaiSC
    Created on : Jun 23, 2019, 5:32:33 PM
    Author     : phongtruong
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="table-LoaiSC">
    <div class="tb-div">
        <table>
            <tr style="background-color: cadetblue; text-align: center; color: white;">
                <th class="th-ma" style="text-align: center">Mã danh mục</th>
                <th class="th-ten" style="text-align: center">Tên danh mục</th>
                <th class="th-ngay" style="text-align: center">Ngày cập nhật</th>
                <th class="th-nguoi-cn" style="text-align: center">Người cập nhật</th>
            </tr>
        </table>
    </div>
    <div class="tb-div-scroll">
        <table id="table-LoaiSC">
            
        </table>
    </div>
    <div class="pagination">
        <div class="timKiem">
            
        </div>
        <div class="sohang">
            
        </div>
        <div class="sohang">
            
        </div>
        <div class="totalPages">
            <ul id="paginationLoaiDM" class="pagination-sm"></ul>
        </div>
    </div>
</div>