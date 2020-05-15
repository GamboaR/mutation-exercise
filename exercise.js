const hasMutation = (arrayDna) => {
	var y = [];
	var sec = 0;
	var contlett = 0;
	var sig;
	//almacenarlo en una matriz
	// every string
	for (var i = 0; i < arrayDna.length; i++) {
		var splitLet = arrayDna[i].split("");
		var x = [];
		contlett = 0;
		for (var letter = 0; letter < splitLet.length; letter++) {

			sig = splitLet[letter + 1];

			if (sig == splitLet[letter]) {
				contlett = contlett + 1;
				if (contlett == 3) {
					sec = sec + 1;
				}
			}
			else
				contlett = 0;
			//comienza verificar en horizontal
			x.push(splitLet[letter])
		}
		y.push(x);
	}
	var contlett = 0;
	var secDerIzq = 0;
	//verifica en vertical
	for (var i = 0; i < y.length; i++) {
		for (var j = 0; j < y[i].length; j++) {
			actual = y[j][i];

			sig = y[j + 1] ? y[j + 1][i] : '';
			if (actual == sig) {
				contlett = contlett + 1;
				if (contlett == 3) {
					sec = sec + 1;
				}
			} else
				contlett = 0;
		}
		contlett = 0;
		//verifica de derecha a izquierda
		var actDerIzq = y[i][y.length - i - 1];
		var sigDerIzq = (y[i + 1] != undefined) ? y[i + 1][y.length - i - 2] : '';

		if (sigDerIzq == actDerIzq) {
			contlett = contlett + 1;
			if (contlett == 3) {
				sec = sec + 1;
			}
		} else
			contlett = 0;
		//verifica de   izquierda a derecha
		contlett = 0;
		var actIzqDer = y[i][i];
		var sigIzqDer = (y[i + 1] != undefined) ? y[i + 1][i + 1] : '';

		if (sigIzqDer == actIzqDer) {
			contlett = contlett + 1;
			if (contlett == 3) {
				sec = sec + 1;
			}
		} else
			contlett = 0;
	}
	return sec > 1 ? true : false;
}

exports.hasMutation = hasMutation;


