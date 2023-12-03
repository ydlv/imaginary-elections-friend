export function capitalize(s: string) {
	if(s.length === 0) return "";
	return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
}

export function capitalizeEachWord(s: string) {
	return s.split(/\b/ig).map(s => capitalize(s)).join(" ").replaceAll(/\s+/ig, " ");
}

export function splitCamelCase(camelCase: string) {
	if(camelCase.length === 0) return "";
	let sb = camelCase.charAt(0);
	for(let i = 1; i < camelCase.length; i++) {
		const letter = camelCase.charAt(i);
		sb += `${/^[A-Z]$/.test(letter) ? " " : ""}${letter}`;
	}
	return sb.trim();
}