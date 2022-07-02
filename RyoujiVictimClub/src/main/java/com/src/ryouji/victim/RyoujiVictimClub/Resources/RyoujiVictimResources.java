package com.src.ryouji.victim.RyoujiVictimClub.Resources;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.src.ryouji.victim.RyoujiVictimClub.BusinessLogic.VirtualRyoujiForSlack;
import com.src.ryouji.victim.RyoujiVictimClub.Entity.RequestBodyEntity;
import com.src.ryouji.victim.RyoujiVictimClub.Entity.RequestEntity;

@RequestScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("")
public class RyoujiVictimResources {
	
	VirtualRyoujiForSlack virtualRyoujiForSlack = new VirtualRyoujiForSlack();
	
	@POST
	@Path("/virtualryouji")
	public String Logic1() throws IOException {
		return virtualRyoujiForSlack.S_Service();
	}

}
