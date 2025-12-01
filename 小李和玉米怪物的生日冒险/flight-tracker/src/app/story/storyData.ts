export interface StoryPage {
    id: number;
    text: string;
    pinyin: string;
    newChars: string[];
    image: string;
}

export const storyData: StoryPage[] = [
    {
        id: 1,
        text: "今天是小李十岁生日！",
        pinyin: "jīn tiān shì xiǎo lǐ shí suì shēng rì",
        newChars: ["今", "生"],
        image: "/story-images/page1.png"
    },
    {
        id: 2,
        text: "妈妈说：“孩子，我们去森林里找生日礼物吧！”",
        pinyin: "mā ma shuō hái zi wǒ men qù sēn lín lǐ zhǎo shēng rì lǐ wù ba",
        newChars: ["们", "找", "物"],
        image: "/story-images/page2.png"
    },
    {
        id: 3,
        text: "小李牵着大黄狗，跑向森林。",
        pinyin: "xiǎo lǐ qiān zhe dà huáng gǒu pǎo xiàng sēn lín",
        newChars: ["牵", "着"],
        image: "/story-images/page3.png"
    },
    {
        id: 4,
        text: "森林里有好多玉米，长得比小李还高！",
        pinyin: "sēn lín lǐ yǒu hǎo duō yù mǐ zhǎng de bǐ xiǎo lǐ hái gāo",
        newChars: ["多", "比", "还"],
        image: "/story-images/page4.png"
    },
    {
        id: 5,
        text: "突然，一颗玉米跳起来！",
        pinyin: "tū rán yì kē yù mǐ tiào qǐ lai",
        newChars: ["突", "然", "粒"],
        image: "/story-images/page5.png"
    },
    {
        id: 6,
        text: "“呀！玉米怪物！”小李大叫。",
        pinyin: "ya yù mǐ guài wù xiǎo lǐ dà jiào",
        newChars: ["叫"],
        image: "/story-images/page6.png"
    },
    {
        id: 7,
        text: "玉米怪物有大大的耳朵，还有两只长长的手。",
        pinyin: "yù mǐ guài wù yǒu dà dà de ěr duo hái yǒu liǎng zhī cháng cháng de shǒu",
        newChars: ["只"],
        image: "/story-images/page7.png"
    },
    {
        id: 8,
        text: "它围着小李蹦蹦跳跳，说：“我带你去月亮上玩！”",
        pinyin: "tā wéi zhe xiǎo lǐ bèng bèng tiào tiào shuō wǒ dài nǐ qù yuè liang shàng wán",
        newChars: ["带", "玩"],
        image: "/story-images/page8.png"
    },
    {
        id: 9,
        text: "小李坐上玉米飞船，飞向天空！",
        pinyin: "xiǎo lǐ zuò shàng yù mǐ fēi chuán fēi xiàng tiān kōng",
        newChars: ["坐", "船", "空"],
        image: "/story-images/page9.png"
    },
    {
        id: 10,
        text: "他们飞过大海，看见好多鱼在水里跳。",
        pinyin: "tā men fēi guò dà hǎi kàn jiàn hǎo duō yú zài shuǐ lǐ tiào",
        newChars: ["过", "海", "水"],
        image: "/story-images/page10.png"
    },
    {
        id: 11,
        text: "月亮上有一座用土豆盖的大房子！",
        pinyin: "yuè liang shàng yǒu yí zuò yòng tǔ dòu gài de dà fáng zi",
        newChars: ["座"],
        image: "/story-images/page11.png"
    },
    {
        id: 12,
        text: "玉米怪物开心地说：“生日快乐！这是送你的书！”",
        pinyin: "yù mǐ guài wù kāi xīn de shuō shēng rì kuài lè zhè shì sòng nǐ de shū",
        newChars: ["开", "送"],
        image: "/story-images/page12.png"
    }
];
