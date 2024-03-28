// TODO: write code here

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

// ?.
const user = {
  id: 10,
  courses: [{ id: 1, title: 'AHJ' }]
}

const admin = {
  id: 1,
  courses: []
}

console.log(user.courses[0].title)

console.log(admin.courses && admin.courses.length && admin.courses[0].title)

const admin1 = undefined
console.log(admin1?.courses[0]?.title) // undefined

const str = ''

if (str.startsWith('http://')) {
  console.log('test')
}
