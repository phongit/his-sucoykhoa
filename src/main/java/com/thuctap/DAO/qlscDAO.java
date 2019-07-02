/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.thuctap.DAO;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.naming.NamingException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRExporter;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.export.JRPdfExporterParameter;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author phongtruong
 */
@Repository
@Transactional
public class qlscDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> getNhanVien() {
        final String sql = "SELECT MaNV, HoTen FROM NhanVien";
        return jdbcTemplate.queryForList(sql);
    }

    public List<Map<String, Object>> getDanhMuc(String tenDM) {
        final String sql = "SELECT MaDM, TenDM, NgayCN, NguoiCN FROM " + tenDM + " WHERE TrangThai = 1";
        return jdbcTemplate.queryForList(sql);
    }

    public List<Map<String, Object>> getListSuCo() {
        final String sql = "SELECT MaSuCo, tsc.TenDM TenSuCo, lsc.TenDM LoaiSuCo, md.TenDM MucDo, dd.TenDM DiaDiem, Ngay, Gio, tc.TenDM TinhChat, gbc.TenDM GuiBC, MoTa, GiaiPhap FROM GhiSuCo gsc JOIN TenSuCo tsc ON gsc.TenSuCo = tsc.MaDM JOIN LoaiSuCo lsc ON gsc.LoaiSuCo = lsc.MaDM JOIN MucDo md ON gsc.MucDo = md.MaDM JOIN DiaDiem dd ON gsc.DiaDiem = dd.MaDM JOIN TinhChat tc ON gsc.TinhChat = tc.MaDM JOIN GuiBC gbc ON gsc.GuiBC = gbc.MaDM WHERE gsc.TrangThai = 1 GROUP BY MaSuCo;";
        return jdbcTemplate.queryForList(sql);
    }

    public int addDM(String loaiDM, String maDM, String tenDM, String ngayCN, String nguoiCN) {
        switch (loaiDM) {
            case "1": {
                final String sql = "INSERT INTO TenSuCo (MaDM, TenDM, NgayCN, NguoiCN) VALUES (?,?,?,?);";
                Object[] params = new Object[]{maDM, tenDM, ngayCN, nguoiCN};
                int[] types = new int[]{Types.INTEGER, Types.VARCHAR, Types.DATE, Types.VARCHAR};
                return jdbcTemplate.update(sql, params, types);
            }
            case "2": {
                final String sql = "INSERT INTO LoaiSuCo (MaDM, TenDM, NgayCN, NguoiCN) VALUES (?,?,?,?);";
                Object[] params = new Object[]{maDM, tenDM, ngayCN, nguoiCN};
                int[] types = new int[]{Types.INTEGER, Types.VARCHAR, Types.DATE, Types.VARCHAR};
                return jdbcTemplate.update(sql, params, types);
            }
            case "3": {
                final String sql = "INSERT INTO MucDo (MaDM, TenDM, NgayCN, NguoiCN) VALUES (?,?,?,?);";
                Object[] params = new Object[]{maDM, tenDM, ngayCN, nguoiCN};
                int[] types = new int[]{Types.INTEGER, Types.VARCHAR, Types.DATE, Types.VARCHAR};
                return jdbcTemplate.update(sql, params, types);
            }
            case "4": {
                final String sql = "INSERT INTO DiaDiem (MaDM, TenDM, NgayCN, NguoiCN) VALUES (?,?,?,?);";
                Object[] params = new Object[]{maDM, tenDM, ngayCN, nguoiCN};
                int[] types = new int[]{Types.INTEGER, Types.VARCHAR, Types.DATE, Types.VARCHAR};
                return jdbcTemplate.update(sql, params, types);
            }
            case "5": {
                final String sql = "INSERT INTO TinhChat (MaDM, TenDM, NgayCN, NguoiCN) VALUES (?,?,?,?);";
                Object[] params = new Object[]{maDM, tenDM, ngayCN, nguoiCN};
                int[] types = new int[]{Types.INTEGER, Types.VARCHAR, Types.DATE, Types.VARCHAR};
                return jdbcTemplate.update(sql, params, types);
            }
            case "6": {
                final String sql = "INSERT INTO GuiBC (MaDM, TenDM, NgayCN, NguoiCN) VALUES (?,?,?,?);";
                Object[] params = new Object[]{maDM, tenDM, ngayCN, nguoiCN};
                int[] types = new int[]{Types.INTEGER, Types.VARCHAR, Types.DATE, Types.VARCHAR};
                return jdbcTemplate.update(sql, params, types);
            }
            default:
                return 0;
        }
    }

    public int updateDM(String loaiDM, String maDM, String tenDM, String ngayCN, String nguoiCN) {
        switch (loaiDM) {
            case "1": {
                final String sql = "UPDATE TenSuCo SET TenDM = ?, NgayCN = ?, NguoiCN = ? WHERE MaDM = ?;";
                Object[] params = new Object[]{tenDM, ngayCN, nguoiCN, maDM};
                int[] types = new int[]{Types.VARCHAR, Types.DATE, Types.VARCHAR, Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "2": {
                final String sql = "UPDATE LoaiSuCo SET TenDM = ?, NgayCN = ?, NguoiCN = ? WHERE MaDM = ?;";
                Object[] params = new Object[]{tenDM, ngayCN, nguoiCN, maDM};
                int[] types = new int[]{Types.VARCHAR, Types.DATE, Types.VARCHAR, Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "3": {
                final String sql = "UPDATE MucDo SET TenDM = ?, NgayCN = ?, NguoiCN = ? WHERE MaDM = ?;";
                Object[] params = new Object[]{tenDM, ngayCN, nguoiCN, maDM};
                int[] types = new int[]{Types.VARCHAR, Types.DATE, Types.VARCHAR, Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "4": {
                final String sql = "UPDATE DiaDiem SET TenDM = ?, NgayCN = ?, NguoiCN = ? WHERE MaDM = ?;";
                Object[] params = new Object[]{tenDM, ngayCN, nguoiCN, maDM};
                int[] types = new int[]{Types.VARCHAR, Types.DATE, Types.VARCHAR, Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "5": {
                final String sql = "UPDATE TinhChat SET TenDM = ?, NgayCN = ?, NguoiCN = ? WHERE MaDM = ?;";
                Object[] params = new Object[]{tenDM, ngayCN, nguoiCN, maDM};
                int[] types = new int[]{Types.VARCHAR, Types.DATE, Types.VARCHAR, Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "6": {
                final String sql = "UPDATE GuiBC SET TenDM = ?, NgayCN = ?, NguoiCN = ? WHERE MaDM = ?;";
                Object[] params = new Object[]{tenDM, ngayCN, nguoiCN, maDM};
                int[] types = new int[]{Types.VARCHAR, Types.DATE, Types.VARCHAR, Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            default:
                return 0;
        }
    }

    public int deleteDM(String loaiDM, String maDM) {
        switch (loaiDM) {
            case "1": {
                final String sql = "UPDATE TenSuCo SET TrangThai = 0 WHERE MaDM = ?;";
                Object[] params = new Object[]{maDM};
                int[] types = new int[]{Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "2": {
                final String sql = "UPDATE LoaiSuCo SET TrangThai = 0 WHERE MaDM = ?;";
                Object[] params = new Object[]{maDM};
                int[] types = new int[]{Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "3": {
                final String sql = "UPDATE MucDo SET TrangThai = 0 WHERE MaDM = ?;";
                Object[] params = new Object[]{maDM};
                int[] types = new int[]{Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "4": {
                final String sql = "UPDATE DiaDiem SET TrangThai = 0 WHERE MaDM = ?;";
                Object[] params = new Object[]{maDM};
                int[] types = new int[]{Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "5": {
                final String sql = "UPDATE TinhChat SET TrangThai = 0 WHERE MaDM = ?;";
                Object[] params = new Object[]{maDM};
                int[] types = new int[]{Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            case "6": {
                final String sql = "UPDATE GuiBC SET TrangThai = 0 WHERE MaDM = ?;";
                Object[] params = new Object[]{maDM};
                int[] types = new int[]{Types.INTEGER};
                return jdbcTemplate.update(sql, params, types);
            }
            default:
                return 0;
        }
    }

    public List<Map<String, Object>> getID(String loaiDM) {
        switch (loaiDM) {
            case "1": {
                final String sql = "SELECT MAX(MaDM) MaDM, DATE_FORMAT(CURDATE(), '%Y-%m-%d') NgayHT FROM TenSuCo;";
                return jdbcTemplate.queryForList(sql);
            }
            case "2": {
                final String sql = "SELECT MAX(MaDM) MaDM, DATE_FORMAT(CURDATE(), '%Y-%m-%d') NgayHT FROM LoaiSuCo;";
                return jdbcTemplate.queryForList(sql);
            }
            case "3": {
                final String sql = "SELECT MAX(MaDM) MaDM, DATE_FORMAT(CURDATE(), '%Y-%m-%d') NgayHT FROM MucDo;";
                return jdbcTemplate.queryForList(sql);
            }
            case "4": {
                final String sql = "SELECT MAX(MaDM) MaDM, DATE_FORMAT(CURDATE(), '%Y-%m-%d') NgayHT FROM DiaDiem;";
                return jdbcTemplate.queryForList(sql);
            }
            case "5": {
                final String sql = "SELECT MAX(MaDM) MaDM, DATE_FORMAT(CURDATE(), '%Y-%m-%d') NgayHT FROM TinhChat;";
                return jdbcTemplate.queryForList(sql);
            }
            case "6": {
                final String sql = "SELECT MAX(MaDM) MaDM, DATE_FORMAT(CURDATE(), '%Y-%m-%d') NgayHT FROM GuiBC;";
                return jdbcTemplate.queryForList(sql);
            }
            default:
                return null;
        }
    }
    //Quan Ly Su Co
    public  List<Map<String, Object>> getIDSC(){
        final String sql = "SELECT MAX(MaSuCo) MaSuCo, DATE_FORMAT(CURRENT_TIMESTAMP, '%Y-%m-%d %H:%i') NGHT FROM GhiSuCo;";
        return jdbcTemplate.queryForList(sql);
    }
    
    public int themSC(  String maSC, String tenSC, String loaiSC, String mucDo, String diaDiem, String ngay, String gio, String tinhChat, String guiBC, String moTa, String giaiPhap) {
        final String sql = "INSERT INTO GhiSuCo(MaSuCo, TenSuCo, LoaiSuCo, MucDo, DiaDiem, Ngay, Gio, TinhChat, GuiBC, MoTa, GiaiPhap) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
        Object[] params = new Object[]{maSC, tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap};
        int[] types = new int[]{Types.INTEGER, Types.INTEGER, Types.INTEGER, Types.INTEGER, Types.INTEGER, Types.VARCHAR, Types.VARCHAR, Types.INTEGER, Types.INTEGER, Types.VARCHAR, Types.VARCHAR};
        return jdbcTemplate.update(sql, params, types);
    }
    
    public List<Map<String, Object>> addNewRow(String maSC){
        final String sql = "SELECT MaSuCo, tsc.TenDM TenSuCo, lsc.TenDM LoaiSuCo, md.TenDM MucDo, dd.TenDM DiaDiem, Ngay, Gio, tc.TenDM TinhChat, gbc.TenDM GuiBC, MoTa, GiaiPhap FROM GhiSuCo gsc JOIN TenSuCo tsc ON gsc.TenSuCo = tsc.MaDM JOIN LoaiSuCo lsc ON gsc.LoaiSuCo = lsc.MaDM JOIN MucDo md ON gsc.MucDo = md.MaDM JOIN DiaDiem dd ON gsc.DiaDiem = dd.MaDM JOIN TinhChat tc ON gsc.TinhChat = tc.MaDM JOIN GuiBC gbc ON gsc.GuiBC = gbc.MaDM WHERE gsc.TrangThai = 1 AND MaSuCo = ?;";
        Object[] params = new Object[]{maSC};
        int[] types = new int[]{Types.INTEGER};
        return jdbcTemplate.queryForList(sql, params, types);
    }
    
    public int xoaSC(String maSC) {
        final String sql = "UPDATE GhiSuCo SET TrangThai = 0 WHERE MaSuCo = ?;";
        Object[] params = new Object[]{maSC};
        int[] types = new int[]{Types.INTEGER};
        return jdbcTemplate.update(sql, params, types);
    }
    
    public List<Map<String, Object>> getDataUpdate(String maSC){
        final String sql = "SELECT * FROM GhiSuCo WHERE MaSuCo = ?;";
        Object[] params = new Object[]{maSC};
        int[] types = new int[]{Types.INTEGER};
        return jdbcTemplate.queryForList(sql, params, types);
    }
    
    public int updateSC(String maSC, String tenSC, String loaiSC,String mucDo, String diaDiem, String ngay, String gio, String tinhChat, String guiBC, String moTa, String giaiPhap) {
        final String sql = "UPDATE GhiSuCo SET TenSuCo = ?, LoaiSuCo = ?, MucDo = ?, DiaDiem = ?, Ngay = ?, Gio = ?, TinhChat = ?, GuiBC = ?, MoTa = ?, GiaiPhap = ? WHERE MaSuCo = ? ;";
        Object[] params = new Object[]{tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap, maSC};
        int[] types = new int[]{Types.INTEGER, Types.INTEGER, Types.INTEGER, Types.INTEGER, Types.VARCHAR, Types.VARCHAR, Types.INTEGER, Types.INTEGER, Types.VARCHAR, Types.VARCHAR, Types.INTEGER};
        return jdbcTemplate.update(sql, params, types);
    }
    
    public List<Map<String, Object>> updateData(String maSC){
        final String sql = "SELECT MaSuCo, tsc.TenDM TenSuCo, lsc.TenDM LoaiSuCo, md.TenDM MucDo, dd.TenDM DiaDiem, Ngay, Gio, tc.TenDM TinhChat, gbc.TenDM GuiBC, MoTa, GiaiPhap FROM GhiSuCo gsc JOIN TenSuCo tsc ON gsc.TenSuCo = tsc.MaDM JOIN LoaiSuCo lsc ON gsc.LoaiSuCo = lsc.MaDM JOIN MucDo md ON gsc.MucDo = md.MaDM JOIN DiaDiem dd ON gsc.DiaDiem = dd.MaDM JOIN TinhChat tc ON gsc.TinhChat = tc.MaDM JOIN GuiBC gbc ON gsc.GuiBC = gbc.MaDM WHERE MaSuCo = ?;";
        Object[] params = new Object[]{maSC};
        int[] types = new int[]{Types.INTEGER};
        return jdbcTemplate.queryForList(sql, params, types);
    }

    public List<Map<String, Object>> getListPage(int start, int limit){
        final String sql = "SELECT MaSuCo, tsc.TenDM TenSuCo, lsc.TenDM LoaiSuCo, md.TenDM MucDo, dd.TenDM DiaDiem, Ngay, Gio, tc.TenDM TinhChat, gbc.TenDM GuiBC, MoTa, GiaiPhap FROM GhiSuCo gsc JOIN TenSuCo tsc ON gsc.TenSuCo = tsc.MaDM JOIN LoaiSuCo lsc ON gsc.LoaiSuCo = lsc.MaDM JOIN MucDo md ON gsc.MucDo = md.MaDM JOIN DiaDiem dd ON gsc.DiaDiem = dd.MaDM JOIN TinhChat tc ON gsc.TinhChat = tc.MaDM JOIN GuiBC gbc ON gsc.GuiBC = gbc.MaDM WHERE gsc.TrangThai =1 GROUP BY gsc.MaSuCo LIMIT ?, ?";
        Object[] params = new Object[]{start, limit};
        int[] types = new int[]{Types.INTEGER, Types.INTEGER};
        return jdbcTemplate.queryForList(sql, params, types);
    }
    
    public int countPage(List<Map<String, Object>> list, int limit){
        return (int) Math.ceil(list.size()*1.0/limit);
    }
    
//    public List<Map<String, Object>> getSuCo(String maSC) {
//        final String sql = "SELECT MaSuCo, tsc.TenDM TenSuCo, lsc.TenDM LoaiSuCo, md.TenDM MucDo, dd.TenDM DiaDiem, Ngay, Gio, tc.TenDM TinhChat, gbc.TenDM GuiBC, MoTa, GiaiPhap FROM GhiSuCo gsc JOIN TenSuCo tsc ON gsc.TenSuCo = tsc.MaDM JOIN LoaiSuCo lsc ON gsc.LoaiSuCo = lsc.MaDM JOIN MucDo md ON gsc.MucDo = md.MaDM JOIN DiaDiem dd ON gsc.DiaDiem = dd.MaDM JOIN TinhChat tc ON gsc.TinhChat = tc.MaDM JOIN GuiBC gbc ON gsc.GuiBC = gbc.MaDM WHERE gsc.TrangThai = 1 AND MaSuCo = ?;";
//        Object[] params = new Object[]{maSC};
//        int[] types = new int[]{Types.INTEGER};
//        return jdbcTemplate.queryForList(sql, params, types);
//    }
//    public List<Map<String, Object>> getDataEditSC(String maSC) {
//        final String sql = "SELECT MaSuCo, tsc.TenDM TenSuCo, lsc.TenDM LoaiSuCo, md.TenDM MucDo, dd.TenDM DiaDiem, Ngay, Gio, tc.TenDM TinhChat, gbc.TenDM GuiBC, MoTa, GiaiPhap FROM GhiSuCo gsc JOIN TenSuCo tsc ON gsc.TenSuCo = tsc.MaDM JOIN LoaiSuCo lsc ON gsc.LoaiSuCo = lsc.MaDM JOIN MucDo md ON gsc.MucDo = md.MaDM JOIN DiaDiem dd ON gsc.DiaDiem = dd.MaDM JOIN TinhChat tc ON gsc.TinhChat = tc.MaDM JOIN GuiBC gbc ON gsc.GuiBC = gbc.MaDM WHERE gsc.TrangThai = 1 AND MaSuCo = ?;";
//        Object[] params = new Object[]{maSC};
//        int[] types = new int[]{Types.INTEGER};
//        return jdbcTemplate.queryForList(sql, params, types);
//    }
//
//    public int delSuCo(String maSC) {
//        final String sql = "UPDATE GhiSuCo SET TrangThai = 0 WHERE MaSuCo = ?";
//        Object[] params = new Object[]{maSC};
//        int[] types = new int[]{Types.INTEGER};
//        return jdbcTemplate.update(sql, params, types);
//    }

//    public List<Map<String, Object>> getID() {
//        final String sql = "SELECT MAX(MaSuCo) MaSuCo, DATE_FORMAT(CURRENT_TIMESTAMP, '%Y-%m-%d %H:%i') NGHT FROM GhiSuCo;";
//        return jdbcTemplate.queryForList(sql);
//    }
//    public List<Map<String, Object>> getData(String maSC) {
//        final String sql = "SELECT * FROM GhiSuCo WHERE MaSuCo = ?;";
//        Object[] params = new Object[]{maSC};
//        int[] types = new int[]{Types.INTEGER};
//        return jdbcTemplate.queryForList(sql, params, types);
//    }
//    public int updateSC(String maSC, String tenSC, String loaiSC, String mucDo, String diaDiem, String ngay, String gio, String tinhChat, String guiBC, String moTa, String giaiPhap) {
//        final String sql = "UPDATE GhiSuCo SET TenSuCo = ?, LoaiSuCo = ?, MucDo = ?, DiaDiem = ?, Ngay = ?, Gio = ?, TinhChat = ?, GuiBC = ?, MoTa = ?, GiaiPhap = ? WHERE MaSuCo = ? ;";
//        Object[] params = new Object[]{tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap, maSC};
//        int[] types = new int[]{Types.INTEGER, Types.INTEGER, Types.INTEGER, Types.INTEGER, Types.VARCHAR, Types.VARCHAR, Types.INTEGER, Types.INTEGER, Types.VARCHAR, Types.VARCHAR, Types.INTEGER};
//        return jdbcTemplate.update(sql, params, types);
//    }
    public Connection getConnection() throws SQLException {
        Connection conn = null;

        try {

            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("Please include Classpath Where your MySQL Driver is located");
            e.printStackTrace();
        }

        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/HIS_SUCOYKHOA?characterEncoding=UTF-8", "root", "");

        if (conn != null) {
            System.out.println("Database Connected");
        } else {
            System.out.println(" connection Failed ");
        }

        return conn;

    }

    public JasperReport getCompiledFile(String fileName, HttpServletRequest request) throws JRException {
        System.out.println("path " + request.getSession().getServletContext().getRealPath("/resources/report/" + fileName + ".jasper"));
        File reportFile = new File(request.getSession().getServletContext().getRealPath("/resources/report/" + fileName + ".jasper"));
        if (!reportFile.exists()) {
            JasperCompileManager.compileReportToFile(request.getSession().getServletContext().getRealPath("/resources/report/" + fileName + ".jrxml"), request.getSession().getServletContext().getRealPath("/resources/report/" + fileName + ".jasper"));
        }
        JasperReport jasperReport = (JasperReport) JRLoader.loadObjectFromFile(reportFile.getPath());
        jasperReport.setProperty("net.sf.jasperreports.extension.registry.factory.fonts", "Times New Roman");
        jasperReport.setProperty("net.sf.jasperreports.default.pdf.encoding", "Identity-H");
        return jasperReport;
    }

    public void generateReportPDF(HttpServletResponse resp, Map parameters, JasperReport jasperReport, Connection conn) throws JRException, NamingException, SQLException, IOException {
        byte[] bytes = null;
        bytes = JasperRunManager.runReportToPdf(jasperReport, parameters, conn);
        resp.reset();
        resp.resetBuffer();
        resp.setContentType("application/pdf");
        resp.setHeader("Content-Disposition", "attachment; filename=QLSC;");
        resp.setContentLength(bytes.length);
        ServletOutputStream ouputStream = resp.getOutputStream();
        ouputStream.write(bytes, 0, bytes.length);
        ouputStream.flush();
        ouputStream.close();
    }

    public void printReport(String exportTypes, JasperReport jasperReport, HashMap<String, Object> hmParams, Connection conn, HttpServletResponse response, HttpServletRequest request) throws JRException, IOException {

        JRExporter exporterPdf = new JRPdfExporter();
        JasperPrint print = JasperFillManager.fillReport(jasperReport, hmParams, conn);

        response.setContentType("application/" + exportTypes);
        exporterPdf.setParameter(JRExporterParameter.CHARACTER_ENCODING, "UTF-8");
        exporterPdf.setParameter(JRPdfExporterParameter.JASPER_PRINT, print);
        exporterPdf.setParameter(JRPdfExporterParameter.OUTPUT_STREAM, response.getOutputStream());
        exporterPdf.exportReport();
    }

}
