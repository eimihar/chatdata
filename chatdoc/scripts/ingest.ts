import {PDFLoader} from "langchain/document_loaders";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";
import {PineconeStore} from "langchain/vectorstores";

export const run = async () => {
    const pdf = 'docs/sample.pdf';
    const loader = new PDFLoader(pdf);
    const rawDocs = await loader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200
    });

    new PineconeStore()

    // await PineconeStore.fromDocuments(textSplitter.splitDocuments())
}

run();