<%-- 
    Document   : form1
    Created on : May 29, 2019, 9:21:26 PM
    Author     : phongtruong
--%>

<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="form1" id="form1">
    <form class="nd-form1">
        <div class="div-nd-form" >
            <div class="div-nd">

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Mã sự cố</label>
                    </div>
                    <div class="div-input">
                        <input id="maSuCo" class="input-form" readonly="true"/>
                    </div>
                </div>

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Tên sự cố</label>
                    </div>
                    <div class="div-input">
                        <select id="tenSuCo" class="input-form" required name="loaiSC">
                            <option></option>
                            <%
                                List<Map<String, Object>> listTenSuCo = (List<Map<String, Object>>) request.getAttribute("listTenSuCo");
                            %>
                            <% for (Map<String, Object> row : listTenSuCo) {%>
                            <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                            <% }%>
                        </select>
                    </div>
                </div>

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Loại sự cố</label>
                    </div>
                    <div class="div-input">
                        <select id="loaiSuCo" class="input-form" required name="loaiSC">
                            <option></option>
                            <%
                                List<Map<String, Object>> listLoaiSuCo = (List<Map<String, Object>>) request.getAttribute("listLoaiSuCo");
                            %>
                            <% for (Map<String, Object> row : listLoaiSuCo) {%>
                            <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                            <% }%>
                        </select>
                    </div>
                </div>

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Mức độ ảnh hưởng</label>
                    </div>
                    <div class="div-input">
                        <select id="mucDo" class="input-form" required name="loaiSC">
                            <option></option>
                            <%
                                List<Map<String, Object>> listMucDo = (List<Map<String, Object>>) request.getAttribute("listMucDo");
                            %>
                            <% for (Map<String, Object> row : listMucDo) {%>
                            <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                            <% }%>
                        </select>
                    </div>
                </div>
            </div>
            <div class="div-nd">

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Địa điểm xảy ra</label>
                    </div>
                    <div class="div-input">
                        <select id="diaDiem" class="input-form" required name="loaiSC">
                            <option></option>
                            <%
                                List<Map<String, Object>> listDiaDiem = (List<Map<String, Object>>) request.getAttribute("listDiaDiem");
                            %>
                            <% for (Map<String, Object> row : listDiaDiem) {%>
                            <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                            <% }%>
                        </select>

                    </div>
                </div>

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Ngày xảy ra</label>
                    </div>
                    <div class="div-input">
                        <input id="date" type="date" class="input-form"/>
                    </div>
                </div>

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Giờ xảy ra</label>
                    </div>
                    <div class="div-input">
                        <input id="time" type="time" class="input-form"/>
                    </div>
                </div>

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Tính chất</label>
                    </div>
                    <div class="div-input">
                        <select id="tinhChat" class="input-form" required name="loaiSC">
                            <option></option>
                            <%
                                List<Map<String, Object>> listTinhChat = (List<Map<String, Object>>) request.getAttribute("listTinhChat");
                            %>
                            <% for (Map<String, Object> row : listTinhChat) {%>
                            <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                            <% }%>
                        </select>
                    </div>
                </div>

            </div>
            <div class="div-nd">

                <div class="data">
                    <div class="div-label">
                        <label class="label-form">Nơi gửi báo cáo</label>
                    </div>
                    <div class="div-input">
                        <select id="guiBC" class="input-form" required name="loaiSC">
                            <option></option>
                            <%
                                List<Map<String, Object>> listGuiBC = (List<Map<String, Object>>) request.getAttribute("listGuiBC");
                            %>
                            <% for (Map<String, Object> row : listGuiBC) {%>
                            <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                            <% }%>
                        </select>
                    </div>

                </div>

                <div class="data1">
                    <div class="div-label">
                        <label class="label-form">Mô tả chi tiết sai sót, sự cố</label>
                    </div>

                    <div class="div-input">
                        <textarea id="moTa" class="input-form1"></textarea>
                    </div>

                </div>

                <div class="data1">
                    <div class="div-label">
                        <label class="label-form">Giải pháp tránh lập lại sự cố</label> 
                    </div>

                    <div class="div-input">
                        <textarea id="giaiPhap" class="input-form1"></textarea>
                    </div>

                </div>
            </div>
            <div class="div-button">
                <button id="btn-ThemSC" type="button" class="btn-Them">Thêm</button>
                <button id="btn-SuaSC" type="button" class="btn-Them">Sửa</button>
            </div>
        </div>
    </form>
</div>