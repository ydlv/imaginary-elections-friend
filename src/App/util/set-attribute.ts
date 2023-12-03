export function setAttribute<T, K extends keyof(T)>(object: T, key: K, fn: (x: T[K]) => T[K]) {
	object[key] = fn(object[key]);
}

export function setAttributeFromPartial<T, K extends keyof(T)>(object: T, key: K, payload: Partial<T[K]>) {
	setAttribute(object, key, prev => ({...prev, ...payload}));
}