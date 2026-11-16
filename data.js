// ==========================================================================
// 📚 《望庐山瀑布（其二）》课文词典与诗行数据集 (data.js) - 4行逐句对齐古诗词黄金版
// 格式：["字词", "拼音", "EN 英文", "BM 马来文", "古义/本义：...\n今义：...", "u (可选:专名下划线)"]
// 结构：共 4 个区块（1–4 对应七言绝句四句），与 analysis.js 1–4 完全对齐
// ==========================================================================

const lessonTitle = "望庐山瀑布（其二）";

const lessonData = [
    // ===== 区块 1：首句（起句） =====
    ["日", "rì", "sunlight / the sun", "cahaya matahari", "名词：太阳、日光"],
    ["照", "zhào", "shines upon", "menyinari", "动词：照耀、照射"],
    ["香炉", "xiāng lú", "Incense Burner Peak (Xianglufeng)", "Puncak Xianglu (Dupa)", "古义：指庐山西北部的香炉峰（峰顶尖圆、烟云聚散如香炉，故名）\n今义：焚香的器具", "u"],
    ["生", "shēng", "produces / gives rise to", "menimbulkan / menghasilkan", "动词：升起、蒸腾起"],
    ["紫烟", "zǐ yān", "purple mist / violet clouds", "kabus berwarna ungu", "偏正短语：日光照耀下瀑布水气蒸腾折射出的紫色水雾"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 2：次句（承句）

    ["遥", "yáo", "from afar / in the distance", "dari jauh", "副词：远远地（呼应诗题中的“望”字）"],
    ["看", "kàn", "looking at", "melihat", "动词：望见、观看"],
    ["瀑布", "pù bù", "the waterfall", "air terjun", "名词：从山壁上直泻下来的水流"],
    ["挂", "guà", "hanging", "tergantung", "古义：悬挂（化动为静，将奔腾飞泻的瀑布定格为一条高悬山前的巨大白练）\n今义：借助钩绳使物体附着于某处"],
    ["前川", "qián chuān", "the mountain stream / river in front", "sungai di hadapan gunung", "古义：面前的山川、江水（川：河流、水道）\n今义：多指四川简称或平川"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 3：第三句（转句）

    ["飞流", "fēi liú", "flying torrent / plunging current", "aliran air yang飞泻 deras", "偏正短语：飞逝奔泻的瀑布水流"],
    ["直下", "zhí xià", "plunges straight down", "menjunam lurus ke bawah", "偏正短语：笔直地向下流泻"],
    ["三千尺", "sān qiān chǐ", "three thousand feet (hyperbole for immense height)", "tiga ribu kaki (kiasan sangat tinggi)", "古义：极言瀑布之高之长的夸张虚数，非实指\n今义：具体的长度数值"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 4：末句（合句）

    ["疑", "yí", "wondering if / suspecting", "menyangka / seolah-olah", "古义：怀疑、恍惚以为（动词）\n今义：疑问、可疑"],
    ["是", "shì", "it is", "ia adalah", "判断动词：是"],
    ["银河", "yín hé", "the Milky Way / Silver River", "Bima Sakti", "名词（比喻喻体）：晴朗夜空中呈银白色光带的星系天体"],
    ["落", "luò", "cascading / falling from", "jatuh mencurah dari", "动词：从高处倾落、泻下"],
    ["九天", "jiǔ tiān", "the Ninth Heaven (the highest sky)", "langit yang paling tinggi (kayangan)", "古义：天界最高处（古代传说天有九重，极言天之极高）\n今义：九天的时间"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（〔", "", "", "", ""],
    ["唐", "táng", "Tang Dynasty", "Dinasti Tang", "朝代名，唐朝", "u"],
    ["〕", "", "", "", ""],
    ["李白", "lǐ bái", "Li Bai (701–762)", "Li Bai", "唐代最伟大的浪漫主义诗人，字太白，号青莲居士，世称“诗仙”", "u"],
    ["《", "", "", "", ""],
    ["望", "wàng", "Gazing at", "Memandang", "全诗诗眼：远远眺望"],
    ["庐山", "lú shān", "Mount Lu", "Gunung Lu", "江西名山", "u"],
    ["瀑布", "pù bù", "Waterfall", "Air Terjun", "飞瀑"],
    ["（", "", "", "", ""],
    ["其二", "qí èr", "No. 2", "Bahagian Kedua", "组诗共两首，此为第二首七言绝句"],
    ["）》）", "", "", "", ""]
];
