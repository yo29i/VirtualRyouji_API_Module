package com.src.ryouji.victim.RyoujiVictimClub.Entity;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.HeaderParam;

@RequestScoped
public class RequestBodyEntity {
	
	@HeaderParam("text")
	private String text;
	
	public void settext(String text) {
		this.text = text;
	}
	
	public String gettext() {
		return this.text;
	}
}
