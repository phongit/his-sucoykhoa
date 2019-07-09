///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package com.thuctap.DAO;
//
//import java.io.File;
//import java.io.IOException;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.SQLException;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.logging.Level;
//import java.util.logging.Logger;
//import javax.naming.NamingException;
//import javax.servlet.ServletOutputStream;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import net.sf.jasperreports.engine.JRException;
//import net.sf.jasperreports.engine.JRExporter;
//import net.sf.jasperreports.engine.JRExporterParameter;
//import net.sf.jasperreports.engine.JasperCompileManager;
//import net.sf.jasperreports.engine.JasperFillManager;
//import net.sf.jasperreports.engine.JasperPrint;
//import net.sf.jasperreports.engine.JasperReport;
//import net.sf.jasperreports.engine.JasperRunManager;
//import net.sf.jasperreports.engine.export.JRPdfExporter;
//import net.sf.jasperreports.engine.export.JRPdfExporterParameter;
//import net.sf.jasperreports.engine.export.JRRtfExporter;
//import net.sf.jasperreports.engine.export.JRXlsExporter;
//import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
//import net.sf.jasperreports.engine.util.JRLoader;
//import net.sf.jasperreports.export.SimpleExporterInput;
//import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
//import net.sf.jasperreports.export.SimpleWriterExporterOutput;
//import org.springframework.jdbc.core.JdbcTemplate;
//
///**
// *
// * @author phongtruong
// */
//public class JasperHelper extends JdbcTemplate {
//    
//
//    public static void printReport(String exportType, String reportFile, String fileName, Map parameters, Connection cnn, HttpServletResponse response) throws JRException {
//        try {
//            File sourceFile = new File(reportFile);
//            JasperReport jasperReport = (JasperReport) JRLoader.loadObject(sourceFile);
//            JasperPrint print = JasperFillManager.fillReport(jasperReport, parameters, cnn);
//            response.setContentType("application/" + exportType);
//            response.setHeader("Content-Disposition", "attachment; filename=" + fileName + ";");
//            if (exportType.equalsIgnoreCase("pdf")) {
//                JRPdfExporter exporter = new JRPdfExporter();
//                exporter.setExporterInput(new SimpleExporterInput(print));
//                exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(response.getOutputStream()));
//                exporter.exportReport();
//            } else if (exportType.equalsIgnoreCase("xls")) {
//                JRXlsExporter exporter = new JRXlsExporter();
//                exporter.setExporterInput(new SimpleExporterInput(print));
//                exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(response.getOutputStream()));
//                exporter.exportReport();
//            } else if (exportType.equalsIgnoreCase("xlsx")) {
//                JRXlsxExporter exporter = new JRXlsxExporter();
//                exporter.setExporterInput(new SimpleExporterInput(print));
//                exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(response.getOutputStream()));
//                exporter.exportReport();
//            } else if (exportType.equalsIgnoreCase("rtf")) {
//                JRRtfExporter exporter = new JRRtfExporter();
//                exporter.setExporterInput(new SimpleExporterInput(print));
//                exporter.setExporterOutput(new SimpleWriterExporterOutput(response.getOutputStream()));
//                exporter.exportReport();
//            }
//        } catch (IOException | JRException ex) {
//            Logger.getLogger(JasperHelper.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }
//
//}
