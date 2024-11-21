async function UpdateBtn(btnNode, trNode, id) {
    function ToFinish() {
        btnNode.textContent = "Cancel";
        trNode.style.backgroundColor = "#BBFFCC";
    }
    function ToUnfinish() {
        btnNode.textContent = "Finish";
        trNode.style.backgroundColor = "";
    }
    let stat = await getStorage();
    console.log(stat[id]);
    if (stat[id]) {
        console.log("#", id)
        ToFinish();
    } else {
        ToUnfinish();
    }
}

function GetBtnOnclickListener(btnNode, trNode, id) {
    // console.log(btnNode, trNode, id);
    return (async () => {
        let stats = await getStorage();
        let stat = {};
        stat[id] = !stats[id];
        await setStorage(stat);
        await UpdateBtn(btnNode, trNode, id);
    });
}