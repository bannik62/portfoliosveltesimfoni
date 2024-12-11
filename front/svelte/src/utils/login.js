/**
 * Classe Login permettant de gérer et valider les informations de login.
 * Utilise des getters et setters privés pour le nom d'utilisateur et le mot de passe.
 */
export class Login {
  // Propriétés privées
  #username;
  #password;

  /**
   * Getter pour le nom d'utilisateur.
   * @returns {string} Le nom d'utilisateur validé.
   */
  getUsername() {
    return this.#username;
  }

  /**
   * Setter pour le nom d'utilisateur. Valide que le nom d'utilisateur est conforme à un format spécifique.
   * @param {string} username Le nom d'utilisateur à valider et à définir.
   * @throws {Error} Lève une exception si le nom d'utilisateur ne respecte pas la regex.
   */
  setUsername(username) {
    const usernameRegex = /^[A-Za-z0-9-_]{2,10}$/; // Regex pour valider un username (7-10 caractères, lettres, chiffres, tirets, underscores)

    // Vérification du format de username avec la regex
    if (usernameRegex.test(username)) {
      this.#username = username;
    } else {
      // Lève une erreur si la validation échoue
      throw new Error('Le nom d\'utilisateur doit contenir entre 7 et 10 caractères, avec uniquement des lettres, des chiffres, des tirets et des underscores.');
    }
  }

  /**
   * Getter pour le mot de passe.
   * @returns {string} Le mot de passe validé.
   */
  getPassword() {
    return this.#password;
  }

  /**
   * Setter pour le mot de passe. Valide que le mot de passe respecte un format spécifique.
   * @param {string} password Le mot de passe à valider et à définir.
   * @throws {Error} Lève une exception si le mot de passe ne respecte pas la regex.
   */
  setPassword(password) {
    // Regex pour valider un mot de passe (5-17 caractères, une lettre, un chiffre et un caractère spécial)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,17}$/;

    // Vérification du format du mot de passe avec la regex
    if (passwordRegex.test(password)) {
      this.#password = password;
    } else {
      // Lève une erreur si la validation échoue
      throw new Error('Le mot de passe doit contenir entre 5 et 7 caractères, incluant au moins une lettre, un chiffre et un caractère spécial.');
    }
  }
}
