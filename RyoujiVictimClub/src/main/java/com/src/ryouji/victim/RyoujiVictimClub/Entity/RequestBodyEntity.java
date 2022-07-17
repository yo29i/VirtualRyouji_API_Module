package com.src.ryouji.victim.RyoujiVictimClub.Entity;

import java.util.ArrayList;

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
	
	@HeaderParam("channel")
	private String channel;
	
	public void setchannel(String channel) {
		this.channel = channel;
	}
	
	public String getchannel() {
		return this.channel;
	}
	
	@HeaderParam("attachments")
	private ArrayList<String> attachments;
	List<String> list = new ArrayList<>();

	list.add("fallback");
	list.add("color");
	list.add("pretext");
	list.add("author_name");
	list.add("author_link");
	list.add("author_icon");
	list.add("title");
	list.add("title_link");
	list.add("text");
	list.add("fields");
	list.add("image_url");
	list.add("thumb_url");
	list.add("footer");
	list.add("footer_icon");
	list.add("ts");
	
	public void setattachments(ArrayList<String> attachments) {
		this.attachments = attachments;
	}
	
	public ArrayList<String> getattachments() {
		return this.attachments;
	}


}
