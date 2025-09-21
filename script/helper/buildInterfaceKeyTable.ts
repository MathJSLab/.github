import fs from 'node:fs';
import ts from 'typescript';

export const buildInterfaceKeyTable = (inputFile: string, outputFile: string, interfaceName: string) => {
    console.log(`Building interface key list from ${inputFile} (interface ${interfaceName})`);
    // Read source.
    const source: ts.Node = ts.createSourceFile(inputFile, fs.readFileSync(inputFile, 'utf-8'), ts.ScriptTarget.Latest, true);
    const keys: string[] = [];
    function visitInterfaceDeclaration(node: ts.Node) {
        if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
            node.members.forEach((member) => {
                if (ts.isPropertySignature(member) || ts.isMethodSignature(member)) {
                    const name = member.name.getText(source as ts.SourceFile).replace(/['"]/g, '');
                    keys.push(name);
                }
            });
        }
        ts.forEachChild(node, visitInterfaceDeclaration);
    }
    visitInterfaceDeclaration(source);
    // Generate output
    const fileContent = `import { ${interfaceName}Key } from './ComplexInterface';
export const ${interfaceName}KeyTable: ${interfaceName}Key[] = ${JSON.stringify(keys, null, 4).replace(/\"/gm, "'")};\n`;
    fs.writeFileSync(outputFile, fileContent, 'utf-8');
    console.log(`Source file generated: ${outputFile}`);
};
