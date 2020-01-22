import App from "./App/App";
import Head from 'next/head';

const Index = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        </Head>
        <App/>
    </div>
    
);

export default Index;