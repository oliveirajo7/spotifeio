import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";

export const authGuard: CanActivateFn = async (rota, estado): Promise<boolean | UrlTree> => {

    const roteador = inject(Router);
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
        alert('Usuário não autenticado. Por favor, faça login.');
        localStorage.removeItem('access_token');
        localStorage.removeItem('code_verifier');
        return roteador.parseUrl('/login');
    }


    return true;

}