<%-- 
    Document   : QLDanhMuc
    Created on : Jun 18, 2019, 8:06:06 PM
    Author     : phongtruong
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="shortcut icon" type="image/jpg" href="resources/img/vnpt.jpg"/>
        <link type="text/css" href="resources/css/index.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Quản lý danh mục</title>
    </head>
    <body>
        <div class="backgroud">
            <div class="header">
                <div class="tab-header">
                    <div class="dropdown">
                        <p id="btn-QLSuCo" onclick="window.location.replace('QLSuCo')" class="btn">QUẢN LÝ SỰ CỐ</a>
                    </div>
                </div>

                <div class="tab-header">
                    <div class="dropdown">
                        <p style="background-color: chartreuse" class="btn">QUẢN LÝ DANH MỤC</i>
                    </div>
                </div>

                <div class="tab-header">
                    <div class="dropdown">
                        <i class="btn">BÁO CÁO</i>
                        <div class="dropdown-content">
                            <p>Lập báo cáo ngày</p>
                            <p>Lập báo cáo tháng</p>
                            <p>Lập báo cáo quý</p>
                            <p>Lập báo cáo năm</p>
                        </div>
                    </div>
                </div>


                <div class="tab-header">
                    <div class="dropdown">
                        <i class="btn">THỐNG KÊ</i>
                        <div class="dropdown-content">
                            <p>Thống kê theo ngày</p>
                            <p>Thống kê theo mức độ</p>
                            <p>Thống kê theo loại</p
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="body">
            <div class="div-form">
                <%@include file="../jsp/ThemDM.jsp"%>
            </div>  
            <div class="div-table">
                <%@include file="../jsp/DanhSachDM.jsp"%>
            </div>  
        </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="resources/js/QLDanhMuc.js"></script>
</html>