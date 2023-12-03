
export function findWithIndex<T extends HasID>(data: T[], id: ID): [T, int] {
	const i = data.findIndex(x => x.id == id);
	return [data[i], i];
}

export function find<T extends HasID>(data: T[], id: ID): T {
	return findWithIndex(data, id)[0];
}

export function findIndex<T extends HasID>(data: T[], id: ID): int {
	return findWithIndex(data, id)[1];
}

export function swap<T extends HasID>(data: T[], id1: ID, id2: ID) {
	const [t1, i1] = findWithIndex(data, id1);
	const [t2, i2] = findWithIndex(data, id2);
	data[i2] = t1;
	data[i1] = t2;
}

export function remove<T extends HasID>(data: T[], id: ID) {
	data.splice(findIndex(data, id), 1);
}




