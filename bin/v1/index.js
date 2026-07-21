import fs from 'fs';
import path from 'path';

import getImportLines from "pattern-collector-routesjs-import-extract";
// import getUseLines from "pattern-collector-routesjs-use-extract";

const startFunc = ({ inFilePath }) => {
    const filePath = path.join(inFilePath, fileNameToPull);

    const fileContent = fs.readFileSync(filePath, 'utf8');

    const importLines = getImportLines({ filePath: inFilePath });

    // const useLines = getUseLines({ filePath: inFilePath });

    console.log("aaaaaaaa : ", importLines);


};

export default startFunc;