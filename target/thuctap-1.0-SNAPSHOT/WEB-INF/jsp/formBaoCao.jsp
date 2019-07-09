<%-- 
    Document   : formBaoCao
    Created on : Jul 7, 2019, 3:47:10 PM
    Author     : phongtruong
--%>

<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="form1" id="form1">
    <form class="nd-form1">
        <div class="div-nd-form" >
            <div class="optionTK">
                <div class="div-nd1">
                    <div class="div-label1">
                        <label class="label-form">Từ ngày</label>
                    </div>
                    <div class="div-input1">
                        <input id="ngayBD" type="date" class="input-form"/>
                    </div>
                </div>
                <div class="div-nd1">
                    <div class="div-label1">
                        <label class="label-form">Đến ngày</label>
                    </div>
                    <div class="div-input1">
                        <input id="ngayKT" type="date" class="input-form" disabled="true"/>
                    </div>
                </div>
                <div class="showOption">
                    <div class="div-nd1">
                        <label><input id="GuiTatCa" type="radio" name="optradio" checked > Gửi tất cả</label>
                    </div>
                    <div class="div-nd1">
                        <label><input id="GuiChiTiet" type="radio" name="optradio"> Gửi chi tiết</label>
                    </div>
                </div>
                <div class="optionThem">
                    <div class="div-nd1">
                        <div class="danhmuc">
                            <div class="div-label1">
                                <label class="checkbox-inline"><input id="cbtenSC" type="checkbox" value="Tên sự cố"> Tên sự cố</label>
                            </div>
                            <div class="div-input1">
                                <%
                                    List<Map<String, Object>> listTenSuCo = (List<Map<String, Object>>) request.getAttribute("listTenSuCo");
                                %>
                                <select id="iptenSC" type="text" class="input-form"  disabled="true">
                                    <option></option>
                                    <% for (Map<String, Object> row : listTenSuCo) {%>
                                    <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                                    <% }%>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="div-nd1">
                        <div class="danhmuc">
                            <div class="div-label1">
                                <label class="checkbox-inline"><input id="cbtinhChat" type="checkbox" value=""> Tính chất</label>
                            </div>
                            <div class="div-input1">
                                <%
                                    List<Map<String, Object>> listTinhChat = (List<Map<String, Object>>) request.getAttribute("listTinhChat");
                                %>
                                <select id="iptinhChat" type="text" class="input-form"  disabled="true">
                                    <option></option>
                                    <% for (Map<String, Object> row : listTinhChat) {%>
                                    <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                                    <% }%>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="div-nd1">
                        <div class="danhmuc">
                            <div class="div-label1">
                                <label class="checkbox-inline"><input id="cbloaiSC" type="checkbox" value=""> Loại sự cố</label>
                            </div>
                            <div class="div-input1">
                                <%
                                    List<Map<String, Object>> listLoaiSuCo = (List<Map<String, Object>>) request.getAttribute("listLoaiSuCo");
                                %>
                                <select id="iploaiSC" type="text" class="input-form"  disabled="true">
                                    <option></option>
                                    <% for (Map<String, Object> row : listLoaiSuCo) {%>
                                    <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                                    <% }%>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="div-nd1">
                        <div class="danhmuc">
                            <div class="div-label1">
                                <label class="checkbox-inline"><input id="cbmucDo" type="checkbox" value="Tên sự cố"> Mức độ</label>
                            </div>
                            <div class="div-input1">
                                <%
                                    List<Map<String, Object>> listMucDo = (List<Map<String, Object>>) request.getAttribute("listMucDo");
                                %>
                                <select id="ipmucDo" type="text" class="input-form"  disabled="true">
                                    <option></option>
                                    <% for (Map<String, Object> row : listMucDo) {%>
                                    <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                                    <% }%>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="div-nd1">
                        <div class="danhmuc">
                            <div class="div-label1">
                                <label class="checkbox-inline"><input id="cbdiaDiem" type="checkbox" value=""> Địa điểm</label>
                            </div>
                            <div class="div-input1">
                                <%
                                    List<Map<String, Object>> listDiaDiem = (List<Map<String, Object>>) request.getAttribute("listDiaDiem");
                                %>
                                <select id="ipdiaDiem" type="text" class="input-form"  disabled="true">
                                    <option></option>
                                    <% for (Map<String, Object> row : listDiaDiem) {%>
                                    <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                                    <% }%>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="div-nd1">
                        <div class="danhmuc">
                            <div class="div-label1">
                                <label class="checkbox-inline"><input id="cbguiBC" type="checkbox" value=""> Nơi gửi BC</label>
                            </div>
                            <div class="div-input1">
                                <%
                                    List<Map<String, Object>> listGuiBC = (List<Map<String, Object>>) request.getAttribute("listGuiBC");
                                %>
                                <select id="ipguiBC" type="text" class="input-form"  disabled="true">
                                    <option></option>
                                    <% for (Map<String, Object> row : listGuiBC) {%>
                                    <option value="<%=row.get("MaDM")%>"><%=row.get("TenDM")%></option>
                                    <% }%>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="div-button">
                <button id="btn-Review" type="button" class="btn-Them">Xem danh sách</button>
                <button id="btn-Print" type="button" class="btn-Them">In danh sách</button>
            </div>
        </div>
    </form>
</div>