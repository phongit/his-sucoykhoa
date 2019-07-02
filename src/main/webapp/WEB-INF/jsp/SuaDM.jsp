<%-- 
    Document   : SuaDM
    Created on : Jun 24, 2019, 1:47:58 PM
    Author     : phongtruong
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<form class="form-SuaDM">
    <div class="body-form">
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Loại danh mục</label> 
            </div>

            <div class="div-row-input">
                <select  class="input-ThemDM" name="loaiDM">
                    <option value="0"></option>
                    <option value="Tên sự cố">Tên sự cố</option>
                    <option value="Loại sự cố">Loại sự cố</option>
                    <option value="Mức độ ảnh hưởng">Mức độ ảnh hưởng</option>
                    <option value="Địa điểm xảy ra sự cố">Địa điểm xảy ra sự cố</option>
                    <option value="Tính chất sự cố">Tính chất sự cố</option>
                    <option value="Nơi gửi báo cáo">Nơi gửi báo cáo</option>
                </select>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Mã danh mục</label> 
            </div>

            <div class="div-row-input">
                <input  type="text" class="input-ThemDM" readonly="true" name="maDM"/>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Tên danh mục</label> 
            </div>

            <div class="div-row-input">
                <input  type="text" class="input-ThemDM" name="tenDM"/>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Ngày cập nhật danh mục</label> 
            </div>

            <div class="div-row-input">
                <input  type="date" class="input-ThemDM" name="ngayCNDM"/>
            </div>
        </div>
        <div class="div-row">
            <div class="div-row-label">
                <label class="label-ThemDM">Người cập nhật danh mục</label> 
            </div>

            <div class="div-row-input">
                 <select class="input-ThemDM" name="nguoiCNDM">
                    <option></option>
                    <% for (Map<String, Object> row : listNV) {%>
                    <option value="<%=row.get("HoTen")%>"><%=row.get("HoTen")%></option>
                    <% }%>
                 </select>
            </div>
        </div>

    </div>

    <div class="btn-form">
        
    </div>
</form>
