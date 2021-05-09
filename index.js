// タスクのコンストラクタ関数
function Task(content, genre) {
  this.content = content;
  this.genre = genre;
}

// デフォルトのオブジェクトを設定
let desk = new Task('机を片付ける', '掃除');
let milk = new Task('牛乳を買う', '買い物');
let walk = new Task('散歩する', '運動');

let task = [desk, milk, walk];

// コンソールに出力
function print(len) {
  console.log(
    '===========================\n' +
      '現在持っているタスクの一覧\n' +
      '==========================='
  );

  for (let i = 0; i < len; i++) {
    console.log(
      i + ' : [内容]' + task[i].content + '、[ジャンル]' + task[i].genre
    );
  }
}

print(task.length);

let textContent = prompt('タスクを入力してください');
let textGenre = prompt('ジャンルを入力してください');

// 新しいオブジェクトとしてTaskに追加
let newTask = new Task(textContent, textGenre);
task[task.length] = newTask;

print(task.length);

alert('新しいタスクを追加しました。');

prompt('「確認、追加、削除、終了」の4つのいずれかを追加してください。');
