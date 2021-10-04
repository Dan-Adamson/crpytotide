package com.example.cryptoticker;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.ServletWebRequest;

@Controller
public class CryptoErrorController implements ErrorController {
    
	@Autowired
	private ErrorAttributes errorAttributes;
	
	@RequestMapping("/error")  
	public @ResponseBody String handleError(HttpServletRequest req) {
		
		ServletWebRequest servletWebRequest = new ServletWebRequest(req);
		ErrorAttributeOptions options = ErrorAttributeOptions
				.defaults()
				.including(ErrorAttributeOptions.Include.MESSAGE);	// grabs the message from the exception class
		Map<String, Object> errors = errorAttributes.getErrorAttributes(servletWebRequest, options);

		StringBuilder builder = new StringBuilder();
		builder.append("<html><body>");
		builder.append("<h2>ERROR SUMMARY</h2>");

		builder.append("<table border='1.5'>");
		errors.forEach((key, value) -> {
			builder.append("<tr>").append("<td>").append(key).append("</td>").append("<td>").append(value).append("</td>")
					.append("</tr>");
		});
		builder.append("</table>");
		builder.append("</body></html>");
		return builder.toString();
	}

}