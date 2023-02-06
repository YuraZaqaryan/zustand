import {create} from "zustand";

export const useDeviceStore = create((set) => ({
    devices: [],
    users: [],
    isLoading: false,
    errors: [],
    addDevice: (name) => set((state) => {
        return state.devices = [{...state.devices}, {id: 1, name}]
    }),
    fetchUsers: async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json()
            set({users: json})
        }
        catch (e) {
            console.log(e.message)
        }
    }
}))