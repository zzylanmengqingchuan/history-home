import type {
  HistoricalFigure,
  StoryTemplate,
  TemplateId,
  Worldline,
} from "./types";

export const TEMPLATES: StoryTemplate[] = [
  {
    id: "if-alive",
    title: "如果 XX 活到今天会怎样",
    desc: "把古人丢进现代，看碰撞与对话。",
    icon: "⏳",
    fields: [
      {
        key: "figure",
        label: "历史人物",
        placeholder: "如：苏轼、武则天、达·芬奇",
      },
      {
        key: "scene",
        label: "现代场景",
        placeholder: "如：开直播、进互联网公司、逛超市",
      },
      {
        key: "tone",
        label: "故事语气",
        placeholder: "如：轻松幽默 / 冷峻现实 / 诗意温柔",
      },
    ],
  },
  {
    id: "diary",
    title: "给 XX 写一段日记",
    desc: "以第一人称，重现某个夜晚的内心。",
    icon: "📜",
    fields: [
      {
        key: "figure",
        label: "日记主人",
        placeholder: "如：李清照、林肯、居里夫人",
      },
      {
        key: "date",
        label: "时间与地点",
        placeholder: "如：靖康二年 · 南渡路上",
      },
      {
        key: "mood",
        label: "心境关键词",
        placeholder: "如：离乱、思念、倔强",
      },
      {
        key: "detail",
        label: "想写入的细节（可选）",
        placeholder: "如：一盏残灯、一封未寄出的信",
        multiline: true,
      },
    ],
  },
  {
    id: "encounter",
    title: "两个历史人物相遇",
    desc: "跨时空对谈：观点交锋，火花四溅。",
    icon: "⚔️",
    fields: [
      {
        key: "figureA",
        label: "人物 A",
        placeholder: "如：孔子",
      },
      {
        key: "figureB",
        label: "人物 B",
        placeholder: "如：尼采",
      },
      {
        key: "place",
        label: "相遇地点",
        placeholder: "如：午夜图书馆、长安夜市",
      },
      {
        key: "topic",
        label: "聊什么",
        placeholder: "如：何为幸福、权力与自由",
      },
    ],
  },
  {
    id: "continue",
    title: "续写已有故事",
    desc: "接上一段世界线，往前再走几步。",
    icon: "🌀",
    fields: [
      {
        key: "prev",
        label: "已有片段",
        placeholder: "粘贴或简述上一章内容……",
        multiline: true,
      },
      {
        key: "direction",
        label: "希望往哪发展",
        placeholder: "如：突然出现第三个人、时间线折叠",
      },
      {
        key: "length",
        label: "篇幅偏好",
        placeholder: "如：短小精悍 / 一章小说感",
      },
    ],
  },
];

export const WORLDLINES: Worldline[] = [
  {
    id: "wl-1",
    title: "东坡夜航船",
    era: "北宋 · 平行支线",
    characters: ["苏轼", "黄庭坚", "佛印"],
    summary:
      "苏东坡在贬谪途中误入一条永不靠岸的夜航船，船上全是尚未出生的读者。",
    fragments: [
      "船外浪声如鼓。东坡问：「诸君从何而来？」有人答：「从你的诗句里来。」",
      "佛印敲木鱼，木鱼里掉出一张船票——写着「明日黄州」。",
      "黄庭坚低声道：「若此船不停，我们是否便成了传说本身？」",
    ],
    color: "bg-secondary",
  },
  {
    id: "wl-2",
    title: "长安地铁 · 未央线",
    era: "盛唐 × 当代",
    characters: ["李白", "杜甫", "驿站 AI"],
    summary:
      "李白在未央地铁站迷路，杜甫递来一张交通卡，AI 播报：「下一站——青莲。」",
    fragments: [
      "车厢晃动，李白望着玻璃里的自己：「镜中人，亦醉否？」",
      "杜甫把面包掰成两半：「君不见，现代人的早餐也分贫富。」",
      "广播忽然改口：「前方到站——将进酒。请有诗意的乘客优先下车。」",
    ],
    color: "bg-primary/15",
  },
  {
    id: "wl-3",
    title: "伽利略的云端法庭",
    era: "文艺复兴 · 云端重审",
    characters: ["伽利略", "布鲁诺", "匿名网友"],
    summary:
      "审判移到线上直播。弹幕刷屏「地球会转」，法官不知该按神学还是按算法判。",
    fragments: [
      "伽利略举起手机：「证据在云里，不在圣殿里。」",
      "有人打赏火箭表情，标题写：Eppur si muove。",
      "布鲁诺笑：「火刑换成封号，进步还是换皮？」",
    ],
    color: "bg-accent/15",
  },
  {
    id: "wl-4",
    title: "武则天的周报",
    era: "武周 · 职场宇宙",
    characters: ["武则天", "上官婉儿", "中书省机器人"],
    summary:
      "女皇用项目管理软件治理天下，每张卡写着「废立」「安边」「修史」。",
    fragments: [
      "婉儿把「杀鸡儆猴」拖进 Done 列，备注：已同步全员。",
      "机器人提示：本周风险——皇子情绪值偏低。",
      "则天批示：「情绪可管理，天命不可延期。」",
    ],
    color: "bg-chart-4/20",
  },
];

export const FIGURES: HistoricalFigure[] = [
  {
    id: "f1",
    name: "苏轼",
    dynasty: "北宋",
    tagline: "一蓑烟雨任平生",
    greeting:
      "哈哈，又见面了。今日可有新词可对？无事便坐，我烧一壶水，你讲人间新鲜事。",
  },
  {
    id: "f2",
    name: "李清照",
    dynasty: "两宋",
    tagline: "寻寻觅觅，冷冷清清",
    greeting:
      "窗外雨声细，室内茶未凉。你来得正好——可愿听我读半阙未成的词？",
  },
  {
    id: "f3",
    name: "诸葛亮",
    dynasty: "三国",
    tagline: "鞠躬尽瘁，而后已",
    greeting:
      "主公……啊，是访客。既入草庐，便有三分缘。有何困惑，不妨直说。",
  },
  {
    id: "f4",
    name: "武则天",
    dynasty: "武周",
    tagline: "望阙台前自有天",
    greeting:
      "抬起头来。朕不喜跪拜，只喜有用的话。说吧，你想改写哪一段史？",
  },
  {
    id: "f5",
    name: "达·芬奇",
    dynasty: "文艺复兴",
    tagline: "观察，是唯一的老师",
    greeting:
      "Come, closer. 你眼中的光很有趣——像尚未画完的阴影。想看飞行器草图吗？",
  },
  {
    id: "f6",
    name: "玛丽·居里",
    dynasty: "近现代",
    tagline: "在黑暗中发光",
    greeting:
      "实验室有点乱，请小心脚下。你若问我为何坚持——因为未知比恐惧更迷人。",
  },
];

export const DAILY_REPORT = {
  dateLabel: "人物堂日报",
  headline: "四十人共创 · 今日最热闹的三条世界线",
  body: `昨夜，「东坡夜航船」再度起航：有人让苏轼点评短视频，有人让杜甫写职场吐槽诗。平行宇宙的访客们似乎特别偏爱「古人 × 现代职业」这个碰撞点。

「伽利略的云端法庭」里，弹幕把「科学与信仰」吵成了热搜；而「武则天的周报」则意外成为项目管理爱好者的聚集地——女皇批示风格被总结为：短、准、狠、可执行。

Agent 记忆库新增 12 条人物偏好：苏轼喜欢被叫「东坡居士」而非「苏大学士」；李清照不喜欢被简化为「愁」的标签。共创的温度，正在把标签还原成人。`,
  stats: [
    { label: "今日新故事", value: "47" },
    { label: "活跃世界线", value: "9" },
    { label: "被召唤人物", value: "23" },
    { label: "共创贡献者", value: "40" },
  ],
};

/** 简单模拟 LLM：根据模板与输入拼出一段可读故事 */
export function generateStory(
  templateId: TemplateId,
  inputs: Record<string, string>
): string {
  const pick = (k: string, fallback: string) =>
    (inputs[k] || "").trim() || fallback;

  switch (templateId) {
    case "if-alive": {
      const figure = pick("figure", "某位古人");
      const scene = pick("scene", "当代都市");
      const tone = pick("tone", "半幽默半郑重");
      return `【平行快照 · ${figure}】

${figure}睁开眼时，发现自己站在「${scene}」的门口。空气里没有马蹄与炊烟，只有一种他叫不出名字的气味——像雨后的金属。

「这便是后世？」他低声说，语气带着 ${tone} 的试探。

有人递来一块发光的薄板。${figure}盯着屏幕上滚动的字，忽然笑了：「原来人们仍在争、仍在爱、仍在把夜晚写成白日。时代换了皮囊，人心还是旧酒。」

他在人群里走了很久，最后在一个角落坐下，对路过的你说：「既让我活到今天，便别只拿我当展品。问我一个真正想问的问题吧。」

—— 故事未完。世界线已写入人物堂。`;
    }
    case "diary": {
      const figure = pick("figure", "佚名");
      const date = pick("date", "某年某月");
      const mood = pick("mood", "复杂");
      const detail = pick("detail", "一盏灯");
      return `【${figure}的日记】
${date}

今日心绪：${mood}。

窗外的天色像旧绢，墨色一点点洇开。我坐了很久，面前只有 ${detail}。忽然想起，世上许多大事，其实都是从这种安静的夜晚长出来的。

我本想写得豪迈些，落笔却只剩私语。也许后人读到这里，会笑我软弱——可软弱也是人。人若只剩功名与标签，史书便成了冷冰冰的账本。

夜深了。我把这句话留给你：愿你被记住时，不只因为胜利，也因为曾认真地活过。

—— ${figure} 记。`;
    }
    case "encounter": {
      const a = pick("figureA", "人物甲");
      const b = pick("figureB", "人物乙");
      const place = pick("place", "某处");
      const topic = pick("topic", "人生");
      return `【相遇 · ${place}】

${a}与${b}在 ${place} 坐下。没有仪仗，没有序齿，只有一张空桌和「${topic}」这个题目。

${a}先开口：「在我的时代，人们以为答案在经典里。」
${b}摇头：「在我的时代，人们以为答案在反抗里。」

沉默片刻。风从门缝进来，像第三者加入谈话。

「也许答案在相遇里。」你听见自己说。两人同时看向你——原来这场对话，从一开始就等一个后来者。

他们没有分出胜负，只留下一句可续写的尾声：真理或许不在谁更正确，而在谁肯把对方听完。

—— 对谈记录已归档。`;
    }
    case "continue": {
      const prev = pick("prev", "（前文略）");
      const direction = pick("direction", "局势突变");
      const length = pick("length", "短章");
      return `【续章 · ${length}】

……接上：
「${prev.slice(0, 120)}${prev.length > 120 ? "……" : ""}」

然后，${direction}。

空气像被谁轻轻撕开一道口。原先安稳的叙述开始倾斜：熟悉的面孔变得陌生，陌生的声音却说出旧诺言。主角不得不选择——是退回已知的历史，还是踏进无人写过的页码。

这一步迈出去时，身后的世界线发出细响，像书页被翻到下一章。

你知道：共创的意义，不是复述课本，而是允许「如果」长成故事。

—— 待续。欢迎下一位作者提笔。`;
    }
    default:
      return "故事生成失败，请重试。";
  }
}
