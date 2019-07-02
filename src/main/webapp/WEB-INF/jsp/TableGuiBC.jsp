<%-- 
    Document   : TableGuiBC
    Created on : Jun 23, 2019, 6:34:28 PM
    Author     : phongtruong
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="table-GuiBC">
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
        <%
            List<Map<String, Object>> listGuiBC = (List<Map<String, Object>>) request.getAttribute("listGuiBC");
        %>
        <table id="table-GuiBC">
             <% int n = 1; for (Map<String, Object> row : listGuiBC) {%>
            <tr id="tr-TenSC">
                <td class="stt"><%=n++%></td>
                <td  class="tdma"><%=row.get("MaDM")%></td>
                <td  class="tdten"><%=row.get("TenDM")%></td>
                <td  class="td-ngay"><%=row.get("NgayCN")%></td>
                <td  class="td-nguoi-cn"><%=row.get("NguoiCN")%></td>
                <td class="col-id">
                    <a class="fa fa-edit icon" style="color: darkgoldenrod; font-size: 25px;"></a>
                </td>
                <td class="col-id" class='td-del'>
                    <i class="fa fa-trash-o icon" style="color: red; font-size: 25px;"></i>
                </td>
            </tr>
            <%}%>
        </table>
    </div>
    <div class="page-list">
        
    </div>
</div>