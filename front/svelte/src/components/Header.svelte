<!-- src/components/Header.svelte -->

<script>
    // Tu peux ajouter des logiques supplémentaires ici si nécessaire
  </script>
  
  <header>
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/profile">Profil</a></li>
        <li><a href="/login">Se connecter</a></li>
      </ul>
    </nav>
  </header>
  
  <style>
    header {
      background-color: #333;
      color: white;
      padding: 1rem;
    }
  
    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;
    }
  
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      padding: 0.5rem 1rem;
    }
  
    nav a:hover {
      background-color: #555;
      border-radius: 4px;
    }
  </style>
  