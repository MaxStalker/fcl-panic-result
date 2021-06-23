import { send, script } from "@onflow/fcl";

(async () => {
  try {
    // this will throw, so we don't need return value
    await send([
      script`
            pub fun main(){
                panic("Uh-oh")
            }
        `,
    ]);
  } catch (e) {
    console.log(`Caught: ${e.message}`);
  }
})();
