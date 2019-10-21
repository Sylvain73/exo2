
var euro = 1;
var dollar = 1.11;
var bitcoin = 0.00011;
var livreSterl = 0.91;
var yen = 17.82;
var dinar = 3.18;
var yuan = 7.85;


do  
{
	var valeur = parseFloat(prompt("Combien d'euros voulez vous convertir"));
	
	if (isNaN(valeur) == true || valeur < 0)
	{
		alert("Veuillez insérer un chiffre");
	}
	else
	{
	var devise = prompt("dans quelle devise etrangere voulez vous convertir l'euro ?");
	
	 switch (devise)
			{
			case "Dollar":
			euro = (valeur * dollar);
			alert(valeur + " " + "Euros" + " " + "donne" + " " + euro + " " + "Dollars");
			break;
		
			case "Bitcoin":
			euro = (valeur * bitcoin);
			alert(valeur + " " + "Euros" + " " + "donne" + " " + euro + " " + "Bitcoin");
			break;
		
			case "Livre":
			euro = (valeur * livreSterl);
			alert(valeur + " " + "Euros" + " " + "donne" + " " + euro + " " + "Livre Sterling");
			break;
		
			case "Yen":
			euro = (valeur * yen);
			alert(valeur + " " + "Euros" + " " + "donne" + " " + euro + " " + "Yen");
			break;
			
			case "Dinar":
			euro = (valeur * dinar);
			alert(valeur + " " + "Euros" + " " + "donne" + " " + euro + " " + "Dinar Tunisien");
			break;
		
			case "Yuan":
			euro = (valeur * dinar);
			alert(valeur + " " + "Euros" + " " + "donne" + " " + euro + " " + "Yuan Chinois");
			break;
			
			default:
			alert("Cette devise n'est pas recevable ! Veuillez en choisir une autre.");
			}
			var confirmation = confirm("Veux tu continuer la conversion ?");
			}
}
while (confirmation == true)

	