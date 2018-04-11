//import java.sql.Timestamp;
package com.myvoice;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

 @XmlRootElement
public class Instruction {
	//Timestamp time;

	ArrayList<ActionSchema> actionList;

	Instruction() {
	}

   /*  @XmlElement
	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}*/

	@XmlElement
	public ArrayList<ActionSchema> getAction() {
		return actionList;
	}

	public void setActionList(ArrayList<ActionSchema> actionList) {
		this.actionList = actionList;
	}
}
