var proxy = new Proxy({a: 1}, {
	get (target, key) {
		console.log('origin get value:', target[key])
		return ++target[key]
	},

	set (target, key, value) {
		console.log('origin set value:', value)
		target[value] = value + 1
	}
})

proxy.a = 2
proxy.a++
proxy.a
