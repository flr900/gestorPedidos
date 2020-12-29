import Store,{Schema} from "electron-store"



const schema:Schema<{
	orders:string
}> = {
	orders: {
		type: "string",
	}
}
export const store = new Store({schema})