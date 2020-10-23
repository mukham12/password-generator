const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboard = document.getElementById('copy')

const randomFunc = {
  lower: String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  upper: String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  number: +String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  symbol: '!@#$%^&*(){}[]=<>/,.'[Math.floor(Math.random() * 20)],
}

clipboard.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if (!password) {
    return
  }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
})

generate.addEventListener('click', () => {
  resultEl.innerText = generatePassword(
    lowercaseEl.checked,
    uppercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked,
    +lengthEl.value
  )
})

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) {
    return ''
  }

  console.log(Object.keys(type)[0])
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      generatedPassword += randomFunc[Object.keys(type)[0]]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}
