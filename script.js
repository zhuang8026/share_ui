/*
 * @Description: 這是寫入導出文件 元件 脚本
 */
const fs = require('fs');
const path = require('path');

// 生成導出代碼脚本
fs.readdir(path.join(__dirname, './src/components'), function (err, files) {
  if (err) {
    console.log('目錄不存在');
    return
  }
  // 設置時間提交git
  let content = `/*${new Date()}*/`
  let ex = []

  // 處理到處程式碼
  files.forEach(item => {
    // 讀取目錄名稱
    content = content + `import ${item} from './components/${item}';`
    ex.push(item)
  })
  ex = ex.join(",")
  content = content + `export { ${ex} }; `

  fs.writeFile(path.join(__dirname, './src/index.js'), content, 'utf8', (err) => {
    if (err) throw err;
  });
})