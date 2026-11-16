// ==========================================================================
// 📖 《望庐山瀑布（其二）》深度文本赏析数据库 (analysis.js) - 第一句至第四句标准版
// ==========================================================================

const sectionUnit = "句"; // 👈 供 index.html 识别，将“第X段”自动切换为“第X句”

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全诗白话译文】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "日光照耀在" + U_TAG("香炉峰") + "上，蒸腾起一片紫色的轻烟水雾；远远望去，奔腾的瀑布就像一条白色绢匹倒挂在面前的山川上。湍急的水流笔直向下飞泻长达三千尺，恍惚中让人以为是银河从九天之上倾泻奔落到了人间。" +
        "</span><br><br>" +
        "<strong>【创作背景与艺术特色（“诗仙”李白的浪漫绝唱）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《望" + U_TAG("庐山") + "瀑布（其二）》是盛唐最伟大的浪漫主义诗人" + U_TAG("李白") + "（字太白，号青莲居士，世称“诗仙”）五十岁左右隐居庐山屏风叠时创作的七言绝句名篇。全诗紧扣诗眼<strong>“望”</strong>字，第一句远景烘托（日照香炉生紫烟）、第二句静态定格（遥看瀑布挂前川）、第三句动态特写（飞流直下三千尺），第四句以惊天地泣鬼神的奇特想象（疑是银河落九天）收束，将庐山瀑布喷薄而下、飞流万丈的磅礴气势刻画得淋漓尽致，抒发了对祖国壮丽山河的由衷赞美与豪迈自信的襟怀。</span>",

    paragraphs: {
        1: "<strong>【第一句赏析：日照香炉，紫烟升腾——绚丽雄浑的背景烘托】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "日照" + U_TAG("香炉") + "生[紫烟]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "日光照耀在" + U_TAG("香炉峰") + "上，蒸腾起一片[紫色的轻烟水雾]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("香炉", "指庐山西北部的香炉峰（峰顶尖圆、烟云聚散如香炉）", "焚香的器具") +
                   GRAMMAR_TAG("谐音双关与背景渲染", "由“香炉峰”之名巧妙引发“生紫烟”的联想，灿烂红日与紫色云雾交织，为瀑布出场铺设瑰丽背景") +
               "</div>" +
           "</div>",

        2: "<strong>【第二句赏析：遥看飞瀑，“挂”字化动为静】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[遥]看瀑布[挂][前川]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "[远远]✓望去，奔腾的瀑布就像一条白色绢匹[倒挂]✓在[面前的山川]✓上。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("前川", "面前的山川、江水", "平川") +
                   GRAMMAR_TAG("千古炼字（“挂”字）", "化动为静！紧扣诗眼“望（遥看）”，把奔腾咆哮的瀑布定格为一条高悬于苍翠山前的洁白绸带") +
               "</div>" +
           "</div>",

        3: "<strong>【第三句赏析：飞流直下，三千尺极度夸张】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[飞流][直下][三千尺]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "[湍急的水流]✓[笔直向下飞泻]✓长达[三千尺]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("三千尺", "极言瀑布之高之长的夸张虚数，非实指", "具体长度数值") +
                   GRAMMAR_TAG("动态特写与极度夸张", "由第二句的静态全景切换为极速奔泻的动态特写，“飞”显水势之急，“直下”显山壁之陡，“三千尺”极言落差之巨") +
               "</div>" +
           "</div>",

        4: "<strong>【第四句赏析：银河落九天，奇特比喻冠绝古今】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[疑]是[银河]落[九天]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "[恍惚中让人以为]✓是璀璨的[银河]✓从[九天之上（天界最高处）]✓倾泻奔落到了人间。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("疑", "怀疑、恍惚以为（动词）", "疑问、可疑") +
                   ANCIENT_MODERN_TAG("九天", "古代传说天有九重，极言天之极高", "九天的时间") +
                   GRAMMAR_TAG("理解与探究第2题（夸张兼比喻）", "一个“疑”字写出诗人被奇景震撼时的恍惚错觉，将飞瀑比作九重天宇倾落的璀璨银河，气吞山河") +
               "</div>" +
           "</div>"
    }
};
