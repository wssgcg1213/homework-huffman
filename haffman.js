/**
 * Created at 16/5/29.
 * @Author Ling.
 * @Email i@zeroling.com
 */
class Node {
  constructor (data = '', left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

function getFrequency (str) {
  str = String(str)
  const strMap = {}
  const strArr = []

  str.split('').forEach(s => {
    if (strMap[s]) {
      strMap[s] ++
    } else {
      strMap[s] = 1
    }
  })
  for (let s in strMap) {
    if (!strMap.hasOwnProperty(s)) {
      continue
    }
    strArr.push({s, f: strMap[s]})
  }
  strArr.sort((before, after) => before.f - after.f)
  return { strArr, strMap }
}

export default str => {
  const { strArr, strMap } = getFrequency(str)
  if (!strArr.length) {
    return new Node()
  }
  const nodes = strArr.map(fObj => new Node(fObj.s))
  while (nodes.length > 1) {
    nodes.sort((b, a) => strMap[b.data] - strMap[a.data])
    const leftNode = nodes.shift()
    const rightNode = nodes.shift()
    const unionNode = new Node(`${leftNode.data}-${rightNode.data}`)
    strMap[`${leftNode.data}-${rightNode.data}`] = strMap[leftNode.data] + strMap[rightNode.data]
    unionNode.left = leftNode
    unionNode.right = rightNode
    nodes.unshift(unionNode)
  }
  return nodes[0]
}
