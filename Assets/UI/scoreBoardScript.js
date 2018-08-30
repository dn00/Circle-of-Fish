#pragma strict
import UnityEngine.UI;

var scoreLabelPrefab : GameObject;
var textComponent : Text;
//var newScoreLabel : GameObject;
function Start () {
 //PlayerPrefs.DeleteAll();
 textComponent = this.gameObject.GetComponent(Text);
 if (Application.loadedLevel == 1)
 {
	var score = GameObject.Find("food").GetComponent(game).tScore();
 	AddScore(score);
 }
 GetHighScores();

}
function Update () {
}

function AddScore(score)
 {
	var newScore : int;
	var oldScore : int;
	newScore = score;
	for(var i=0;i<10;i++){
	   	if(PlayerPrefs.HasKey(i+"HScore")){
	      	if(PlayerPrefs.GetInt(i+"HScore")<newScore){
	         	oldScore = PlayerPrefs.GetInt(i+"HScore");
	         	PlayerPrefs.SetInt(i+"HScore",newScore);
	         	newScore = oldScore;
	      	}
	     else if (PlayerPrefs.GetInt(i+"HScore")==newScore)
	     {
	     	
	     }
	   	}else {
	      	PlayerPrefs.SetInt(i+"HScore",newScore);
	      	newScore = 0;
	   	}
  	}
 }
function GetHighScores()
 {
	for(var i :int = 0; i < 10; ++i)
	{
   
//	 var score = NGUITools.AddChild(this.gameObject, scoreLabelPrefab);
//	 score.GetComponent(UILabel).text = (i + 1) + ":  "  + (PlayerPrefs.GetInt(i + "HScore")).ToString();
//	 score.transform.position.y = (this.gameObject.transform.position.y - 0.7) - (i * 0.4);
//
		textComponent.text += "\n" + (i + 1) + " :  "  + (PlayerPrefs.GetInt(i + "HScore")).ToString();
	}
}

