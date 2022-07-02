package com.src.ryouji.victim.RyoujiVictimClub.BusinessLogic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.URL;

import javax.enterprise.context.RequestScoped;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import com.src.ryouji.victim.RyoujiVictimClub.Entity.RequestBodyEntity;
import com.src.ryouji.victim.RyoujiVictimClub.Entity.RequestEntity;

@RequestScoped
public class VirtualRyoujiForSlack {
	
	RequestEntity requestEntity = new RequestEntity();
	
	RequestBodyEntity requestBodyEntity = new RequestBodyEntity();
	
	public VirtualRyoujiForSlack() {
		
	}
	
	public String S_Service() throws IOException {
		String Response = RequestSlack();
		
		return Response;
	}
	
	private String RequestSlack() throws IOException{
		String json = "{\"text\": \"Hello\"}";
		try {
            
            URL connectUrl = new URL(
                    "https://hooks.slack.com/services/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");
            
            HttpsURLConnection urlconn = (HttpsURLConnection) connectUrl
                    .openConnection();
            urlconn.setRequestMethod("POST");
            urlconn.setDoInput(true);
            urlconn.setDoOutput(true);
            urlconn.setRequestProperty("Content-Type", "application/json; charset=utf-8");
            
            TrustManager[] trustManager = { new X509TrustManager() {
                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
                @Override
                public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
                	
                }
                @Override
                public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
                	
                }
            } };
            
            SSLContext sslcontext = SSLContext.getInstance("SSL");
            sslcontext.init(null, trustManager, null);
            HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
                @Override
                public boolean verify(String hostname, SSLSession session) {
                    return true;
                }
            });
            
            urlconn.setSSLSocketFactory(sslcontext.getSocketFactory());
            urlconn.connect();
            
            PrintStream printStream = new PrintStream(urlconn.getOutputStream());
    		printStream.print(json);
    		printStream.close();
            
            BufferedReader reader = new BufferedReader(new InputStreamReader(
                    urlconn.getInputStream(), "utf8"));
            String line;
            StringBuilder sb = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            reader.close();
            urlconn.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
return null;
	}

}
