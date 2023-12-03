

export function tapDebug<T>(value: T, name = "") {
	console.log(name || "tapDebug", value);
	return value;
}