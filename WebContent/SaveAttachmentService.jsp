
<%@ page import ="java.sql.*" %>
<%@ page import ="org.json.*" %>

<%@ page import ="java.io.*"%>
<%@ page import ="java.util.*"%>


<%  



		try {
			
			Random rnd = new Random();
			int n = 100000 + rnd.nextInt(900000);
			
			String tempName = "Image"+Integer.toString(n);
			session.setAttribute("tempName", tempName+".jpg");
			
			
			String root = getServletContext().getRealPath("/");
			File path = new File(root + "/attachments");
			if (!path.exists()) {
                boolean status = path.mkdirs();
            }
			
			InputStream is = request.getInputStream();
		    OutputStream os = new FileOutputStream(path + "/"+tempName+".jpg"); 
		    
		    session.setAttribute("attachmentSource",path + "/"+tempName+".jpg");
		    System.out.println(path + "/"+tempName+".jpg");
		    
		    
		     
		    byte[] buffer = new byte[1024];
		    int bytesRead;
		    while((bytesRead = is.read(buffer)) !=-1){
		        os.write(buffer, 0, bytesRead);
		    }
		    is.close();
		    os.flush();
		    os.close();
		} catch (IOException e) {
		    e.printStackTrace();
		}
%>  