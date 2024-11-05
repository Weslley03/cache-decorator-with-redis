import "reflect-metadata";
import { Cache } from "./decorators/Cache";

class TestingExample {
  @Cache(60)
  async fectData(idUser: number) {
    console.log(`fetching data for id user ${idUser}`);
    return { idUser, data: `user data for id ${idUser}` };
  };
};

async function main() {
  const service =  new TestingExample();

    //testando o cache decorador
    console.log(await service.fectData(1));
};

main().catch(console.error);