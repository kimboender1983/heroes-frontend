import * as React from 'react';
export interface Ivalue {
	value: string;
	updateValue(value: string): any;
}
const ctx = React.createContext<Ivalue | null>(null);
export const HeroFilterValueContextProvider = ctx.Provider;
export const HeroFilterValueContextConsumer = ctx.Consumer;
