const FirstChatBot = [
    '良治被害者の会へようこそ！精神的に甚大なダメージを受ける可能性があるため、精神科医の指導の元、当チャットボットをご利用ください。'
];

const RyoujiChatBot = [
    /**ListNo: 0 */'これ終わるまで今日は帰れないよ',
    /**ListNo: 1 */'なんでできないの？',
    /**ListNo: 2 */'ソースコードとかわからないから',
    /**ListNo: 3 */'だめだな。はい。土曜日出勤して',
    /**ListNo: 4 */'そんなの残業すればできるじゃん',
    /**ListNo: 5 */'言っていることが良くわからない',
    /**ListNo: 6 */'明日の朝までiosのリリース審査通るかどうか確認しろ',
    /**ListNo: 7 */'APIのログをBFFは何割落とすの？',
    /**ListNo: 8 */'ユーザーの成功の為に働け',
    /**ListNo: 9 */'テストしてないんじゃないの？',
    /**ListNo: 10 */'エビデンスは？',
    /**ListNo: 11 */'勝手に本番環境触るな！',
    /**ListNo: 12 */'本番環境の調査をお願いします。',
    /**ListNo: 13 */'皆さんの力がまだ必要です',
    /**ListNo: 14 */'新幹線のお掃除おばさんみたいに',
    /**ListNo: 15 */'変わる勇気と変わらない勇気',
    /**ListNo: 16 */'PowerPoint文字だらけですけど新入社員の皆さんはマネしないように',
    /**ListNo: 17 */'～にはわからないだろうけど',
    /**ListNo: 18 */'モンキーテスト',
    /**ListNo: 19 */'そんなんで大丈夫なの？',
    /**ListNo: 20 */'JavaとJavaScript違うの？',
    /**ListNo: 21 */'JavaScriptはtry-catchが苦手なんだねー',
    /**ListNo: 22 */'あなたが必要ないとい思うのなら別にいいですよ',
    /**ListNo: 23 */'なんでググらないの？'
]

const RandomRyoujiChatBot = [
    [['絶対に許さないからね？'],
    ['eclipseで開発するって言ったじゃん！なんでVSCode使うの？'],
    ['いつまでにやるの！'],
    ['それはあなたの働き方が悪いんじゃないの？'],
    ['システムの話をしてるんじゃない！'],
    ['いっつもそうじゃん。自転車操業みたいな働き方して。'],
    ['沖縄に行って！'],
    ['はやくやれよ'],
    ['それでいいの？いいわけ無いでしょ？'],
    ['それはあなたがわかろうとする努力をしていないからでしょ？']]
]

const today = new Date();
const RyoujiYohouChatBot = [
    [[today + '：は良治不機嫌の為、家に帰れるのは23時頃の予報です。お気を付けください。'],
    [today + '：は良治超不機嫌の為、家に帰れるのは明日の23時頃の予報です。頑張ってください。'],
    [today + '：は良治機嫌が良いので、定時に終われるでしょう。安心して仕事をしてください。'],
    [today + '：は良治超機嫌が良いので、定時前に終われるだけではなく、昼ごはんも奢ってくれるでしょう！'],
    [today + '：は良治機嫌普通の為、定時では終われませんが何事もなく平穏に過ごせる一日になるでしょう。'],
    [today + '：は良治機嫌微妙の為、小言を言われることはありますが、気にせず自分の仕事に集中しましょう。'],
    [today + '：は良治不機嫌よりの微妙の為、朝会で詰められるでしょう。ラッキーアイテムはゲロ袋です。'],
    [today + '：は良治超不機嫌よりの不機嫌の為、怒鳴られるでしょう。ラッキーアイテムは労働基準監督署の電話番号です。']]
]

let chatCount = 0;

function output(val, person) {
    const field = document.getElementById('field');
    field.scroll(0, field.scrollHeight - field.clientHeight);
    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.textContent = val;
    if (person === 'me') {
        div.classList.add('chat-right');
        li.classList.add('right');
        ul.appendChild(li);
        li.appendChild(div);
    }else if (person === 'robot') {
        chatBtn.disabled = true;
        setTimeout( ()=> {
            chatBtn.disabled = false;
            li.classList.add('left');
            div.classList.add('chat-left');
            ul.appendChild(li);
            li.appendChild(div);
            chatCount++;
        }, 2000);
    }
}


const chatBtn = document.getElementById('chat-button');
const inputText = document.getElementById('chat-input');


function btnFunc() {
    if (!inputText.value) return false;
    output(inputText.value, 'me');
    

    setTimeout( ()=> {
        inputText.value = '';
    }, 1);

    switch(inputText.value) {
        //弱音を受け付けない良治シリーズ
        case "もう働けません":
            setTimeout( ()=> {
                output(RyoujiChatBot[0], 'robot');
            }, 20);
        break;

        case "できません":
            setTimeout( ()=> {
                output(RyoujiChatBot[1], 'robot');
            }, 20);
        break;

        case "やりたくないです。":
            setTimeout( ()=> {
                output(RyoujiChatBot[3], 'robot');
            }, 20);
        break;

        case "もう限界です":
            setTimeout( ()=> {
                output(RyoujiChatBot[5], 'robot');
            }, 20);
        break;

        case "限界":
            setTimeout( ()=> {
                output(RyoujiChatBot[5], 'robot');
            }, 20);
        break;

        case "死にそう":
            setTimeout( ()=> {
                output(RyoujiChatBot[5], 'robot');
            }, 20);
        break;

        case "どうすればいいですか？":
            setTimeout( ()=> {
                output(RyoujiChatBot[23], 'robot');
            }, 20);
        break;

        case "わかりません。":
            setTimeout( ()=> {
                output(RyoujiChatBot[20], 'robot');
            }, 20);
        break;

        case "無理です":
            setTimeout( ()=> {
                output(RyoujiChatBot[8], 'robot');
            }, 20)
        break;

        case "無理":
            setTimeout( ()=> {
                output(RyoujiChatBot[0], 'robot');
            }, 20)
        break;

        case "眠いです":
            setTimeout(()=> {
                output(RyoujiChatBot[19], 'robot');
            }, 20)
        break;

        case "できないですね":
            setTimeout(()=> {
                output(RyoujiChatBot[1], 'robot');
            }, 20)
        break;

        case "帰らせてください":
            setTimeout(()=> {
                output(RyoujiChatBot[0], 'robot');
            }, 20)
        break;

        case "家に帰らせてください":
            setTimeout(()=> {
                output(RyoujiChatBot[0], 'robot');
            }, 20)
        break;

        //自信を崩壊させる良治シリーズ
        case "私出来ます。":
            setTimeout(()=> {
                output(RyoujiChatBot[5], 'robot');
            }, 20)
        break;

        case "プロダクションコードを見てください":
            setTimeout(()=> {
                output(RyoujiChatBot[2], 'robot');
            }, 20)
        break;

        case "調査しておきます":
            setTimeout(()=> {
                output(RyoujiChatBot[11], 'robot');
            }, 20)
        break;

        case "できました":
            setTimeout(()=> {
                output(RyoujiChatBot[10], 'robot');
            }, 20)
        break;

        //良治予報シリーズ
        case "今日の良治予報は？":
            setTimeout(()=> {
                output(RyoujiYohouChatBot[0][Math.floor(Math.random() * RyoujiYohouChatBot[0].length)], 'robot');
            })
        break;

        default:
            output(RandomRyoujiChatBot[0][Math.floor(Math.random() * RandomRyoujiChatBot[0].length)], 'robot');
        break;
    }
}

output(FirstChatBot[0], 'robot');