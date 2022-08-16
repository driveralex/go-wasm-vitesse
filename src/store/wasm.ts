import { acceptHMRUpdate, defineStore } from 'pinia'
// add.wasm can be imported and used
//import init from './add.wasm?init'

// uncomment the line bellow to see the error : Uncaught (in promise) TypeError: WebAssembly.instantiate(): Import #0 module="go" error: module is not an object or function
import init from './main.wasm?init'

init().then((instance) => {
  instance.exports
  console.log(instance.exports.add(1,3))
})

export const useWasmStore = defineStore('wasm', () => {

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWasmStore, import.meta.hot))
