<%-- 
    Document   : DanhSachDM
    Created on : Jun 19, 2019, 7:52:52 AM
    Author     : phongtruong
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="div-tab">
    <div class="show-tableTenSC">
        <p id="tableTenSC" class="ten-DM">Danh mục Tên sự cố</p>
    </div>
    <div class="show-tableLoaiSC">
        <p id="tableLoaiSC" class="ten-DM">Danh mục Loại sự cố</p>
    </div>
    <div class="show-tableMucDo">
        <p id="tableMucDo" class="ten-DM">Danh mục Mức độ</p>
    </div>
    <div class="show-tableDiaDiem">
        <p id="tableDiaDiem" class="ten-DM">Danh mục Địa điểm</p>
    </div>
    <div class="show-tableTinhChat">
        <p id="tableTinhChat" class="ten-DM">Danh mục Tính chất</p>
    </div>
    <div class="show-tableGuiBC">
        <p id="tableGuiBC" class="ten-DM">Danh mục Nơi gửi báo cáo</p>
    </div>
</div>
<div class="div-bangDM">
    <%@include file="../jsp/TableTenSC.jsp" %>
    <%@include file="../jsp/TableLoaiSC.jsp" %>
    <%@include file="../jsp/TableMucDo.jsp" %>
    <%@include file="../jsp/TableDiaDiem.jsp" %>
    <%@include file="../jsp/TableTinhChat.jsp" %>
    <%@include file="../jsp/TableGuiBC.jsp" %>
</div>

