chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction'
})


// Listen for messages from the popup
chrome.runtime.onMessage.addListener((msg, sender, response) => {

    let errors = document.querySelectorAll('.xdebug-error');
    let s = '';
   	for (var e = 0, len = errors.length; e < len; e++)
   	   	s += errors[e].outerHTML;
   	
    
    response(s);

});