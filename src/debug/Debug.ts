import { DEBUG_MODE } from "@config/config";

export class Debug {
  static log(msg: string) {
    if (DEBUG_MODE) {
      console.log(msg);
    }
  }
}
