import { createStore, createTypedHooks } from "easy-peasy";
import { AppModel } from "./model/app-model";

import { electionStorePart } from "./store-parts/election-store-part";
import { turnoutStorePart } from "./store-parts/turnout-store-part";

export const store = createStore<AppModel>({
	...electionStorePart,
	...turnoutStorePart
});

(window as any)["store"] = store;

export const { useStore, useStoreActions, useStoreDispatch, useStoreState } = createTypedHooks<AppModel>();
