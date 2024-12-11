<script>
  import { Login } from '../utils/login'; // Assurez-vous que le chemin d'import est correct
  let email = '';
  let password = '';

  const loginInstance = new Login(); // Création de l'instance de la classe Login

  const handleLogin = () => {
    try {
      // Valider et appliquer les setters pour username et password via la classe
      loginInstance.setUsername(email); // ou "username" selon ta logique
      loginInstance.setPassword(password);

      // Créer l'objet JSON
      const loginData = {
        email,
        password
      };

      // Logique pour envoyer l'objet JSON (par exemple, avec fetch pour une API)
      console.log('Login data:', loginData); // Pour l'instant, on log le JSON
      // Tu peux ici ajouter un appel à ton API pour envoyer le JSON
      // Exemple avec fetch :
     
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      }).then(response => response.json())
        .then(data => console.log('Réponse de l\'API:', data))
        .catch(error => console.error('Erreur:', error));
      
    } catch (error) {
      console.error(error.message); // Affiche l'erreur si elle est déclenchée dans les setters
    }
  };
</script>

<style>
  .form-login {
    width: 50vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60%;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 10px;
    background-color: azure;
  }
  input {
    margin: 1rem;
    height: 25px;
  }
  button {
    margin-top: 1rem;
    width: 25%;
    margin: 0 auto;
  }
  h1 {
    margin-bottom: 1rem;
  }
</style>

<div class="form-login">
  <h1>Login</h1>

  <form>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" bind:value={email} placeholder="Email" required />

    <label for="password">Password</label>
    <input id="password" name="password" type="password" bind:value={password} placeholder="Password" required />

    <!-- Bouton de connexion avec un id spécifique et un événement 'click' -->
    <button type="button" id="loginButton" on:click={handleLogin}>Login</button>
  </form>
</div>
