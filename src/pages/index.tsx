import Home from '@/screens/Home';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Pharma Express</title>
        <meta
          name="description"
          content="Nosso site é o destino definitivo para você encontrar informações atualizadas sobre farmácias. Estamos aqui para garantir que você nunca fique sem acesso aos serviços farmacêuticos essenciais quando mais precisa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
}
