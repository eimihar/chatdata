import {PDFLoader} from "langchain/document_loaders";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";
import {PineconeStore} from "langchain/vectorstores";
import {OpenAI} from "langchain";
import moment from "moment";

export const run = async () => {
    // const pdf = 'docs/sample.pdf';
    // // const loader = new PDFLoader(pdf);
    // // const rawDocs = await loader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200
    });

    console.log(moment())

    // const oai = new OpenAI();

    // const docs = await textSplitter.splitDocuments(await loader.load())

    // console.log(docs);

    // console.log((await loader.))

    // await PineconeStore.fromDocuments(textSplitter.splitDocuments())
}

run();