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
		document.getElementById("result").value = (age).toFixed(2).replace('.', ',');
		ageAnnee =(today - birthdate) / (1000 * 3600 * 24 * 365);
		document.getElementById("result2").value = (ageAnnee).toFixed(2).replace('.', ',');

	}