<%@ page import ="java.sql.*" %>
<%@ page import ="org.json.*" %>
<%@ page import ="java.io.*"%>
<%@ page import ="java.util.*"%>
<%@ page import="java.io.File" %>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.*"%>
<%@ page import ="java.io.File"%>


<%@ page import="java.net.*, java.io.*, java.util.*,org.json.*,
					org.apache.commons.httpclient.HttpClient,
					org.apache.commons.httpclient.methods.PostMethod,
					org.apache.commons.httpclient.HttpStatus" %>  


<%@ page import ="org.apache.commons.httpclient.methods.multipart.FilePart"%>
<%@ page import ="org.apache.commons.httpclient.methods.multipart.StringPart"%>
<%@ page import ="org.apache.commons.httpclient.methods.multipart.MultipartRequestEntity"%>
<%@ page import ="org.apache.commons.httpclient.methods.multipart.Part"%>


<%@ page import ="org.apache.http.entity.mime.content.FileBody"%>
<%@ page import ="org.apache.http.entity.mime.content.StringBody"%>
<%@ page import ="org.apache.http.entity.mime.content.ByteArrayBody"%>
<%@ page import ="java.net.*"%>



<%  
			
				String attachmentName = request.getParameter("attachmentName");    
				String attachmentDesc = request.getParameter("attachmentDesc");
				String userName = request.getParameter("userName");    
				String caseEventId = request.getParameter("caseEventId");


				HttpClient httpClient = (HttpClient)session.getAttribute("client"); 
				PostMethod postMethod = new PostMethod("http://192.168.0.117:8080/Evidencer/evidencer/captureAttachment"); 
				
				String attachmentSource = session.getAttribute("attachmentSource").toString();
				
					try
					{
					
					File fileToUpload = new File(attachmentSource);
					
					Part[] parts = {
						      new StringPart("caseEventId",caseEventId),
						      new StringPart("userName",userName),
						      new StringPart("attachmentName",attachmentName),
						      new StringPart("attachmentDesc",attachmentDesc),
						      new FilePart("file", fileToUpload)
						  };
					
					postMethod.setRequestEntity(new MultipartRequestEntity(parts, postMethod.getParams()));
					httpClient.executeMethod(postMethod);
					System.out.println("Evidencer Web Server : "+postMethod.getResponseBodyAsString());
					out.println(postMethod.getResponseBodyAsString());
				}
				catch (Exception e)
				{
					e.printStackTrace();
				}
				finally
				{
					postMethod.releaseConnection();
				}
						
			
		
%>

