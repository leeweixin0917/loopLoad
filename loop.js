// 最粗暴的做法（一次性渲染）
// let now = Date.now();
// const total = 100000;
// let ul = document.getElementById('container');
// for (let i = 0; i < total; i++) {
//     let li = document.createElement('li');
//     li.innerText = ~~(Math.random() * total);
//     ul.appendChild(li);
// }
// console.log('js运行时间：', Date.now() - now);
// setTimeout(() => {
//     console.log('总运行时间:', Date.now() - now);
// }, 0)


// 使用定时器加载数据
// 使用requestAnimationFrame来进行分批渲染：
let ul = document.getElementById('container');
let total = 100000;
let once = 20;
let page = total / once;
let index = 0;
function loop(curTotal, curIndex) {
    if (curTotal <= 0) {
        return false;
    }
    // 每页多少条
    pageCount = Math.min(curTotal, once);
    // setTimeout(() => {
    window.requestAnimationFrame(function () {
        for (let i = 0; i < pageCount; i++) {
            let li = document.createElement('li');
            li.innerText = curIndex + i + ':' + ~~(Math.random() * total);
            ul.appendChild(li);
        }
        loop(curTotal - pageCount, curIndex + pageCount);
    })
    // }, 0)
}
loop(total, index)