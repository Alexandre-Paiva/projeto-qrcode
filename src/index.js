import prompt from "prompt";
import mainprompt from "./prompts/prompt-main.js"
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main () {
    prompt.get(mainprompt, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    });
    prompt.start();
};
main();
