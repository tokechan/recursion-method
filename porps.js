基本的なpropsの渡し方

// parent.js
function ParentComponent() {
    // 子コンポーネントにgreetingというpropsを渡す
    return <ChildComponent greeting="こんにちは、React!" />;
}

// child.js
function ChildComponent(props) {
    // 受け取ったpropsを表示
    return <h1>{props.greeting}</h1>;
}

// ReactDOM.renderを使ってコンポーネントを描画
ReactDOM.render(<ParentComponent />, document.getElementById('root'));


複数のpropsの渡し方
// parent.js
function ParentComponent() {
    // 複数のpropsを子コンポーネントに渡す
    return <ChildComponent firstName="太郎" lastName="山田" />;
}

// child.js
function ChildComponent(props) {
    // 受け取った複数のpropsを組み合わせて表示
    return <h1>{props.firstName} {props.lastName}さん、ようこそ！</h1>;
}

// ReactDOM.renderを使ってコンポーネントを描画
ReactDOM.render(<ParentComponent />, document.getElementById('root'));

配列のpropsの渡し方
// parent.js
function ParentComponent() {
    const fruits = ['りんご', 'バナナ', 'みかん'];
    // ChildComponentにfruits配列をfruitListとして渡す
    // JavaScriptのコードを組み込みたい場合、そのコードを{}で囲む
    return <ChildComponent fruitList={fruits} />;
}

// child.js
function ChildComponent(props) {
    // 受け取った配列をmapメソッドでリスト要素に変換して表示
    // JSX内でJavaScriptの式を埋め込むため、{}を使用
    // https://ja.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    // 今回はkeyにindexを使用していますが、リストに変更があったとき予期せぬ挙動を起こす可能性がります。keyにはfruit.idなど一意の値を使いましょう
    return (
    <ul>
        {props.fruitList.map((fruit, index) => <li key={index}>{fruit}</li>)}
    </ul>
    );
}

// ReactDOM.renderを使ってコンポーネントを描画
ReactDOM.render(<ParentComponent />, document.getElementById('root'));

コールバック関数のpropsの渡し方
// parent.js
function ParentComponent() {
    const handleClick = () => {
        alert('ボタンがクリックされました！');
    };

    // ChildComponentにhandleClick関数をonClickHandlerとして渡す
    return <ChildComponent onClickHandler={handleClick} />;
}

// child.js
function ChildComponent(props) {
    // ボタンクリック時に親コンポーネントから渡された関数を実行
    return (
    <button onClick={props.onClickHandler}>クリックしてください</button>
    );
}

// ReactDOM.renderを使ってコンポーネントを描画
ReactDOM.render(<ParentComponent />, document.getElementById('root'));