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
        text: "今天，小李带着狗在森林里玩。\n突然，他们看见了一个怪物。\n怪物哭了，眼泪掉在土豆上。",
        pinyin: "jīn tiān ， xiǎo lǐ dài zhe gǒu zài sēn lín lǐ wán 。\ntū rán ， tā men kàn jiàn le yí gè guài wù 。\nguài wù kū le ， yǎn lèi diào zài tǔ dòu shàng 。",
        newChars: ["泪"],
        image: "/story-images/page1_2.png"
    },
    {
        id: 2,
        text: "小李走过去，牵着他的手。\n问：“你要找妈妈吗？”\n他指着东南西北，说：“家在海那边。”",
        pinyin: "xiǎo lǐ zǒu guò qù ， qiān zhe tā de shǒu 。\nwèn ：“ nǐ yào zhǎo mā mā ma ？”\ntā zhǐ zhe dōng nán xī běi ， shuō ：“ jiā zài hǎi nà biān 。”",
        newChars: ["问", "指", "家", "那", "边"],
        image: "/story-images/page2_2.png"
    },
    {
        id: 3,
        text: "我们坐船过海，去太平洋。\n水里有两条鱼在蹦跳。\n一二三四五，数也数不完。",
        pinyin: "wǒ men zuò chuán guò hǎi ， qù tài píng yáng 。\nshuǐ lǐ yǒu liǎng tiáo yú zài bèng tiào 。\nyī èr sān sì wǔ ， shǔ yě shǔ bù wán 。",
        newChars: ["去", "完"],
        image: "/story-images/page3_2.png"
    },
    {
        id: 4,
        text: "风吹来了，气泡飞向天空。\n船儿上下跑，小狗抱住头。\n别摔倒，要小心呀！",
        pinyin: "fēng chuī lái le ， qì pào fēi xiàng tiān kōng 。\nchuán ér shàng xià pǎo ， xiǎo gǒu bào zhù tóu 。\nbié shuāi dǎo ， yào xiǎo xīn ya ！",
        newChars: ["风", "空", "住", "别"],
        image: "/story-images/page4_2.png"
    },
    {
        id: 5,
        text: "船开到了“关村”。\n这里有人在盖楼，有人种玉米。\n大家都围了过来，比一比谁高。",
        pinyin: "chuán kāi dào le “ guān cūn ” 。\nzhè lǐ yǒu rén zài gài lóu ， yǒu rén zhòng yù mǐ 。\ndà jiā dōu wéi le guò lái ， bǐ yì bǐ shéi gāo 。",
        newChars: ["都", "谁", "高"],
        image: "/story-images/page5_2.png"
    },
    {
        id: 6,
        text: "国王送给他一颗宝石。\n大声叫：“快来吃东西！”\n玉米好吃，书本好看。",
        pinyin: "guó wáng sòng gěi tā yī kē bǎo shí 。\ndà shēng jiào ：“ kuài lái chī dōng xi ！”\nyù mǐ hǎo chī ， shū běn hǎo kàn 。",
        newChars: ["给", "声"],
        image: "/story-images/page6_2.png"
    },
    {
        id: 7,
        text: "今天是怪物十岁生日。\n月亮升起，多少星星在笑。\n祝你生日快乐，哈哈笑！",
        pinyin: "jīn tiān shì guài wù shí suì shēng rì 。\nyuè liàng shēng qǐ ， duō shǎo xīng xing zài xiào 。\nzhù nǐ shēng rì kuài lè ， hā hā xiào ！",
        newChars: ["是", "星", "笑", "祝"],
        image: "/story-images/page7_2.png"
    }
];
