package com.myvoice;

import java.util.Comparator;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
//import java.sql.Timestamp; 

public class ActionSchema implements Comparable<ActionSchema>{
      String actionType;
      String Priority;
      String componentName;
      String wocUIPath;
      String wocViewUIPath;
      String qCUIPath;
      String tIUIPath;
      String ObjectKey;
      String owlPath;
      

            ActionSchema() {
                  }

                  ActionSchema(String actionType, String wocUIPath, String defSetName,String wocViewUIPath,
                		  String qCUIPath,String tIUIPath,String ObjectKey,String owlPath) {
                        this.wocUIPath = wocUIPath;
                        this.actionType = actionType;
                        this.componentName = defSetName;
                        this.wocViewUIPath= wocViewUIPath;
                        this.ObjectKey=ObjectKey;
                        this.owlPath=owlPath;
                        this.qCUIPath=qCUIPath;
                        this.tIUIPath=tIUIPath;
                        this.ObjectKey=ObjectKey ;
                  }
                  
                  @XmlElement
                  public String getactionType() {
                        return actionType;
                  }

                 public void setactionType(String actionType) {
                       this.actionType = actionType;
                 }

                 
				public String getComponentName() {
					return componentName;
				}

				public void setComponentName(String componentName) {
					this.componentName = componentName;
				}

				public String getWocUIPath() {
					return wocUIPath;
				}

				public void setWocUIPath(String wocUIPath) {
					this.wocUIPath = wocUIPath;
				}

				

                  @XmlElement
                  public String getdefSetName() {
                        return componentName;
                  }

                  public void setdefSetName(String actionType) {
                        this.componentName = componentName;
                  }
                  public String getWocViewUIPath() {
                        return wocViewUIPath;
                  }

                  public void setWocViewUIPath(String wocViewUIPath) {
                        this.wocViewUIPath = wocViewUIPath;
                  }

                  public String getqCUIPath() {
                        return qCUIPath;
                  }

                  public void setqCUIPath(String qCUIPath) {
                        this.qCUIPath = qCUIPath;
                  }

                  public String gettIUIPath() {
                        return tIUIPath;
                  }

                  public void settIUIPath(String tIUIPath) {
                        this.tIUIPath = tIUIPath;
                  }

                  public String getObjectKey() {
                        return ObjectKey;
                  }

                  public void setObjectKey(String ObjectKey) {
                        this.ObjectKey = ObjectKey;
                  }

                  public String getOwlPath() {
                        return owlPath;
                  }

                  public void setOwlPath(String owlPath) {
                        this.owlPath = owlPath;
                  } 
  
				public int compareTo(ActionSchema compatreToObj) {
					// TODO Auto-generated method stub
					ActionSchema compatreTo = (ActionSchema)compatreToObj;
					int x = Math.round(Float.parseFloat(this.Priority));
					int y = Math.round(Float.parseFloat(compatreToObj.Priority));
					return x - y;
					//return 0;
				}
            

}


