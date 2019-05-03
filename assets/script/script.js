//var mois = document.get;
//var annee = ;

function calcul_age()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if (age > 0.0) {

			//Terre
		document.getElementById("result").value = ((10 * age)/10).toFixed(2).replace('.', ',');
		//ageAnnee =(today - birthdate) / (1000 * 3600 * 24 * 365);
		document.getElementById("result2").value = ((10 * age / 365.26)/10).toFixed(2).replace('.', ',');
	}
}


function calcul_age_venus()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if ((age / 224.7) > 1) {

		document.getElementById("result").value = ((10 * age / 243)/10).toFixed(2).replace('.', ',');
		document.getElementById("result2").value = ((10 * age / 224.7)/10).toFixed(2).replace('.', ',');
	}
}
function calcul_age_mars()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if ((age / 686.98) > 1) {

		document.getElementById("result").value = ((10 * age / 1.03)/10).toFixed(2).replace('.', ',');
		document.getElementById("result2").value = ((10 * age / 686.98)/10).toFixed(2).replace('.', ',');
	}
}
function calcul_age_neptune()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if ((age ) > 1) {

		document.getElementById("result").value = ((10 * age / 0.67 )/10).toFixed(2).replace('.', ',');
		document.getElementById("result2").value = ((10 * age / 60190)/10).toFixed(2).replace('.', ',');
	}
}
function calcul_age_jupiter()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if ((age / 4332.71) > 1) {

		document.getElementById("result").value = ((10 * age / 0.41 )/10).toFixed(2).replace('.', ',');
		document.getElementById("result2").value = ((10 * age / 4332.71)/10).toFixed(2).replace('.', ',');
	}
}
function calcul_age_uranus()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if ((age) > 1) {

		document.getElementById("result").value = ((10 * age / 0.72 )/10).toFixed(2).replace('.', ',');
		document.getElementById("result2").value = ((10 * age / 30685)/10).toFixed(2).replace('.', ',');
	}
}
function calcul_age_saturne()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if ((age) > 1) {

		document.getElementById("result").value = ((10 * age / 0.45 )/10).toFixed(2).replace('.', ',');
		document.getElementById("result2").value = ((10 * age / 10759.5)/10).toFixed(2).replace('.', ',');
	}
}
function calcul_age_mercure()
{
    today = (new Date()).getTime();
    var birthyear = document.getElementById("annee").value;
    var birthmonth = document.getElementById("mois").value;
    var birthday = document.getElementById("jour").value;
	birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
//		age is your age in days
		age = (today - birthdate) / (1000 * 3600 * 24);
		if ((age / 87.97) > 1) {

		document.getElementById("result").value = ((10 * age / 58.6 )/10).toFixed(2).replace('.', ',');
		document.getElementById("result2").value = ((10 * age / 87.97)/10).toFixed(2).replace('.', ',');
	}
}












