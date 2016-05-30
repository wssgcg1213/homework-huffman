/**
 * Created at 16/5/29.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import haffman from './haffman'

function traverse (root, path, cb) {
  if (!root) { return }
  const isLeaf = root.left === null && root.right === null
  cb && cb(root, path, isLeaf)
  if (root.left) {
    traverse(root.left, path + '0', cb)
  }
  if (root.right) {
    traverse(root.right, path + '1', cb)
  }
}

const str = 'chongqinguniversityofpostsandtelecommunications'
const rootNode = haffman(str)
const transformMap = {}
traverse(rootNode, '', (node, path, isLeaf) => {
  if (isLeaf) {
    transformMap[node.data] = path
  }
})
console.log(`编码字符串: ${str}`)
console.log(`编码方案:`, transformMap)
const coded = str.replace(/\w/g, s => transformMap[s])
console.log(`编码结果: ${coded}`)
