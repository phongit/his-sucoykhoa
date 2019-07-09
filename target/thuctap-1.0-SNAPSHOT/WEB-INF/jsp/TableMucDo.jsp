<%-- 
    Document   : TableMucDo
    Created on : Jun 23, 2019, 6:32:08 PM
    Author     : phongtruong
--%>

<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="table-MucDo">
    <div class="tb-div" style="background-color: cadetblue; text-align: center; color: white;">
        <table>
            <tr>
                <th class="th-ma" style="text-align: center">Mã danh mục</th>
                <th class="th-ten" style="text-align: center">Tên danh mục</th>
                <th class="th-ngay" style="text-align: center">Ngày cập nhật</th>
                <th class="th-nguoi-cn" style="text-align: center">Người cập nhật</th>
            </tr>
        </table>
    </div>
    <div class="tb-div-scroll">
        <table  id="table-MucDo">
            
        </table>
    </div>
    <div class="pagination">
        <div class="timKiem">
            <input placeholder="Tìm kiếm"/>
        </div>
        <div class="sohang">
            <label>Sắp xếp: </label>
            <select>
                <option value="">Không</option>
                <option value="">Mức độ</option>
                <option value="">Địa điểm</option>
                <option value="">Thời gian</option>
                <option value="">Tính chất</option>
                <option value="">Loại sự cố</option>
            </select>
        </div>
        <div class="sohang">
            <label>Số hàng: </label>
            <select id="limit-pageMucDo" class="pagination-sm">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
            </select>
        </div>
        <div class="totalPages">
            <ul id="paginationMucDo" class="pagination-sm"></ul>
        </div>
    </div>
</div>