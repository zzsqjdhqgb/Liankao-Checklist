// background.js 或 service_worker.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStorage") {
        chrome.storage.sync.get(null, function(items) {
            sendResponse({data: items});
        });
    } else if (request.method == "setStorage") {
        chrome.storage.sync.set(request.data, function() {
            sendResponse({status: "Settings saved"});
        });
    } else if (request.method == "clearStorage") {
        chrome.storage.sync.clear(function() {
            console.log('Storage cleared');
            // 可以发送一个响应回内容脚本，确认存储已清空
            sendResponse({status: "Storage cleared"});
        });
    }
    return true; // 表示异步响应消息
});