<%-- 
Document   : TableTenSC
Created on : Jun 23, 2019, 5:03:14 PM
Author     : phongtruong
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="table-TenSC">
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
        <table id="table-TenSC">
            
        </table>
    </div>
    <div class="pagination">
        <div class="timKiem">
        </div>
        <div class="sohang">
            
        </div>
        <div class="sohang">
            <label>Số hàng: </label>
            <select id="limit-page" class="pagination-sm">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
            </select>
        </div>
        <div class="totalPages">
            <ul id="pagination" class="pagination-sm"></ul>
        </div>
    </div>
</div>
