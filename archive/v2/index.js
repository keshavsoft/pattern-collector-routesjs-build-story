import getImportLines from "pattern-collector-routesjs-import-extract";
import getUseLines from "pattern-collector-routesjs-use-extract";

const startFunc = ({ fileContent }) => {
    const importLines = getImportLines({ fileContent });

    const useLines = getUseLines({ fileContent });

    console.log("aaaaaaaa : ", importLines, useLines);


};

export default startFunc;