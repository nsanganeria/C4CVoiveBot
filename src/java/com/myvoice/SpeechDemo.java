package com.myvoice;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.ArrayList;
import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioSystem;

import com.darkprograms.speech.microphone.Microphone;
import com.darkprograms.speech.recognizer.GoogleResponse;
import com.darkprograms.speech.recognizer.Recognizer;
import java.util.Collections;

import javaFlacEncoder.FLACFileWriter;
import opennlp.tools.tokenize.Tokenizer;
import opennlp.tools.tokenize.TokenizerME;
import opennlp.tools.tokenize.TokenizerModel;
import opennlp.tools.tokenize.WhitespaceTokenizer;
import opennlp.tools.util.InvalidFormatException;
import org.json.JSONException;
import org.json.JSONObject;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken; 

 /**
   * Jarvis Speech API Tutorial
   * @author Aaron Gokaslan (Skylion)
   *
   */
public class SpeechDemo {
    
	public static String apikeylocal = "AIzaSyAQWkgRTgTxPOEi369PM4xk4qz0GGiWs0E";
	public static JsonArray testmain () throws JSONException, IOException {

   // Mixer.Info[] infoArray = AudioSystem.getMixerInfo();
    // for(Mixer.Info info : infoArray) {
    //    System.out.println("info: " + info.toString());
    // } 
    AudioFileFormat.Type[] typeArray = AudioSystem.getAudioFileTypes();
        for(AudioFileFormat.Type type : typeArray) {
     System.out.println("type: " + type.toString());
    } 

    Microphone mic = new Microphone(FLACFileWriter.FLAC);
        String filename = "testfile2.flac";
        String workingDirectory = System.getProperty("user.dir");
        File file = new File(workingDirectory, filename);
        System.out.println(file.getAbsolutePath());
        file.createNewFile();
   // File file = new File ("C:/Users/I335524/Desktop/SAPC4C_CLEO/src/tmp/testfile2.flac");	//Name your file whatever you want
    try {
      mic.captureAudioToFile (file);
    } catch (Exception ex) {
      //Microphone not available or some other error.
      System.out.println ("ERROR: Microphone is not availible.");
      ex.printStackTrace ();
    }

 
    
    
    
    // User records the voice here. Microphone starts a separate thread so do whatever you want
     // in the mean time. Show a recording icon or whatever.
     
    try {
      System.out.println ("Recording...");
      Thread.sleep (4000);	//In our case, we'll just wait 5 seconds.
      mic.close ();
    } catch (InterruptedException ex) {
      ex.printStackTrace ();
    }

    mic.close ();		//Ends recording and frees the resources
    System.out.println ("Recording stopped.");
    String gResponse = null;
    //Recognizer recognizer = new Recognizer (Recognizer.Languages.ENGLISH_US, System.getProperty("google-api-key"));
    Recognizer recognizer = new Recognizer (Recognizer.Languages.ENGLISH_US, apikeylocal);
    
   // Although auto-detect is available, it is recommended you select your region for added accuracy.
    try {
      int maxNumOfResponses = 4;
      System.out.println("Sample rate is: " + (int) mic.getAudioFormat().getSampleRate());
      GoogleResponse response = recognizer.getRecognizedDataForFlac (file, maxNumOfResponses, (int) mic.getAudioFormat().getSampleRate ());
      System.out.println ("Google Response: " + response.getResponse ());
      if ( response.getResponse () != null )
    	{
            gResponse = response.getResponse();
    	  System.out.println ("Google is " + Double.parseDouble (response.getConfidence ()) * 100 + "% confident in" + " the reply");
    	  System.out.println ("Other Possible responses are: ");
    	  for (String s:response.getOtherPossibleResponses ()) {
    	  System.out.println ("\t" + s);
         }
      }	  
      else 
      {
    	  System.out.println("Audio not recorded or no resposnse from server"); 
      }  
    }
    catch (Exception ex) {
      // TODO Handle how to respond if Google cannot be contacted
      System.out.println ("ERROR: Google cannot be contacted");
      ex.printStackTrace ();
    }
	
    ArrayList<String> objcodelist = new ArrayList<String>();
    ArrayList<String> defsetlist  = new ArrayList<String>();
  //  ArrayList<String> actionlist  = new ArrayList<String>();
    ArrayList<String> uipath      = new ArrayList<String>();
            ArrayList<String> actions = null;
  //  ArrayList<String> nonAppObjlist  = new ArrayList<String>();
    ArrayList<String> actionCompleteList = new ArrayList<String>();
    //ArrayList<String> objcodelist = new ArrayList<String>();
    //objcodelist.add("MAT,Materials,material");
    //objcodelist.add("MAT,Materials,product");
    //objcodelist.add("OPP,Opportunity,opportunit");
   // file.deleteOnExit ();	//Deletes the file as it is no longer necessary.
    
    ExcelRead rd = new ExcelRead();
    ExcelRead.excelObject obj = new ExcelRead().new excelObject();
    try {
		obj = rd.read();
	} catch (IOException e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	}
    ArrayList<ArrayList<String>> arr = new ArrayList<ArrayList<String>>();
		arr = obj.arrayofexcel;
		objcodelist = arr.get(0);
		defsetlist = arr.get(1);
		actionCompleteList = arr.get(2);
		uipath = arr.get(3);

  //  nonAppObjlist  = arr.get(4);
    
        String inputStr = gResponse;
    	Tokenizer tokenizer = WhitespaceTokenizer.INSTANCE;
        String[] tokens = inputStr.split(" "); 
       // String tokens[] = tokenizer.tokenize(inputStr);
      
        objcodelist = find_objects(objcodelist, inputStr);
		defsetlist = find_defsets(defsetlist, inputStr);
		actions = find_actions(actionCompleteList, inputStr);

	ArrayList<ActionSchema> actionSet = new ArrayList<ActionSchema>();
	actionSet = generateActionsCT(objcodelist, defsetlist, actions, uipath, inputStr , actionCompleteList,tokens);
    //	XMLFileCreation genxml = new XMLFileCreation();
    //	JSONObject jsonResponse = genxml.createXML(actionSet);
                Gson gson = new Gson();
		JsonElement element = gson.toJsonTree(actionSet, new TypeToken<ArrayList<ActionSchema>>() {}.getType());
		JsonArray jsonArray = element.getAsJsonArray();    
        System.out.println("----");
    	//System.out.println(actionList.get(0));
    	//System.out.println(actionList.get(1));       
        return jsonArray;
	}	
        
//	private static ArrayList<String> find_nonAppObjlist(ArrayList<String> nonAppObjlist, String inputStr) {
//		// TODO Auto-generated method stub
//		String pattern = null;
//		String code    = null;
//		ArrayList<String> objarr = new ArrayList<String>();
//
//
//        System.out.println("-- finding matching non application actions ---");
//		for(int i=0; i < nonAppObjlist.size() ; i++) {
//		//System.out.println(i);
//		String[] parts = nonAppObjlist.get(i).split(",");
//		code	= parts[0];
//		pattern = parts[1];
//		Pattern testPattern = Pattern.compile(pattern);
//		Matcher m = testPattern.matcher(inputStr);
//		if (m.find())
//		{
//			System.out.println(code + " " + pattern );
//			objarr.add(code);
//		}
//		
//    }
//	return objarr;
//	}

	public static ArrayList<String> find_objects(ArrayList<String> objcodelist, String inputStr) {

	/**
             * excel data ------
             * 
              * MAT Products material product MATADM Products Admin product admin material
             * admin PRDCAT Product Category product category
             * 
              * Identify Code based in keywords like MAT with "material" or "product"
             */
        
             String pattern = null;
             String code = null;
             ArrayList<String> objarr = new ArrayList<String>();
             boolean stop = false;
             System.out.println("-- finding matching objects ---");
        if(inputStr.contains("work centre")||inputStr.contains("work center")||inputStr.contains("workcenter")||inputStr.contains("workcentre")|| inputStr.contains("Work Centre")||inputStr.contains("Work center"))
        {
            
             for (int i = 1; i < objcodelist.size(); i++) {
                    // System.out.println(i);
                    String[] parts = objcodelist.get(i).split(",");
                    code = parts[0]; // always first the column
                    for (int j = 2; j < parts.length; j++) {
                           // always starts from 2nd column to last
                           pattern = parts[j];
                           Pattern testPattern = Pattern.compile(pattern);
                           Matcher m = testPattern.matcher(inputStr);
                           if(stop == true)
                                 break;
                           if (m.find()) {
                                 System.out.println(code + " " + pattern);
                                 objarr.add(code);
                                 stop = true;
                                 break;
                           }
                           
                    }

             }
        }
        
             return objarr;
	}


	
	public static ArrayList<String> find_defsets(ArrayList<String> objcodelist, String inputStr) {
		String pattern = null;
		String code = null;
		String lastMatch = null;
		ArrayList<String> objarr = new ArrayList<String>();

		System.out.println("-- finding matching default sets ---");
		for (int i = 1; i < objcodelist.size(); i++) {
			// System.out.println(i);
			String[] parts = objcodelist.get(i).split(",");
			code = parts[0]; // always first the column
			if (code.equals(lastMatch) != true) {
				for (int j = 2; j < parts.length; j++) {
					// always starts from 2nd column to last
					pattern = parts[j];
					Pattern testPattern = Pattern.compile(pattern);
					Matcher m = testPattern.matcher(inputStr);
					if (m.find()) {
						System.out.println(code + " " + pattern);
						objarr.add(objcodelist.get(i));
						lastMatch = code;
						break;
					}
				}
			}

		}
	return objarr;
	}

	
	public static ArrayList<String> find_actions(ArrayList<String> objcodelist, String inputStr) {
		String pattern = null;
		String code = null;

		ArrayList<String> objarr = new ArrayList<String>();

		System.out.println("-- finding matching actions ---");
		for (int i = 1; i < objcodelist.size(); i++) {
			// System.out.println(i);
			String[] parts = objcodelist.get(i).split(",");
                        String temp = "";
			code = parts[0]; // always first the column
			for (int j = 2; j < parts.length; j++) {
				// always starts from 2nd column to last
				pattern = parts[j];
				Pattern testPattern = Pattern.compile(pattern);
				Matcher m = testPattern.matcher(inputStr);
				if (m.find()) {
                                        temp = parts[0] + "," + parts[1];
                                        temp = temp + "," + pattern;
					System.out.println(code + " " + pattern);
					objarr.add(temp);
					break;
				}
			}

		}
		return objarr;
	}

	
	private static ArrayList<ActionSchema> generateActionsCT(ArrayList<String> objcodelist,
			ArrayList<String> defsetlist, ArrayList<String> actions, ArrayList<String> uipath, String inputStr ,
			ArrayList<String> actionCompleteList,String[] tokens) {
		// TODO Auto-generated method stub
		String objectCode, defset = null, action;
		ActionSchema temp;

		String[] parts;
		String code;
		String priority;
		String objcode, objtype, objpath;
		String defsetname = null;
		ArrayList<ActionSchema> actionList = new ArrayList<ActionSchema>();
                //add header data
                temp = new ActionSchema();
                temp.actionType = "HeaderData";
                temp.ObjectKey  = inputStr;
                temp.Priority   = "0";
                actionList.add(temp);
                
		// add direct actions
		for (int k = 0; k < actions.size(); k++) {
			temp = new ActionSchema();
			parts = actions.get(k).split(",");
			objcode = parts[0];
			priority = parts[1];
			objcode = objcode.replaceAll("\\s", ""); //strnage white space issue
                        temp.actionType = objcode;
		        temp.Priority = priority;
			if(objcode.equalsIgnoreCase("LogOff") || objcode.equalsIgnoreCase("Login")|| objcode.equalsIgnoreCase("CloseTI") || objcode.equalsIgnoreCase("ShowNotifications")
					|| objcode.equals("ClearBasicSearch") || objcode.equalsIgnoreCase("ShowMenu") || objcode.equalsIgnoreCase("AlternateVisualizationChunkView")
                                        || objcode.equalsIgnoreCase("AlternateVisualizationCalendarView")||objcode.equalsIgnoreCase("AlternateVisualizationTableView")
                                        || objcode.equalsIgnoreCase("AlternateVisualizationMapView")|| objcode.equalsIgnoreCase("ShowRecentHistory")
                                        || objcode.equalsIgnoreCase("ShowFavorites") || objcode.equalsIgnoreCase("ShowTags")||objcode.equalsIgnoreCase("ShowFlags")
                                        ||objcode.equalsIgnoreCase("OpenExecuteDefaultSetDropDown") || objcode.equalsIgnoreCase("AVPie") 
                                        || objcode.equalsIgnoreCase("AVBar") || objcode.equalsIgnoreCase("AVColumn") || objcode.equalsIgnoreCase("AVTable")
                                        || objcode.equalsIgnoreCase("AVLine") || objcode.equalsIgnoreCase("AVScatter") || objcode.equalsIgnoreCase("AVArea")
                                        || objcode.equalsIgnoreCase("AVBullet") || objcode.equalsIgnoreCase("AVHeatMap") || objcode.equalsIgnoreCase("AVMap")
                                        || objcode.equalsIgnoreCase("AVBubble") || objcode.equalsIgnoreCase("AVDoughnut") || objcode.equalsIgnoreCase("AVStackedBar")
                                        || objcode.equalsIgnoreCase("AVStackedColumn") || objcode.equalsIgnoreCase("SearchNearBy"))  {
				System.out.println("--"+objcode+"--" + priority);
				actionList.add(temp);
			}
                        if(objcode.equalsIgnoreCase("BasicSearch"))
                        {
                            String objectKey="";
                            String pattern = parts[2];
                            boolean found = false;
                            for(int i=0;i<tokens.length;i++)
                            {
                                if (found && !tokens[i].equalsIgnoreCase("for"))
                                objectKey=objectKey+tokens[i];
                                if(tokens[i].equalsIgnoreCase(pattern))
                                {
                                    found = true;
                                    
                                }
                            }
                            temp.ObjectKey=objectKey;
                            actionList.add(temp);
                            System.out.print(temp.actionType+" "+temp.ObjectKey);
                        }
                        
                        if(objcode.equalsIgnoreCase("OpenTI"))
                        {
                            String objectKey="";
                            String pattern = parts[2];
                            int count =0;
                            String[] pat = pattern.split(" ");
                            if(inputStr.contains("ti")|| inputStr.contains("Ti") || inputStr.contains("TI")||inputStr.contains("thinginspector"))
                            {
                            for(int i=0;i<tokens.length;i++)
                            {
                                if(count==pat.length &&  (!tokens[i].equalsIgnoreCase("thing") || !tokens[i].equalsIgnoreCase("inspector") || !tokens[i].equalsIgnoreCase("thinginspector")))
                                 objectKey=objectKey+tokens[i];
                                for(int j=0;j<pat.length;j++)
                                {
                                if(tokens[i].equalsIgnoreCase(pat[j]))
                                {
                                    count++;
                                }
                                }
                            }
                            }
//                            else
//                            {
//                                boolean found=false;
//                               for(int i=0;i<tokens.length;i++)
//                               {
//                                   if(found)
//                                   objectKey=objectKey+tokens[i];
//                                   if(tokens[i].equalsIgnoreCase("open")|| tokens[i].equalsIgnoreCase("show"))
//                                   {
//                                       found=true;
//                                   }
//                                   
//                               }
//                                
//                                
//                            }
                            temp.ObjectKey=objectKey;
                            actionList.add(temp);
                            System.out.print(temp.actionType+" "+temp.ObjectKey);
                        }
                        
                        if(objcode.equalsIgnoreCase("GoToFacet"))
                        {
                            String objectKey="";
                            String pattern = parts[2];
                            boolean found = false;
                              for(int i=0;i<tokens.length;i++)
                            {
                                if (found)
                                objectKey=objectKey+tokens[i];
                                if(tokens[i].equalsIgnoreCase(pattern))
                                {
                                    found = true;
                                    
                                }
                            }
                            temp.ObjectKey=objectKey;
                            actionList.add(temp);
                            System.out.print(temp.actionType+" "+temp.ObjectKey);
                            
                        }
                        
                          if(objcode.equalsIgnoreCase("ExecuteAction"))
                        {
                            String objectKey="";
                            boolean found = false;
                            String pattern = parts[2];
                            if(tokens[0].equalsIgnoreCase("set"))
                            {
                              for(int i=0;i<tokens.length;i++)
                            {
                                if(!tokens[i].equalsIgnoreCase("status"))
                                {
                                    objectKey = objectKey+tokens[i];
                                }
                            }
                            }
                            else
                            {
                                 for(int i=0;i<tokens.length;i++)
                            {
                                if (found)
                                objectKey=objectKey+tokens[i];
                                if(tokens[i].equalsIgnoreCase("action"))
                                {
                                    found = true;
                                    
                                }
                            }
                                
                            }
                            temp.ObjectKey=objectKey;
                            actionList.add(temp);
                            System.out.print(temp.actionType+" "+temp.ObjectKey);
                            
                        }
            
			
			//objcode.equalsIgnoreCase("CloseTI") || objcode.equalsIgnoreCase("ShowNotifications")
			//|| objcode.equals("ClearBasicSearch"))
			
		}

		// add action of type execute default set, more than 1 ?
		for (int j = 0; j < defsetlist.size(); j++) {
			parts = defsetlist.get(j).split(",");
			objcode = parts[0];
			defsetname = parts[1];

			temp = new ActionSchema();
			temp.actionType = "ExecuteDefaultSet";
			temp.Priority = "3"; //"hard coded "
			temp.ObjectKey = defsetname;
			actionList.add(temp);
			break; // don't allow > 1
		}

		// add woc
		for (int p = 0; p < objcodelist.size(); p++) {
			temp = new ActionSchema();
			temp.actionType = "WorkCenterViewNavigation";
			temp.Priority = "2"; //"hard code !!"

			for (int i = 0; i < uipath.size(); i++) {
				parts = uipath.get(i).split(",");

				objcode = parts[0];
				objtype = parts[1];
				objpath = parts[2];
				objectCode = objcodelist.get(p);
				if (objcode.equalsIgnoreCase(objectCode)) {
					if (objtype.equalsIgnoreCase("WC"))
						temp.wocUIPath = objpath;
					if (objtype.equalsIgnoreCase("WCVIEW"))
						temp.wocViewUIPath = objpath;
					if (objtype.equalsIgnoreCase("OWL"))
						temp.owlPath = objpath;
					// if( defset != null)
				}
			}
			actionList.add(temp);
		}
		// generate action and append to actionlist
		//actionList.sort(null);
                Collections.sort(actionList);
		System.out.print("--- print list--");
		for(int x=0;x<actionList.size();x++) {
			System.out.println(actionList.get(x).actionType + " "+actionList.get(x).Priority);
		}
		return actionList;
	}

	
}