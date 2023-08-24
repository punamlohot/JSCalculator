var inpVal = document.getElementById('calc');
var subInp = document.getElementById('subInput');
var hisBox = document.getElementById('history');
var hisDiv = document.getElementById('right');
var inp_Val = [];
var sub_Inp = [];
function getValue(e)
{
	//Code to append input
	
	if (inpVal.value == '0')
	{
		inpVal.value = e;
	}
	else 
	{
		inpVal.value += e;
	}
}

function clearAll()
{
	inpVal.value ='0';
	subInp.value = '';
}
function removeLast()
{
	temp = inpVal.value;
	if(temp.length>1)
	{
		inpVal.value = temp.slice(0,-1);
	}
	else
	{
		inpVal.value = '0';
	}
}
function solve()
{
	temp = inpVal.value;
	inpVal.value = eval(temp);
	subInp.value = temp + "=";

	inp_Val.push(inpVal.value);
	sub_Inp.push(temp + "=");
	//console.log("inp_Value" ,inp_Val);
	addHistory();
}
function square()
{

	inpVal.value = inpVal.value**2;

}
function oneByx()
{
	inpVal.value = 1/ inpVal.value;
}
function sqrt()
{
	inpVal.value = Math.sqrt(inpVal.value);
}

//----------------------------------------------------HistoryFunction--------------------------------------------------------------------
function addHistory() {
    var historyHTML = '';

    for (var i = 0; i < inp_Val.length; i++) {
        historyHTML += sub_Inp[i] + inp_Val[i] + "<br>";
    }

    hisBox.innerHTML = historyHTML;
}

function clearHistory() {
			hisBox.innerHTML = "";
		}

function toggleHistory() {

    if (hisDiv.style.display === 'none' || hisDiv.style.display === '') {
        hisDiv.style.display = 'block';
    } else {
        hisDiv.style.display = 'none';
    }
}