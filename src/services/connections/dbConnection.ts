import Store from "electron-store"


const schema = {
	orders: {
		type: "string",
	}
}
export const store = new Store({schema})