// const fs = require('fs')
// const fu = new URL('f:///CloudMusic')
// console.log(fu)

/*
遍历目录文件
法一:
async function pr(path){
	const dir = await fs.promises.opendir(path)
	// for await(const dirent of dir){
		// console.log(dirent.name)
	// }
}
pr('f:///CloudMusic').catch(console.error)
法二:
var d = fs.readdirSync('f:///CloudMusic')
console.log(d)返回字符串数组
*/


