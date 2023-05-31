import { DefaultApi } from "./generated/typescript-axios"

async function main() {
  const resp = await new DefaultApi().appControllerGetHello(12345)
  console.log(resp.data)
}

main()
