import { fakerEN_US as faker } from "@faker-js/faker";
import cssColors from "../util/css-colors";
import { capitalizeEachWord, splitCamelCase } from "../util/string-helpers";

const colorEntries = Object.entries(cssColors);

const humanize = (s: string) => capitalizeEachWord(splitCamelCase(s)).replaceAll(/\s+/ig, " ").trim();

export type NewPartyData = {name: string, color: string};
type Factory<T> = () => T;

const generators: Factory<string>[] = [
	faker.animal.type,
	faker.location.city,
	faker.location.country,
	faker.location.state,
	faker.location.street,
	faker.date.month,
	faker.lorem.word,
	faker.music.genre,
	faker.person.firstName,
	faker.person.middleName,
	faker.person.jobType,
	() => faker.science.chemicalElement().name,
	() => faker.science.unit().name,
	faker.vehicle.manufacturer,
	faker.vehicle.model,
	faker.word.noun,
	faker.word.adjective
];

function toPartyDataGenerator(fn: Factory<string>): Factory<NewPartyData> {

	return () =>({ name: humanize(fn()) + " Party", color: faker.color.rgb() });
}

const fakers: (() => NewPartyData)[] = [
	() => {
		const [name, hex] = faker.helpers.arrayElement(colorEntries); 
		return { name: humanize(name) + " Party", color: hex };
	},
	...(generators.map(toPartyDataGenerator))
];

export function generateParty() {
	return faker.helpers.arrayElement(fakers)();
}