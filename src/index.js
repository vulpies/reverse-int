module.exports = function reverse(n) {
	let result
	const str = n.toString().split("").reverse()

	if (str[str.length - 1] === '-') {
		return result = str.slice(0, str.length - 1).join('')
	} else {
		return result = str.join('')
	}
}
