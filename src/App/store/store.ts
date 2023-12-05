import { createStore, createTypedHooks } from "easy-peasy";
import { AppModel } from "./model/app-model";

import { electionStorePart } from "./store-parts/election-store-part";
import { turnoutStorePart } from "./store-parts/turnout-store-part";
import { changePart, initParties as initPartiesChangePart } from "./store-parts/change-store-part";

export const store = createStore<AppModel>({
	...electionStorePart,
	...turnoutStorePart,
	...changePart
});

initPartiesChangePart(store);

(window as any)["store"] = store;

export const { useStore, useStoreActions, useStoreDispatch, useStoreState } = createTypedHooks<AppModel>();
