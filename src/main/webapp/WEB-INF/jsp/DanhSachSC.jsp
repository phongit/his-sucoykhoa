<%-- 
    Document   : DanhSachSC
    Created on : Jun 18, 2019, 2:58:38 PM
    Author     : phongtruong
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="theader">
    <table width="100%" class="table">
        <thead class="thead-dark">
            <tr style="text-align: center">
                <th width="5%">STT</th>
                <th width="8%">Tên sự cố</th>
                <th width="8%">Loại sự cố</th>
                <th width="7.1%">Mức độ</th>
                <th width="8.1%">Địa điểm</th>
                <th width="7%">Ngày</th>
                <th width="5%">Giờ</th>
                <th width="8%">Tính chất</th>
                <th width="8%">Nơi gửi</th>
                <th width="13%"scope="col">Mô tả</th>
                <th style="text-align: left; padding-left: 60px" width="23%">Giải pháp</th>
            </tr>
        </thead>
    </table>
</div>
<div class="tbody">
    <table id="page">
        
    </table>
</div>
<div class="pagination">
    <div class="timKiem">
<!--        <input placeholder="Tìm kiếm"/>-->
    </div>
    <div class="sohang">
<!--        <label>Sắp xếp: </label>
        <select>
            <option value="">Không</option>
            <option value="">Mức độ</option>
            <option value="">Địa điểm</option>
            <option value="">Thời gian</option>
            <option value="">Tính chất</option>
            <option value="">Loại sự cố</option>
        </select>-->
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