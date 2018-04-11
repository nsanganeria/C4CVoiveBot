
package com.myvoice;
import java.io.File;
import java.io.IOException;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import org.json.JSONException;
import net.sf.json.JSON;  
import net.sf.json.xml.XMLSerializer;  
import org.apache.commons.io.IOUtils; 
import org.json.*;

public class XMLFileCreation {
	public JSONObject createXML(ArrayList<ActionSchema> actionList) throws JSONException, IOException{
		//Timestamp currTimestamp = new Timestamp(Calendar.getInstance().getTime().getTime());
	
		// 1) create a java calendar instance
	//	Calendar calendar = Calendar.getInstance();

		// 2) get a java.util.Date from the calendar instance.
//		    this date will represent the current instant, or "now".
	//	java.util.Date now = calendar.getTime();

		// 3) a java current time (now) instance
	//	Timestamp currTimestamp = new Timestamp(now.getTime());
		
		//ArrayList<ActionSchema> actionList = new ArrayList<ActionSchema>();
		//actionList.add(new ActionSchema("abc","def","def"));
		//actionList.add(new ActionSchema("xyz",null,"lmn"));
		
		
		Instruction customer = new Instruction();
		//customer.setTime(currTimestamp);
		customer.setActionList(actionList);
                JSONObject jsonResponse=null;
	
    try {

        String filename = "newFile.xml";
        String workingDirectory = System.getProperty("user.dir");
        File file = new File(workingDirectory, filename);
        System.out.println(file.getAbsolutePath());
      file.createNewFile();
      JAXBContext jaxbContext = JAXBContext.newInstance(Instruction.class);
      Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

      // output pretty printed
      jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

      jaxbMarshaller.marshal(customer, file);
      jaxbMarshaller.marshal(customer, System.out);
      XMLToJson  jsonObject = new XMLToJson();
      jsonResponse = jsonObject.createJsonResponse();
      System.out.println("JSOn Data: "+ jsonResponse);
    } catch (JAXBException e) {
      e.printStackTrace();
    }
	return jsonResponse;
}
}
