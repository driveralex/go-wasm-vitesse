import { acceptHMRUpdate, defineStore } from 'pinia'
// add.wasm can be imported and used
//import init from './add.wasm?init'

// uncomment the line bellow to see the error : Uncaught (in promise) TypeError: WebAssembly.instantiate(): Import #0 module="go" error: module is not an object or function
import init from './main.wasm?init'

init().then((instance) => {
  instance.exports
  console.log(instance.exports.add(1,3))
})


// With : vite-plugin-wasm
// Runtime Output : Failed to resolve import "go" from "src\store\main.wasm".
//import { Go } from './wasm_exec'
//import quorumWasmUrl from './main.wasm?init'

// Without : vite-plugin-wasm
//  Internal server error: "ESM integration proposal for Wasm" is not supported currently.
//  Use vite-plugin-wasm or other community plugins to handle this.
//  Alternatively, you can use `.wasm?init` or `.wasm?url`. See https://vitejs.dev/guide/features.html#webassembly for more details.
//import quorumWasmUrl from './main.wasm'


export const startQuorum = async () => {
  const go = new Go()
  WebAssembly.instantiateStreaming(fetch(quorumWasmUrl), go.importObject).then(
    async (result) => {
      go.run(result.instance)
    },
  )
}

export const useWasmStore = defineStore('wasm', () => {

})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWasmStore, import.meta.hot))
