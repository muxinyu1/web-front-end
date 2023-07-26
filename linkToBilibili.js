function moveTo(name)
{
    window.open(url(name), "_blank");
}
function play(audio)
{
    audio.play();
}
function url(name)
{
    var bangomiName = name.id;
    switch (bangomiName)
    {
        case "来自深渊":
            return "https://www.bilibili.com/bangumi/play/ss34544/?from=search&seid=10276551422329368402&spm_id_from=333.337.0.0";
        case "你的名字。":
            return "https://www.imdb.com/title/tt5311514/?ref_=fn_al_tt_1";
        case "鬼灭之刃":
            return "https://www.bilibili.com/bangumi/play/ss26801/?from=search&seid=288731956755621889&spm_id_from=333.337.0.0";
        case "变态王子与不笑猫":
            return "https://www.bilibili.com/bangumi/play/ss413/?from=search&seid=9297590928731349125&spm_id_from=333.337.0.0";
    }
}