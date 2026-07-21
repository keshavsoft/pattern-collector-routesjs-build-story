import getImportLines from "pattern-collector-routesjs-import-extract";
import getUseLines from "pattern-collector-routesjs-use-extract";

const startFunc = ({ fileContent }) => {
    const importLines = getImportLines({ fileContent });

    const useLines = getUseLines({ fileContent });

    const importMissInUse = importLines.map(loopImport => {
        const findUser = useLines.find(element => {
            return element.variableName === loopImport.variable
        });

        return {
            ...loopImport,
            isFound: findUser ? true : false,
            usedLine: findUser
        };
    });

    return {
        importLines: importLines,
        useLines: useLines,
        importMissInUse
    };
};

export default startFunc;