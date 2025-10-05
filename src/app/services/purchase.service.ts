import { Injectable } from '@angular/core';
import { PurchaseRequest } from '@models/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  createPurchase(data: PurchaseRequest) {
    // Simulamos la creación de una compra, con 60% probabilidad de éxito, 40% de error
    const isSuccess = Math.random() > 0.4;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSuccess) {
          resolve({ message: 'Compra realizada con éxito', data: { ...data, id: Date.now() } });
        } else {
          reject({ message: 'Error al procesar la compra. Intente nuevamente.' });
        }
      }, 1000);
    });
  }
}
