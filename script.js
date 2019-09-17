function Hitung()
  {
  	var celcius1 = document.form.Celcius11.value;
  	var celcius2 = document.form.Celcius12.value;
  	var celcius3 = document.form.Celcius13.value;


  	var reamur1 = document.form.Reamur11.value;
  	var reamur2 = document.form.Reamur12.value;

  	var fahrenheit = document.form.Fahrenheit11.value;

  	var bagi = 4/5;
  	var bagi2 =5/4;
  	var bagi3 =9/5;
  	var bagi4 =5/9;

  	document.form.Celcius14.value=eval(celcius1)+273;
  	document.form.Reamur13.value=eval(celcius2)*bagi;
  	document.form.Celcius15.value=eval(reamur1)*bagi2;
  	document.form.Fahrenheit12.value=eval(celcius3)*bagi3+32;
  	document.form.Celcius16.value=eval(5/9)*(fahrenheit-32);
  	document.form.Fahrenheit13.value=eval(reamur2)*(9/4)+32;
  }