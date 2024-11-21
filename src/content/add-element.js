function AddElement() {
    function AddTHead() {
        var newTh = document.createElement('th');
        // 设置新th元素的内容（可选）
        newTh.textContent = "Status";
        document.getElementsByTagName('table')[0]
            .getElementsByTagName('thead')[0]
            .getElementsByTagName('tr')[0]
            .prepend(newTh);
    }

    function AddClearButton() {
        let nxtnode = document.querySelector("body > div.ui.container.main-container > div.ui.info.message");
        let parent = nxtnode.parentElement;

        const newNode = document.createElement("div");
        newNode.className = "ui button";
        newNode.tabIndex = "0";
        newNode.innerHTML = "<span class='text'>Reset Status</span>";
        newNode.addEventListener("click", async () => {
            if (confirm("这将清除所有课程中的改题数据，是否继续？")) {
                await clearStorage();
                window.location.reload();
            }
        });

        parent.insertBefore(newNode, nxtnode);
    }
    AddTHead();
    AddClearButton();
}