var requestFilter = {
   urls: [
      "<all_urls>"
   ]
};

chrome.experimental.webRequest.onBeforeSendHeaders.addListener(function(details) {
   var headers = details.requestHeaders;
   for(var i = 0, l = headers.length; i < l; ++i) {
      if( headers[i].name == 'User-Agent' ) {
         headers[i].value = 'Mozilla/5.0 Macintosh Intel Mac OS X 10.6 rv 5.0 Gecko/20100101 Firefox/5.0';
         break;
      }
   }
   return { requestHeaders: headers };
}, requestFilter, ['requestHeaders','blocking']);
