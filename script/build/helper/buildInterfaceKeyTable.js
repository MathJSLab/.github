import fs from 'node:fs';
import ts from 'typescript';
/**
 * Creates an array of strings with the keys of the selected interface.
 * @param inputFile Input file with interface definition.
 * @param outputFile Output file with the array of strings containing the interface keys.
 * @param interfaceName Interface name.
 */
export const buildInterfaceKeyTable = (inputFile, outputFile, interfaceName) => {
    console.log(`Building interface key list from ${inputFile} (interface ${interfaceName})`);
    /* Read source. */
    const source = ts.createSourceFile(inputFile, fs.readFileSync(inputFile, 'utf-8'), ts.ScriptTarget.Latest, true);
    const keys = [];
    /**
     * Visit the nodes of `source` searching `interfacename`.
     * @param node Source node.
     */
    function visitInterfaceDeclaration(node) {
        if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
            node.members.forEach((member) => {
                if (ts.isPropertySignature(member) || ts.isMethodSignature(member)) {
                    const name = member.name.getText(source).replace(/['"]/g, '');
                    keys.push(name);
                }
            });
        }
        ts.forEachChild(node, visitInterfaceDeclaration);
    }
    visitInterfaceDeclaration(source);
    /* Generate output */
    const fileContent = `import { ${interfaceName}Key } from './ComplexInterface';\nexport const ${interfaceName}KeyTable: ${interfaceName}Key[] = ${JSON.stringify(keys, null, 4).replace(/\"/gm, "'")};\n`;
    fs.writeFileSync(outputFile, fileContent, 'utf-8');
    console.log(`Source file generated: ${outputFile}`);
};
