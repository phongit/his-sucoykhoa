/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.thuctap.Controllers;

import com.thuctap.DAO.qlscDAO;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.naming.NamingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author phongtruong
 */
@Controller
public class QLSC_Controller {

    @Autowired
    qlscDAO scDAO;
    @Resource(name = "dataSource")
    DataSource dataSource;

    @RequestMapping(value = "/")
    public String index() {
        return "redirect:QLSuCo";
    }

    @RequestMapping("/BaoCao_ThongKe")
    public String BaoCao_ThongKe(ModelMap map) {
        List<Map<String, Object>> listSuCo = scDAO.getListSuCo();
        map.addAttribute("listSuCo", listSuCo);
        List<Map<String, Object>> listTenSuCo = scDAO.getDanhMuc("TenSuCo");
        map.addAttribute("listTenSuCo", listTenSuCo);
        List<Map<String, Object>> listLoaiSuCo = scDAO.getDanhMuc("LoaiSuCo");
        map.addAttribute("listLoaiSuCo", listLoaiSuCo);
        List<Map<String, Object>> listDiaDiem = scDAO.getDanhMuc("DiaDiem");
        map.addAttribute("listDiaDiem", listDiaDiem);
        List<Map<String, Object>> listMucDo = scDAO.getDanhMuc("MucDo");
        map.addAttribute("listMucDo", listMucDo);
        List<Map<String, Object>> listTinhChat = scDAO.getDanhMuc("TinhChat");
        map.addAttribute("listTinhChat", listTinhChat);
        List<Map<String, Object>> listGuiBC = scDAO.getDanhMuc("GuiBC");
        map.addAttribute("listGuiBC", listGuiBC);
        return "BaoCao_ThongKe";
    }

    @RequestMapping("/QLSuCo")
    public String QLSuCo(ModelMap map) {
        List<Map<String, Object>> listSuCo = scDAO.getListSuCo();
        map.addAttribute("listSuCo", listSuCo);
        List<Map<String, Object>> listTenSuCo = scDAO.getDanhMuc("TenSuCo");
        map.addAttribute("listTenSuCo", listTenSuCo);
        List<Map<String, Object>> listLoaiSuCo = scDAO.getDanhMuc("LoaiSuCo");
        map.addAttribute("listLoaiSuCo", listLoaiSuCo);
        List<Map<String, Object>> listDiaDiem = scDAO.getDanhMuc("DiaDiem");
        map.addAttribute("listDiaDiem", listDiaDiem);
        List<Map<String, Object>> listMucDo = scDAO.getDanhMuc("MucDo");
        map.addAttribute("listMucDo", listMucDo);
        List<Map<String, Object>> listTinhChat = scDAO.getDanhMuc("TinhChat");
        map.addAttribute("listTinhChat", listTinhChat);
        List<Map<String, Object>> listGuiBC = scDAO.getDanhMuc("GuiBC");
        map.addAttribute("listGuiBC", listGuiBC);
        return "QLSuCo";
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/getID")
    public ResponseEntity getID(
            @RequestParam("loaiDM") String loaiDM
    ) {
        return new ResponseEntity(scDAO.getID(loaiDM), HttpStatus.OK);
    }

    @RequestMapping("/QLDanhMuc")
    public String QLDanhMuc(ModelMap map) {
        List<Map<String, Object>> listNV = scDAO.getNhanVien();
        map.addAttribute("listNV", listNV);
        List<Map<String, Object>> listTenSuCo = scDAO.getDanhMuc("TenSuCo");
        map.addAttribute("listTenSuCo", listTenSuCo);
        List<Map<String, Object>> listLoaiSuCo = scDAO.getDanhMuc("LoaiSuCo");
        map.addAttribute("listLoaiSuCo", listLoaiSuCo);
        List<Map<String, Object>> listDiaDiem = scDAO.getDanhMuc("DiaDiem");
        map.addAttribute("listDiaDiem", listDiaDiem);
        List<Map<String, Object>> listMucDo = scDAO.getDanhMuc("MucDo");
        map.addAttribute("listMucDo", listMucDo);
        List<Map<String, Object>> listTinhChat = scDAO.getDanhMuc("TinhChat");
        map.addAttribute("listTinhChat", listTinhChat);
        List<Map<String, Object>> listGuiBC = scDAO.getDanhMuc("GuiBC");
        map.addAttribute("listGuiBC", listGuiBC);

        return "QLDanhMuc";
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/addDM")
    public ResponseEntity addDM(
            @RequestParam(required = false, name = "loaiDM") String loaiDM,
            @RequestParam(required = false, name = "maDM") String maDM,
            @RequestParam(required = false, name = "tenDM") String tenDM,
            @RequestParam(required = false, name = "ngayCN") String ngayCN,
            @RequestParam(required = false, name = "nguoiCN") String nguoiCN
    ) {
        return new ResponseEntity(scDAO.addDM(loaiDM, maDM, tenDM, ngayCN, nguoiCN), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/updateDM")
    public ResponseEntity updateDM(
            @RequestParam("loaiDM") String loaiDM,
            @RequestParam("maDM") String maDM,
            @RequestParam("tenDM") String tenDM,
            @RequestParam("ngayCN") String ngayCN,
            @RequestParam("nguoiCN") String nguoiCN
    ) {
        return new ResponseEntity(scDAO.updateDM(loaiDM, maDM, tenDM, ngayCN, nguoiCN), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/getDataDM")
    public ResponseEntity getDataDM(
            @RequestParam(required = false, name = "loaiDM") String loaiDM,
            @RequestParam(required = false, name = "maDM") String maDM
    ) {
        return new ResponseEntity(scDAO.getDataDM(loaiDM, maDM), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/deleteDM")
    public ResponseEntity deleteDM(
            @RequestParam("ID") String maDM,
            @RequestParam("loaiDM") String loaiDM
    ) {
        return new ResponseEntity(scDAO.deleteDM(loaiDM, maDM), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("getIDSC")
    public ResponseEntity getIDSC() {
        return new ResponseEntity(scDAO.getIDSC(), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/themSC")
    public ResponseEntity themSC(
            @RequestParam("maSC") String maSC,
            @RequestParam("tenSC") String tenSC,
            @RequestParam("loaiSC") String loaiSC,
            @RequestParam("mucDo") String mucDo,
            @RequestParam("diaDiem") String diaDiem,
            @RequestParam("ngay") String ngay,
            @RequestParam("gio") String gio,
            @RequestParam("tinhChat") String tinhChat,
            @RequestParam("guiBC") String guiBC,
            @RequestParam("moTa") String moTa,
            @RequestParam("giaiPhap") String giaiPhap
    ) {
        return new ResponseEntity(scDAO.themSC(maSC, tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("addNewRow")
    public ResponseEntity addNewRow(
            @RequestParam("maSC") String maSC
    ) {
        return new ResponseEntity(scDAO.addNewRow(maSC), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("xoaSC")
    public ResponseEntity xoaSC(
            @RequestParam("maSC") String maSC
    ) {
        return new ResponseEntity(scDAO.xoaSC(maSC), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("getDataUpdate")
    public ResponseEntity getDataUpdate(
            @RequestParam("maSC") String maSC
    ) {
        System.out.println(maSC);
        return new ResponseEntity(scDAO.getDataUpdate(maSC), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/updateSC")
    public ResponseEntity updateSC(
            @RequestParam(required = false, name = "maSC") String maSC,
            @RequestParam(required = false, name = "tenSC") String tenSC,
            @RequestParam(required = false, name = "loaiSC") String loaiSC,
            @RequestParam(required = false, name = "mucDo") String mucDo,
            @RequestParam(required = false, name = "diaDiem") String diaDiem,
            @RequestParam(required = false, name = "ngay") String ngay,
            @RequestParam(required = false, name = "gio") String gio,
            @RequestParam(required = false, name = "tinhChat") String tinhChat,
            @RequestParam(required = false, name = "guiBC") String guiBC,
            @RequestParam(required = false, name = "moTa") String moTa,
            @RequestParam(required = false, name = "giaiPhap") String giaiPhap
    ) {
        return new ResponseEntity(scDAO.updateSC(maSC, tenSC, loaiSC, mucDo, diaDiem, ngay, gio, tinhChat, guiBC, moTa, giaiPhap), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("updateData")
    public ResponseEntity updateData(
            @RequestParam("maSC") String maSC
    ) {
        return new ResponseEntity(scDAO.updateData(maSC), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("Page")
    public ResponseEntity Page(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit
    ) {
        if (page > scDAO.countPage(scDAO.getListSuCo(), limit)) {
            page = scDAO.countPage(scDAO.getListSuCo(), limit);
        } else if (page < 0) {
            page = 0;
        }
        int start = (page - 1) * limit;
        return new ResponseEntity(scDAO.getListPage(start, limit), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("getTotalPages")
    public ResponseEntity getTotalPages(
            @RequestParam("limit") int limit
    ) {
        return new ResponseEntity(scDAO.countPage(scDAO.getListSuCo(), limit), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("PageDM")
    public ResponseEntity PageDM(
            @RequestParam("loaiDM") String loaiDM,
            @RequestParam("page") int page,
            @RequestParam("limit") int limit
    ) {
        switch (loaiDM) {
            case "1": {
                if (page > scDAO.countPage(scDAO.getDanhMuc("TenSuCo"), limit)) {
                    page = scDAO.countPage(scDAO.getDanhMuc("TenSuCo"), limit);
                } else if (page < 0) {
                    page = 0;
                }
                int start = (page - 1) * limit;
                return new ResponseEntity(scDAO.getListPageDM("TenSuCo", start, limit), HttpStatus.OK);
            }
            case "2": {
                if (page > scDAO.countPage(scDAO.getDanhMuc("LoaiSuCo"), limit)) {
                    page = scDAO.countPage(scDAO.getDanhMuc("LoaiSuCo"), limit);
                } else if (page < 0) {
                    page = 0;
                }
                int start = (page - 1) * limit;
                return new ResponseEntity(scDAO.getListPageDM("LoaiSuCo", start, limit), HttpStatus.OK);
            }
            case "3": {
                if (page > scDAO.countPage(scDAO.getDanhMuc("MucDo"), limit)) {
                    page = scDAO.countPage(scDAO.getDanhMuc("MucDo"), limit);
                } else if (page < 0) {
                    page = 0;
                }
                int start = (page - 1) * limit;
                return new ResponseEntity(scDAO.getListPageDM("MucDo", start, limit), HttpStatus.OK);
            }
            case "4": {
                if (page > scDAO.countPage(scDAO.getDanhMuc("DiaDiem"), limit)) {
                    page = scDAO.countPage(scDAO.getDanhMuc("DiaDiem"), limit);
                } else if (page < 0) {
                    page = 0;
                }
                int start = (page - 1) * limit;
                return new ResponseEntity(scDAO.getListPageDM("DiaDiem", start, limit), HttpStatus.OK);
            }
            case "5": {
                if (page > scDAO.countPage(scDAO.getDanhMuc("TinhChat"), limit)) {
                    page = scDAO.countPage(scDAO.getDanhMuc("TinhChat"), limit);
                } else if (page < 0) {
                    page = 0;
                }
                int start = (page - 1) * limit;
                return new ResponseEntity(scDAO.getListPageDM("TinhChat", start, limit), HttpStatus.OK);
            }
            case "6": {
                if (page > scDAO.countPage(scDAO.getDanhMuc("GuiBC"), limit)) {
                    page = scDAO.countPage(scDAO.getDanhMuc("GuiBC"), limit);
                } else if (page < 0) {
                    page = 0;
                }
                int start = (page - 1) * limit;
                return new ResponseEntity(scDAO.getListPageDM("GuiBC", start, limit), HttpStatus.OK);
            }
            default: {
                if (page > scDAO.countPage(scDAO.getDanhMuc("TenSuCo"), limit)) {
                    page = scDAO.countPage(scDAO.getDanhMuc("TenSuCo"), limit);
                } else if (page < 0) {
                    page = 0;
                }
                int start = (page - 1) * limit;
                return new ResponseEntity(scDAO.getListPageDM("TenSuCo", start, limit), HttpStatus.OK);
            }
        }
    }

    @PostMapping
    @RequestMapping("getTotalPagesDM")
    public ResponseEntity getTotalPagesDM(
            @RequestParam("limit") int limit,
            @RequestParam("loaiDM") String loaiDM
    ) {
        switch (loaiDM) {
            case "1": {
                return new ResponseEntity(scDAO.countPage(scDAO.getDanhMuc("TenSuCo"), limit), HttpStatus.OK);
            }
            case "2": {
                return new ResponseEntity(scDAO.countPage(scDAO.getDanhMuc("LoaiSuCo"), limit), HttpStatus.OK);
            }
            case "3": {
                return new ResponseEntity(scDAO.countPage(scDAO.getDanhMuc("MucDo"), limit), HttpStatus.OK);
            }
            case "4": {
                return new ResponseEntity(scDAO.countPage(scDAO.getDanhMuc("DiaDiem"), limit), HttpStatus.OK);
            }
            case "5": {
                return new ResponseEntity(scDAO.countPage(scDAO.getDanhMuc("TinhChat"), limit), HttpStatus.OK);
            }
            case "6": {
                return new ResponseEntity(scDAO.countPage(scDAO.getDanhMuc("GuiBC"), limit), HttpStatus.OK);
            }
            default:
                return null;
        }

    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/thongke")
    public ResponseEntity thongke(
            @RequestParam(required = false, name = "data") String data
    ) {
        System.out.println(data);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/exportPDF")
    public void exportPDF(
            @RequestParam("maSC") int maSC, 
            HttpServletRequest request, 
            HttpServletResponse response) throws JRException, IOException, NamingException, SQLException {
        String reportFileName = "QLSuCoReport";
        Connection conn = scDAO.getConnection();
        HashMap<String, Object> hmParams = new HashMap<>();
        hmParams.put("MaSuCo", maSC);
        JasperReport scDAOReport = scDAO.getCompiledFile(reportFileName, request);
        scDAO.printReport("pdf", scDAOReport, hmParams, conn, reportFileName, response, request);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/exportXLS/{maSC}")
    public void exportXLS(@PathVariable("maSC") int maSC, HttpServletRequest request, HttpServletResponse response) throws JRException, IOException, NamingException, SQLException {
        String reportFileName = "QLSuCoReport";
        Connection conn = scDAO.getConnection();
        HashMap<String, Object> hmParams = new HashMap<>();
        hmParams.put("MaSuCo", maSC);
        JasperReport scDAOReport = scDAO.getCompiledFile(reportFileName, request);
        scDAO.printReport("xls", scDAOReport, hmParams, conn, reportFileName, response, request);
    }

    @PostMapping
    @RequestMapping("/exportRTF/{maSC}")
    public void exportRTF(@PathVariable("maSC") int maSC, HttpServletRequest request, HttpServletResponse response) throws JRException, IOException, NamingException, SQLException {
        String reportFileName = "QLSuCoReport";
        Connection conn = scDAO.getConnection();
        HashMap<String, Object> hmParams = new HashMap<>();
        hmParams.put("MaSuCo", maSC);
        JasperReport scDAOReport = scDAO.getCompiledFile(reportFileName, request);
        scDAO.printReport("rtf", scDAOReport, hmParams, conn, reportFileName, response, request);
    }
}
