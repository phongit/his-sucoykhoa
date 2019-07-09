<%-- 
    Document   : ThemDM
    Created on : Jun 18, 2019, 8:16:15 PM
    Author     : phongtruong
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.Calendar"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<form class="form-ThemDM">
    <div class="body-form">
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Loại danh mục</label> 
            </div>
            <div class="div-row-input">
                <select id="LoaiDM" class="input-ThemDM" name="loaiDM">
                    <option value="0"></option>
                    <option value="1">Tên sự cố</option>
                    <option value="2">Loại sự cố</option>
                    <option value="3">Mức độ ảnh hưởng</option>
                    <option value="4">Địa điểm xảy ra sự cố</option>
                    <option value="5">Tính chất sự cố</option>
                    <option value="6">Nơi gửi báo cáo</option>
                </select>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Mã danh mục</label> 
            </div>

            <div class="div-row-input">
                <input id="MaDM" type="text" class="input-ThemDM" readonly="true" name="maDM"/>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Tên danh mục</label> 
            </div>

            <div class="div-row-input">
                <input id="TenDM" type="text" class="input-ThemDM" name="tenDM"/>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Ngày cập nhật danh mục</label> 
            </div>

            <div class="div-row-input">
                <input id="NgayCN" type="date" class="input-ThemDM" name="ngayCNDM"/>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Người cập nhật danh mục</label> 
            </div>

            <div class="div-row-input">
                 <select id="NguoiCN" class="input-ThemDM" name="nguoiCNDM">
                    <option></option>
                    <%
                        List<Map<String, Object>> listNV = (List<Map<String, Object>>) request.getAttribute("listNV");
                    %>
                    <% for (Map<String, Object> row : listNV) {%>
                    <option value="<%=row.get("HoTen")%>"><%=row.get("HoTen")%></option>
                    <% }%>
                 </select>
            </div>
        </div>

    </div>

    <div class="btn-form">
        <button id="btn-ThemDM" type="button" class="btn-Them">Thêm</button>
        <button id="btn-SuaDM" type="button" class="btn-Them" disabled="true">Sửa</button>
    </div>
</form>