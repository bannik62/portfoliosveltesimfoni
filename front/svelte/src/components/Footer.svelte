<!-- src/components/Footer.svelte -->

<script>
    // Tu peux ajouter des logiques supplémentaires ici si nécessaire
  </script>
  
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Mon Application. Tous droits réservés.</p>
      <nav>
        <ul>
          <li><a href="/terms">Mentions légales</a></li>
          <li><a href="/privacy">Politique de confidentialité</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </footer>
  
  <style>
    footer {
      background-color: #222;
      color: white;
      padding: 2rem 0;
      text-align: center;
    }
  
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    footer p {
      margin: 0;
      font-size: 14px;
    }
  
    nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
    }
  
    nav li {
      margin: 0 1rem;
    }
  
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  
    nav a:hover {
      text-decoration: underline;
    }
  </style>
  