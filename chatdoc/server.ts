import express from "express";
import {PDFLoader} from "langchain/document_loaders";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";

const app = express();
const port = 10106;

app.get('/', (req, res) => {
    return res.send('Hello world');
})

app.get('/ingest', async () => {
    const pdf = 'docs/sample.pdf';
    const loader = new PDFLoader(pdf);
    // const rawDocs = await loader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200
    });

    const docs = await textSplitter.splitDocuments(await loader.load())

    console.log(docs);
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})