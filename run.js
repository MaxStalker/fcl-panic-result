import { send, script, query } from "@onflow/fcl";

(async () => {
  // Classic fcl.send
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

  // Query
  await query({ cadence: 'pub fun main(): String { panic("Uh oh!") }' }).catch(
    (e) => console.log(e.message)
  );
})();
