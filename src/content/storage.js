async function getStorage() {
    let res = await chrome.runtime.sendMessage({ method: "getStorage" });
    console.log(res);
    return res.data;
}

async function setStorage(data) {
    console.log(data)
    let res = await chrome.runtime.sendMessage({ method: "setStorage", data: data });
    console.log(res.status)
}

async function clearStorage() {
    let res = await chrome.runtime.sendMessage({method: "clearStorage"});
    console.log(res.status)
    await getStorage();
}