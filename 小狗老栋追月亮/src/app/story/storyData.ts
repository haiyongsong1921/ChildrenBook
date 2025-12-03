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
        text: "小李和妈妈住在老栋关村。",
        pinyin: "xiǎo lǐ hé mā ma zhù zài lǎo dòng guān cūn",
        newChars: ["和", "住"],
        image: "/story-images/page1.png"
    },
    {
        id: 2,
        text: "村里养着一只大黄狗，叫老栋。",
        pinyin: "cūn lǐ yǎng zhe yì zhī dà huáng gǒu jiào lǎo dòng",
        newChars: ["黄"],
        image: "/story-images/page2.png"
    },
    {
        id: 3,
        text: "今天晚上，月亮又大又圆。",
        pinyin: "jīn tiān wǎn shang yuè liang yòu dà yòu yuán",
        newChars: ["晚", "上", "又", "圆"],
        image: "/story-images/page3.png"
    },
    {
        id: 4,
        text: "老栋看见月亮，突然蹦起来！",
        pinyin: "lǎo dòng kàn jiàn yuè liang tū rán bèng qǐ lai",
        newChars: [],
        image: "/story-images/page4.png"
    },
    {
        id: 5,
        text: "“汪汪！我去月亮上玩！”",
        pinyin: "wāng wāng wǒ qù yuè liang shàng wán",
        newChars: [],
        image: "/story-images/page5.png"
    },
    {
        id: 6,
        text: "它跑啊跑，跑过山，跑过海。",
        pinyin: "tā pǎo a pǎo pǎo guò shān pǎo guò hǎi",
        newChars: [],
        image: "/story-images/page6.png"
    },
    {
        id: 7,
        text: "跑过一片好大的玉米森林。",
        pinyin: "pǎo guò yí piàn hǎo dà de yù mǐ sēn lín",
        newChars: ["片"],
        image: "/story-images/page7.png"
    },
    {
        id: 8,
        text: "玉米怪物跳出来：“你追月亮呀？”",
        pinyin: "yù mǐ guài wù tiào chū lai nǐ zhuī yuè liang ya",
        newChars: ["出", "追"],
        image: "/story-images/page8.png"
    },
    {
        id: 9,
        text: "老栋点点头，耳朵一甩，飞上天！",
        pinyin: "lǎo dòng diǎn diǎn tóu ěr duo yì shuǎi fēi shàng tiān",
        newChars: ["点", "甩"],
        image: "/story-images/page9.png"
    },
    {
        id: 10,
        text: "它坐上一颗土豆飞船，嗖嗖嗖！",
        pinyin: "tā zuò shàng yì kē tǔ dòu fēi chuán sōu sōu sōu",
        newChars: ["嗖"],
        image: "/story-images/page10.png"
    },
    {
        id: 11,
        text: "飞到月亮上，看见好多小怪物在开生日会。",
        pinyin: "fēi dào yuè liang shàng kàn jiàn hǎo duō xiǎo guài wù zài kāi shēng rì huì",
        newChars: ["到", "会"],
        image: "/story-images/page11.png"
    },
    {
        id: 12,
        text: "大家一起唱：“老栋生日快乐！吹气球吧！”",
        pinyin: "dà jiā yì qǐ chàng lǎo dòng shēng rì kuài lè chuī qì qiú ba",
        newChars: ["家", "一", "唱", "球"],
        image: "/story-images/page12.png"
    }
];
