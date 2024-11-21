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
            await clearStorage();
            window.location.reload();
        });

        parent.insertBefore(newNode, nxtnode);
    }

    function AddClearButton() {
        let nxtnode = document.querySelector("body > div.ui.container.main-container > div.ui.info.message");
        let parent = nxtnode.parentElement;

        const newNode = document.createElement("div");
        newNode.className = "ui button";
        newNode.tabIndex = "0";
        newNode.innerHTML = "<span class='text'>Reset Status</span>";
        newNode.addEventListener("click", async () => {
            await clearStorage();
            window.location.reload();
        });

        parent.insertBefore(newNode, nxtnode);
    }
    AddTHead();
    AddClearButton();
}