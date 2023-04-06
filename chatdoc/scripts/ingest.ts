import {DirectoryLoader, PDFLoader} from "langchain/document_loaders";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";
import {PineconeStore} from "langchain/vectorstores";
import moment from "moment";
import {CustomPDFLoader} from "../utils/custom-pdf-loader";

export const run = async () => {
    const pdf = 'docs';

    const directoryLoader = new DirectoryLoader(pdf, {
        '.pdf': (path) => new CustomPDFLoader(path),
    });

    const rawDocs = await directoryLoader.load();

    const loader = new PDFLoader(pdf);
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200
    });

    try {
        const docs = await textSplitter.splitDocuments(rawDocs)

        console.log(docs);
    } catch (e) {
        console.log(e);
    }
}

run();