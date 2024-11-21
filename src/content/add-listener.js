function AddListener() {
    function CreateSwitchBtn(trow) {
        let id = trow.getElementsByTagName('td')[1].id;
        let btn = document.createElement('a');
        btn.style.cursor = "pointer";
        btn.addEventListener("click", GetBtnOnclickListener(
            btn, trow, id
        ));
        UpdateBtn(btn, trow, id);
        return btn;
    }

    function InsertCheckBtn(node) {
        var newTd = document.createElement('td');
        newTd.append(CreateSwitchBtn(node));
        node.prepend(newTd);
    }

    function handleNewRow(mutationRecords) {
        for (let record of mutationRecords) {
            if (record.type === 'childList' && record.addedNodes.length) {
                for (let node of record.addedNodes) {
                    if (node.tagName === 'TR') {
                        // console.log('新行插入:', node);
                        InsertCheckBtn(node);
                    }
                }
            }
        }
    }
    const observer = new MutationObserver(handleNewRow);
    const config = { childList: true };
    const tableElement = document.getElementsByTagName('table')[0]
        .getElementsByTagName('tbody')[0];

    observer.observe(tableElement, config);
}