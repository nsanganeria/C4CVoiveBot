/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myvoice;

import java.io.InputStream;  
import java.io.*;
import java.net.URL;  
import net.sf.json.JSON;  
import net.sf.json.xml.XMLSerializer;  
import org.apache.commons.io.IOUtils; 
import org.json.*;
import com.google.gson.Gson;
 

/**
 *
 * @author I335524
 */
public class XMLToJson {
    static String line="";
    String str = "";
    public JSONObject createJsonResponse() throws JSONException, IOException {
        String filename = "newFile.xml";
        String workingDirectory = System.getProperty("user.dir");
        String os = System.getProperty("os.name").toLowerCase();
        String separator="/";
       // String separator =
        String link = workingDirectory + separator +filename;
        BufferedReader br = new BufferedReader(new FileReader(link));
        while ((line = br.readLine()) != null) 
        {   
            str+=line;  
        }
        
        JSONObject jsondata = new JSONObject();
        jsondata = XML.toJSONObject(str);
        System.out.println(jsondata);
         return jsondata;
    }
   
    
}
