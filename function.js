//a - tekstas
//b - kas kelinta raide isrinkti

function isrinktiRaides(a, b) {
    if (typeof a !== 'string') {
        console.log('Pirmasis kintamasis yra netinkamo tipo.');
    }  else if (a === '') {
        console.log('Pirmojo kintamojo reikšmė yra netinkamo dydžio');
    }  else if (a.length > 5) {
        console.log('Pirmojo kintamojo reikšmė yra netinkamo dydžio');
    }

    if (typeof b !== 'number') {
        console.log('Antrasis kintamasis yra netinkamo tipo');
    } else if (b <= 0) {
        console.log('Antrasis kintamasis turi būti didesnis už nulį.');
    }
}


console.log(isrinktiRaides('qweradifajosid', 10));