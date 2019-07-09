<%-- 
    Document   : index
    Created on : Jun 16, 2019, 1:58:10 PM
    Author     : phongtruong
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="shortcut icon" type="image/jpg" href="resources/img/vnpt.jpg"/>
        <link type="text/css" href="resources/css/index.css" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Trang Chủ</title>
    </head>
    <body>
        <div class="backgroud">
            <div class="header">
                <div class="tab-header">
                    <div class="dropdown">
                        <p onclick="window.location.replace('QLSuCo')" class="btn">QUẢN LÝ SỰ CỐ</p>
                    </div>
                </div>

                <div class="tab-header">
                    <div class="dropdown">
                        <p onclick="window.location.replace('QLDanhMuc')" class="btn">QUẢN LÝ DANH MỤC</p>
                    </div>
                </div>

                <div class="tab-header">
                    <div class="dropdown">
                        <i class="btn">BÁO CÁO - THỐNG KÊ</i>
                        <div class="dropdown-content">
                            <p>Lập báo cáo ngày</p>
                            <p>Lập báo cáo tháng</p>
                            <p>Lập báo cáo quý</p>
                            <p>Lập báo cáo năm</p>
                        </div>
                    </div>
                </div>


<!--                <div class="tab-header">
                    <div class="dropdown">
                        <i class="btn">THỐNG KÊ</i>
                        <div class="dropdown-content">
                            <p>Thống kê theo ngày</p>
                            <p>Thống kê theo mức độ</p>
                            <p>Thống kê theo loại</p
                        </div>
                    </div>
                </div>-->

            </div>
            <div class="body"></div>
        </div>
    </body>
</html>
