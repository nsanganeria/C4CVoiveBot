package com.myvoice;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.commons.collections4.*;
import java.util.ArrayList;



public class ExcelRead {
	public class excelObject
	{
	  ArrayList<ArrayList<String>> arrayofexcel = new ArrayList<ArrayList<String>>();
	  public void add(ArrayList<String> a)
	  {
		  arrayofexcel.add(a);
		  
	  }
	}
	public excelObject read()throws IOException
	{

        Workbook wb = null;
        String filename = "Metadata2.xlsx";
        String workingDirectory = System.getProperty("user.dir");
        String os = System.getProperty("os.name").toLowerCase();
        String separator="/";
       // String separator =
        String link = workingDirectory + separator +filename;

        Path path = Paths.get(link);
        InputStream is = Files.newInputStream(path, StandardOpenOption.READ);
        String fileName = path.getFileName().toString().toLowerCase();

        if (fileName.endsWith("xlsx")) {

            wb = new XSSFWorkbook(is);

        } else {

            wb = new HSSFWorkbook(is);
        }

        
        int num = wb.getNumberOfSheets();
        excelObject obj = new excelObject();
        for(int j=0;j<num;j++)
        {
        	Sheet sheet = wb.getSheetAt(j);
        	 ArrayList<String> a1 = new ArrayList<String>();
          for (int i = 0; i < sheet.getPhysicalNumberOfRows(); i++) {
            Row row = sheet.getRow(i);
            int column = row.getPhysicalNumberOfCells();
            String s = " ";
            for(int k=0;k<column;k++)
            {
                s = s+ row.getCell(k).toString();  	
                if(k!=column-1)
                s = s+",";
            }
            a1.add(s);
            s=null;
        }
         obj.add(a1);
        }
        if (is != null) {
            is.close();
        }
        if(wb!=null)
        {
        	wb.close();
        }
        return obj;
	}

}
