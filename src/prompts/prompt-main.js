const mainprompt = [
    {
    name: "select",
    description: "Escolha a ferramenta (1 - QRCODE ou (2- PASSWORD",
    pattern: /^[1-2]+$/,
    massage: "Escolha apenas entre 1 e 2",
    required: true,
    },
];
export default mainprompt;
