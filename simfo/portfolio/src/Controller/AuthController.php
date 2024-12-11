<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
{
    #[Route('/login', name: 'app_auth', methods: ['POST'])]
    public function login(Request $request): JsonResponse
    {
        // Récupérer les données JSON envoyées par le front-end
        $data = json_decode($request->getContent(), true);

        // Vérifier que les données sont présentes
        if (isset($data['email'], $data['password'])) {
            $email = $data['email'];
            $password = $data['password'];

            // Logique de validation et traitement
            // Par exemple, tu pourrais valider les informations ici (vérifier en base de données, etc.)

            // Exemple de validation basique (à adapter à tes besoins)
            if ($email === 'test@example.com' && $password === 'password123') {
                return $this->json([
                    'message' => 'Connexion réussie',
                ]);
            } else {
                return $this->json([
                    'message' => 'Identifiants incorrects',
                ], 401); // Code HTTP 401 pour non autorisé
            }
        }

        return $this->json([
            'message' => 'Données manquantes',
        ], 400); // Code HTTP 400 pour une requête malformée
    }
}
