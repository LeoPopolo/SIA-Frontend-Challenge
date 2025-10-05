import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() {
    return of(_dummyData);
  }

  getProduct(id: number) {
    const product = _dummyData.find(item => item.id === id);
    return of(product);
  }
}

const _dummyData: Product[] = [
  {
    id: 1,
    name: 'Zapatillas Puma Skyrocket Lite 2',
    price: 84999,
    description: 'Zapatillas tipo running livianas y transpirables. Suela de goma con buen agarre. Ideal para entrenamientos de alta intensidad.',
    category: 'Zapatillas',
    image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2abd0c8c/products/PU312731-01/PU312731-01-2.JPG?sw=600&sh=600'
  },
  {
    id: 2,
    name: 'Zapatillas Nike Air Max 270',
    price: 129999,
    description: 'Zapatillas con la mayor unidad Air Max en el talón de Nike. Comodidad durante todo el día con estilo urbano moderno.',
    category: 'Zapatillas',
    image: 'https://nikearprod.vtexassets.com/arquivos/ids/1265250-1000-1000?v=638697026007330000&width=1000&height=1000&aspect=true'
  },
  {
    id: 3,
    name: 'Campera Adidas Originals Firebird',
    price: 67999,
    description: 'Campera deportiva clásica con cierre completo y las icónicas 3 rayas. Tejido suave y cómodo para uso diario.',
    category: 'Indumentaria',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAwcCBAEFBgj/xABGEAABAwIDBQUEBgcECwAAAAABAAIDBBEFEiEGEzFBUQciMmFxgZGhsRQjQrLB0TNSYnKCkqIVQ0TSFiQmU2Nzs8LD4eL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALiREVQREQEREBERARFw4hjS55AaBcuvogp/t9fIZ8Eja45GsmfkvoSS0X9dPiql3t7BwsVYnbNjdLiu0FPS0Tt62ihLJHjwue43sPSw1VeZhwktl/W6KKXsdLe5M56hdxV7IbQUVK6pqcMmjgY3M6QuaQB14rp3loPdYLcjcoLn7Bax8uF4rRucSyGobJGCfCHt1t0uWk+t1aapPsOrGUuNVsMpyR1NK3vE6BzHaXPnnPuV2Agi41HJUET5oiCIiAiIgIiICIiAiIgIiICIiBwF/euvq8YoqaQRb0yTW/RRjM4+wLze2u19BhIdTS1Zzht/o9PrK/8ABg8z7uaqbE9r8arQ+KkmGGUbr/U0ZLS7zfJ4nnzJ16Iq6MS2lNIwum3FGy3iqpWxn46j+QrwWP8AaFhou1lTPiL+UdMzJH6OkkBv6sYFV72uc/NIS936zjc+9ciNNE2NYh/a+ISVTaZtLn0DGyOf73HUn3LQyXux38Q/JbAj9yzcxrw2+pCg9dtBiOKSbHYdPPipmhrWiP6O1jQWhlwbnidWrwzY3uflILWjW/kux300tOyCSYmKnc7dt4WzEF1vVQ7vk7QdAg7fZraafZ+aQU1HDURy2zgF7ZCBwGcGwHkQ4eSsXBNvsLmeLVtRhkzjrDXMbuyfKWMWH8bT6KpAHEZG2Y33LgiIG0V3u5ucg+j6faBwgbJPGHRHhPGczD/G27ffl9Au2pcRpqsM3Lwc47v7XPQ8D7F8z4ZiWI4TNvsNrp6WQ84X2B9nA+0L2uD7d3kacXp9zUOcM1ZRR5Wyf82Hg7h4m2cOVlRdqLrcDxOHE6Nk8M8c7HC7ZI3XDrcfaOfBdkiCIiAiIgIiICIiAiIgKCul3NLI8aHLYHoToPmp10O2VWaXCW8e9IeHRrHv+bQivn7FJ21mN4nVx67ypdr1tpf4LWz3IBWthZPeY43NtT1WdQSx4soJiy6ZFlG4OYCsrIIi3Vchl1m4a3XIGqCKNusnquHqSPxyfvLB4QR5S7QaLKwaMreC5AsFnEwuI00QZRRfasbqRzcoDeN1NYMZ5qEHM8ILG7IK2SKXEKS4MLHwyNHRzs4J9uVo9SFbao/s6kdFT4/Ow2dTGgmv+yJyXfAK7xa1xw5KjlEREEREBERAREQEREBeQ7R5d3hjb8BDIfaXRtH3yvXrw/ac69DHED3pHxtb7CZCPcxFUHRuyVhHIhT1w0BC1WnLWiy2qw5owfOygUj7jVbfELQb3ZAB0W01/dQSuFxogGqiEp5LNj7nVBjF45P3lJuyVBGfG79oqYTWte1+iDu9kqekmxItxCnhlgLRq6XI6NwcCHDr0I6FbW11LQwYi2XDaOSnZMXvc50gLHa+FjR4Q33m/kvPOf3b2Gq4MmSZoJOVw0vyKCZ9tfNQAESX5Wup3iwUJI3byeNrIPWdmh+kTbQ4a0/WVmFPyerDp99XPg0/0jDKeUm5LB8gqI7Oa0Um2eFOdo2eUwv9HtLfmQrxwIbqOel5wShlv4Gu/FUdmiIiCIiAiIgIiICIiAq/7Qn7zE8Oj4tYaiZ3kGQOb85ArA6qtduHEVmJ1QN20uEVL7ftOc0D7hRVIu0q2EcTb5LaluWsHndadR3KiJw4aLfk+z5BQRD9OT0Cya7uE87lYA2LzzXI8DR5XKCRilGjhZRN0UgvdpPBBxC3MHC9rkrIQ5XXLrqJp7p9brZDs8YPNBy7wFYSjPTtcOIWZ8BB4rGI3hezpwQTQP3kIvxAWtK4hrvWy4o5MrzG42BSqIbb95BsYVMabF6GoB/RTxuHlZwX0ZQyMG0OLwtP93TT+geHt/8AGvmYSbs7w8Gd73L6Owx4ftM+Uf4jBqV38r5P86Dv0RFUEREBERAREQEREBVftm8/2bti8/Zooomn96R9/mFaHmqj23fbZDaKW+s9dTRetnB1vgUVUVaLbp3QLabq0ErWrAXUgceId+H/AKWbHi+pNrKA88R1cpD4vgom9+W54DVZg3cT5oJm8FyXWFliTZp6hcNBylztEHGbK0lciocyzm+ErlrcwLVHC3PFJF9oatQbccm9bfmuYTlmexaVJKWvLHceS2icsocgiqoX5i6MajVQue4sBdxutqpNzrf2LVPejBHC6B44ng822X0PsvNv6jA6g/3+Bfdez/MvnprbMaP1nAK/NhPrcP2Xl5MwqphJ9JIbfIoPbIiKoIiICIiAiIgIiIMZDljeejSqb29kLdjbD+/xk+0CNyuGrdlpZnH/AHbvkqS29lLdk8Ei4b2oqJj52s381VeALd5TvYebdFr0/ehzHoAthhtmHkVrRG0DbcyfYsiZlhc9BZZRcb8lG02iHUlZt0ZYcTogzF3EDrqj33dlbwHFHPEbXO52sFFECBd3F3AKCTPuzmHC4v6KSUbqdszPCVgLOJY7wuFisackh9LL4m8CqMa1m6qN4zgVKZM7QQuZ2GWkaT4mGy1adx8J6oOwdqIpeuhUQhAvbhmK5z2pvNjgbKVmtP58UETwDI23C91enZe7e7L4K88WCqi/r/8AlUWfErw7Izm2UpNfBUzj3kn8UHvERFUEREBERAREQEREGpipy4ZVEcd063uVH9osl4cBp2jSOg3hHm9xcrr2gk3WCV0juDIXH3Kje0I/7Qtpxwp6KCMDpZqDx7dHrUj7rS3o8rbIyyWWu6nmbEKlzfqpJnRNd1c0NJHucFFZcA1oUzPFfk0fFQttmN+AWbyWR25nUoMHneyNbyGpU501d7FHTM4vPPiuXuzOvy4BAkvY5eNrpV8GVTOPNZOP1hHVKfvskgdxGoQT07hKw2OhGq0XDdzWPVc0jzBOWOPPRT4hDoJmC6DN47hcODgpYjeEC41AUFM/e0bhfvNF1LSyRvhbY8BqgxB71uXVXV2MSZ9mZG/qV0g/oaVS8kjfCxW/2HvvgtewfYriffE38kFmIiKoIiICIiAiIgIiIOp2rbvNnMQhuRvYTGCORdp+KobbqpMm2WKPGrRNkaB0DQLfNX3tI4twsW+1V0zT6GZgK+dcUkdUYziE7+LqqU/1myUdbURuBD2i7ea9HieHCHstwGsc2zqnFZ5CbdWlo+EYXnaqUFrh9hty4/grZ22wiWm7HcIhay76KOnfJbg24s8/1FRVPsI1cQLDisXFz3gddSmdnhuLDU+ZWUVmtMhIzON7dEEjyGMDWrDgFxck3upAy/eu30ugxJ+uLXcCePRcPLoZWSHhzUjWNcDnIseIusXABmRzg9vI31HqgwrYhcSM4ix0WzSTh7Mj23aRwWsx3cyucO7p6rBjt2/uO4G7UEroTS1Qcx14ZO7fkLqFh+j1L4x+jLrBdhQQ1VfVQ0dAwTT1LhFEwdSTYnyHPoNV3XaZgMOz+0rqSK/0d9PC9h88oaT7S2/qUHQmIAZm8OStnsKmDoMag5xyQP8A5g8f9qqGB5cwtzA5VafYO7/Xcdb/AMKnPxl/NBcCIiqCIiAiIgIiICIiDqdpdcPhHI1tN/1Wr5trnFuJV9j/AIqX75REogmY0sgit3ZpWsf6EgFfRHaG0M7OsZa3QChIHpoiKK+dGRtDAbD3IACTf5IiBlF0tYoiBzWIKIgzbq6xWZAREHrey0D/AE6wvT7T9f4HLv8At2p4ziGGykd51M+/scPzKIgqeHuVTA3QHkrd7CWj6fj3lHTj4yrhEFvIiKoIiICIiD//2Q=='
  },
  {
    id: 4,
    name: 'Pantalón Nike Dri-FIT Academy',
    price: 45999,
    description: 'Pantalón de entrenamiento con tecnología Dri-FIT para mantener la piel seca. Ajuste cómodo con cintura elástica.',
    category: 'Indumentaria',
    image: 'https://nikearprod.vtexassets.com/arquivos/ids/1265456-1200-1200?width=1200&height=1200&aspect=true'
  },
  {
    id: 5,
    name: 'Pelota de Fútbol Adidas UCL Finale',
    price: 28999,
    description: 'Pelota oficial de la UEFA Champions League. Construcción sin costuras para un vuelo perfecto y control superior.',
    category: 'Accesorios',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3YzHpi1ESqYftK8xvZvlVHQfnFPaGcP0jSN56LMwvyDbC4IbyFZabWL89g3gkr__k9vwOL9UpE4EvFVaJOb_Eq5YHwo9PAnpAQuJnQ0cV0PkV0oIVvuP1ow&usqp=CAc'
  },
  {
    id: 6,
    name: 'Zapatillas Converse Chuck Taylor All Star',
    price: 56999,
    description: 'Las icónicas zapatillas de lona con suela de goma vulcanizada. Estilo atemporal que nunca pasa de moda.',
    category: 'Zapatillas',
    image: 'https://backend.converse.com.ar/media/image/ce/59/d7e6d4edea5bea97cbf87a78643a.jpg'
  },
  {
    id: 7,
    name: 'Remera Under Armour HeatGear',
    price: 32999,
    description: 'Remera técnica con tecnología HeatGear que absorbe el sudor y se seca rápidamente. Ajuste atlético.',
    category: 'Indumentaria',
    image: 'https://www.underarmour.com.ar/on/demandware.static/-/Sites-underarmour_staging/default/dw3ab40453/new_images/6010830-651/6010830-651-IMAGE-2.webp'
  },
  {
    id: 8,
    name: 'Gorra New Era Yankees 9FORTY',
    price: 18999,
    description: 'Gorra ajustable con el logo clásico de los Yankees de Nueva York. Corona desestructurada y visera curva.',
    category: 'Accesorios',
    image: 'https://m.media-amazon.com/images/I/61Y0bZ1xJhL._AC_UL320_.jpg'
  },
  {
    id: 9,
    name: 'Shorts Nike Dri-FIT',
    price: 34999,
    description: 'Shorts de entrenamiento con tecnología Dri-FIT. Cintura elástica con cordón ajustable y bolsillos laterales.',
    category: 'Indumentaria',
    image: 'https://m.media-amazon.com/images/I/61Y+RgvF1ZL._AC_UL320_.jpg'
  },
  {
    id: 10,
    name: 'Mochila Puma Phase Backpack',
    price: 25999,
    description: 'Mochila deportiva con compartimento principal amplio y bolsillo frontal con cierre. Tirantes acolchados ajustables.',
    category: 'Accesorios',
    image: 'https://sporting.vtexassets.com/arquivos/ids/1831214/1079943-037-1.jpg?v=638729751112230000'
  },
  {
    id: 11,
    name: 'Zapatillas Vans Old Skool',
    price: 72999,
    description: 'Las clásicas zapatillas de skate con la icónica raya lateral. Suela de goma waffle para mejor agarre.',
    category: 'Zapatillas',
    image: 'https://www.indy.com.ar/cdn/shop/files/zapatillas-vans-old-skool-negras-indy-1-Photoroom.jpg?v=1739799032'
  },
  {
    id: 12,
    name: 'Botella Hydro Flask 32oz',
    price: 41999,
    description: 'Botella térmica de acero inoxidable que mantiene bebidas frías por 24 horas y calientes por 12 horas.',
    category: 'Accesorios',
    image: 'https://http2.mlstatic.com/D_NQ_NP_971443-MLA54123818831_032023-O.webp'
  }
]
