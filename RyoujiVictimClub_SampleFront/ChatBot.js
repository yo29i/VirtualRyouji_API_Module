const FirstChatBot = [
    'できないとか許さないからね！'
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

        default:
            output(RandomRyoujiChatBot[0][Math.floor(Math.random() * RandomRyoujiChatBot[0].length)], 'robot');
        break;
    }
}

output(FirstChatBot[0], 'robot');