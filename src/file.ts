/* 
--- ESCREVENDO NO ARQUIVO:

import { writeFile } from "fs/promises";

const exec = async () => {
    console.log('Escrevendo no arquivo..');

    const list = ['Wilton', 'João', 'Pedro'];
    const listTxt = list.join('\n');

    await writeFile('./teste.txt', listTxt);
    console.log('Pronto');
}

exec();

--- LENDO O ARQUIVO:

import { readFile, writeFile } from "fs/promises";

const exec = async () => {
    const fileContent = await readFile('./teste.txt', { encoding: 'utf8' });
    // console.log(fileContent);

    const list = fileContent.split("\n");
    console.log(list);
}

exec();

--- ALTERANDO O ARQUIVO:

import { readFile, writeFile } from "fs/promises";

const exec = async () => {
    const fileName = './teste.txt';
    const fileContent = await readFile(fileName, { encoding: 'utf8' });

    const list = fileContent.split("\n");
    list.push('Fulano');

    const listTxt = list.join("\n");

    await writeFile(fileName, listTxt);
}

exec();
*/

import { readFile, unlink, writeFile } from "fs/promises";

const exec = async () => {
  await unlink('./teste.txt');  
}

exec();