import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Termos e Condições</h1>
      <h2>1. Introdução</h2>
      <p>
        Bem-vindo à página de termos e condições da VLIMA (L1MA). Estes termos e
        condições delineiam as regras e regulamentos para o uso do site da
        VLIMA, localizado em https://privacy.l1ma.com.
      </p>

      <h2>2. Interpretação e Definições</h2>
      <p>Para os fins destes Termos e Condições:</p>
      <ul>
        <li>
          <strong>Empresa</strong> (referida como "a Empresa", "Nós", "Nosso" ou
          "Nossa" neste Contrato) refere-se à VLIMA.
        </li>
        <li>...</li>
      </ul>

      <h2>3. Privacidade</h2>
      <p>
        Respeitamos sua privacidade. Nossa Política de Privacidade explica como
        coletamos, usamos, divulgamos e protegemos suas informações quando você
        visita nosso site.
      </p>
      <p>
        Ao usar nosso site, você concorda com a coleta e uso de informações de
        acordo com nossa política de privacidade.
      </p>

      <h3>Política de Privacidade</h3>
      <p>Aqui está um resumo da nossa política de privacidade:</p>
      <ul>
        <li>Informações coletadas</li>
        <li>Uso das informações</li>
        <li>Compartilhamento de informações</li>
        <li>...</li>
      </ul>
      <p>
        Para mais detalhes, leia nossa{" "}
        <a href="/privacy">Política de Privacidade completa</a>.
      </p>

      <h2>4. Alterações a Este Contrato</h2>
      <p>
        Reservamos o direito de modificar estes termos e condições a qualquer
        momento. As mudanças e esclarecimentos terão efeito imediato após sua
        publicação no site.
      </p>

      <h2>5. Contato</h2>
      <p>
        Se você tiver alguma dúvida sobre estes Termos e Condições, por favor{" "}
        <a href="mailto:victor@l1ma.com">entre em contato conosco</a>.
      </p>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} VLIMA. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
