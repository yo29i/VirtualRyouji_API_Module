package com.src.ryouji.victim.RyoujiVictimClub.Entity;

import javax.enterprise.context.RequestScoped;

@RequestScoped
public class RequestEntity {
	
	private String text;
	
	public String gettext() {
		return text;
	}
	
	public void settext(String text) {
		this.text = text;
	}

}
