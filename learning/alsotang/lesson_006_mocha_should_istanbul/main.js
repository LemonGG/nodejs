
var fibonacci = function (n) {
	
	if ( typeof n !== 'number' ) {
		throw new Error('n should be a Number')
	}

	if ( n < 0 ) {
		throw new Error('n should >= 0')
	}

	if ( n > 10 ){
		throw new Error('n should <= 10')
	}

	if ( n === 0) {
		return 0
	}

	if ( n === 1 ) {
		return 1
	}

	return fibonacci( n -1 ) + fibonacci ( n - 2 )
}


if ( require.main === module ) {
	// 如果直接执行main.js 则进入此处
	// 如果main.js补其它文件require,则不会执行
	var n = Number(process.argv[2])
	console.log(n+'fibonacii \n' , fibonacci(n))
}


exports.fibonacci = fibonacci