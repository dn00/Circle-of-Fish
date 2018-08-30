import PathologicalGames;
import UnityEngine.UI;

var bubbleObject : GameObject; 
var destroyTrigger = 0;
var bigBad : GameObject;
var hp : Image;
var scoreLabel: Text;
var food : GameObject;
var hitClip : AudioClip;
var smallHitClip : AudioClip;
var pearlScore : AudioClip;
var bigHitClip : AudioClip;
var pearlHigh : AudioClip;
var pearlLow : AudioClip;
var gameOverUI: GameObject;
var invincible : boolean = false;

var bonusHits :int   = 0;
var bonusTrigger = true;

var ptsPrefab: Transform; 
public var ptsTrigger : int = 1;
private var gameFinished = false;
//var bg : GameObject;
public var health: int = 3;



function Start () {
    gameOverUI = GameObject.FindGameObjectWithTag ("gameOverUI");
    scoreLabel = gameObject.Find("score2").GetComponent(Text);
    //bg = gameObject.Find("bg");
    food = GameObject.FindWithTag("food");
  
	hp = gameObject.Find("hp2").GetComponent(Image);
	//guiHealth = gameObject.Find("GUI Health").guiText;
	//guiHealth.text = "Health:" + health;
	//transform.position = transform.position = Vector2(15.2142, 5.468072);
	GetComponent(deadFloating).enabled = false;
	// yield WaitForSeconds(1);
	 
	  scoreLabel.text = "**SPLISH SPLISH**";
	  yield WaitForSeconds(1.0);
	  scoreLabel.text = "So Hungry";
	  yield WaitForSeconds(0.5);
	  scoreLabel.text = "So Hungry.";
	  yield WaitForSeconds(0.5);
	  scoreLabel.text = "So Hungry..";
	  yield WaitForSeconds(0.5);
	  scoreLabel.text = "So Hungry..";
	  yield WaitForSeconds(0.5);
	  scoreLabel.text = "LET'S EAT!!!";
	  //yield WaitForSeconds(0.5);
	//GetComponent(Animator).enabled = true; 
    GetComponent(playerController).go = true;
    //GetComponent(forward).enabled = true;
   // collider2D.enabled = true;
    //scoreLabel.text = "0";
}

function updateHealth() //change when updated gui
{
    if (health == 3)
    {
    	 hp.fillAmount = 1;
   	}
    else if (health == 2)
    {
    	 hp.fillAmount = 0.65;
    }
  	else if (health == 1)
  	{
  		hp.fillAmount = 0.33;
  	}
  	else if (health == 0)
  	{
  		 hp.fillAmount = 0;
  	}
}

function Update() {
}

function pearlBonus()
{

		//bonusTrigger = 1;
		if (bonusHits == 3)
		{
			food.gameObject.GetComponent(game).pScoreBonusD();
		}
		else
		food.gameObject.GetComponent(game).pScoreInc();
		//food.gameObject.GetComponent(game).updateGUIScore();
		//bonusTrigger = 0;
}
function bonusCooldown()
{
		bonusTrigger = false;
		yield WaitForSeconds(0.7);
		if (ptsTrigger == 1 && bonusHits >= 3)
		{
			ptsTrigger = 0;
			if (bonusHits < 6)
			{
				SpawnPts(bonusHits * 2,0.47,0.70);
				GetComponent.<AudioSource>().PlayOneShot(pearlLow);
			}
			else
			{
				SpawnPts(bonusHits * 3,0.47,0.70);
				GetComponent.<AudioSource>().PlayOneShot(pearlHigh);
			}
		}
		bonusHits = 0;
		bonusTrigger = true;
}
while (true) {
    yield WaitForSeconds(Random.Range(1, 4));
    spawnBubbles();
	}
function spawnBubbles()
{	
	var v2Pos = transform.position;
	var rNum = 3;
	for(var i = 0; i < rNum; ++i)
	{
		 yield WaitForSeconds(0.7);
		 v2Pos = transform.position;
		PoolManager.Pools["bubblePool"].Spawn(bubbleObject.transform, v2Pos,  Quaternion.identity);

	}
}
function spawnBubblesOnHit()
{   
    //var v2Pos = transform.position;

    var rNum = 3;
    for(var i = 0; i < rNum; ++i)
    {
    	var v2Pos = Vector2(transform.position.x + Random.Range(0.0,1),transform.position.y);
         yield WaitForSeconds(0.01);
        
        PoolManager.Pools["bubblePool"].Spawn(bubbleObject.transform, v2Pos,  Quaternion.identity);
    }
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "pearl")
	{
		++bonusHits;
		if (bonusHits >=3)
		{
			pearlBonus();
			// if (bonusHits == 3)
			// {
			// 	bonusCooldown();
			// }
			if (bonusHits == 6)
			{
				food.gameObject.GetComponent(game).pScoreBonusT();
			}
		}
		bonusCooldown();
		food.gameObject.GetComponent(game).pScoreInc() ;

		PoolManager.Pools["pearls"].Despawn(coll.gameObject.transform);
		GetComponent.<AudioSource>().PlayOneShot(pearlScore);
	}
	if (!invincible)
	{
		if (coll.gameObject.tag == "enemy")
		 {
			--health;
			spawnBubblesOnHit();
			GetComponent.<AudioSource>().PlayOneShot(smallHitClip);
			//updateHealthText();
			updateHealth();
			 invincible = true; // makes this whole function unusable since invincible is no longer false
			 		hitFlash();
	                yield WaitForSeconds (0.2); 
	                invincible = false; // makes this whole function reusable since invincible is false again
		}
	}
	if (coll.gameObject.name == "food")
		{
			//++health;
			GetComponent.<AudioSource>().PlayOneShot(hitClip);
			 yield WaitForSeconds(0.2);
			if (ptsTrigger == 1)
			{
				ptsTrigger = 0;
				SpawnPts(3,0.47,0.70);
			}
			spawnBubblesOnHit();

			//updateHealthText();
			updateHealth();
		}
	if (coll.gameObject.tag == "bigBad")
		{
			spawnBubblesOnHit();
			GetComponent.<AudioSource>().PlayOneShot(bigHitClip);
			yield WaitForSeconds(0.2);
			die();
		}

			
	if (health <= 0)
	{
		die();
	}

}
// function updateHealthText()
// {
// 	guiHealth.text = "Health: " + health;
// }

function die() {
	
	health = 0;
	//updateHealthText();
	updateHealth();
	//Destroy(this.gameObject);

	var currentScript = GetComponent(forward);
	if(currentScript != null)
	{
	  currentScript.enabled = false;
	  GetComponent(Animator).enabled = false; 
	  GetComponent(playerController).enabled = false;
	  yield WaitForSeconds(0.5);
	  GetComponent.<Collider2D>().enabled = false;
	  GetComponent(deadFloating).enabled = true;
	  enableGameOverUI();
	}

}

function enableGameOverUI() 
{
		//gameOverUI.gameObject.SetActive (true);
		//gameOverUI.find("scoreBoard").GetComponent(Script);

		for (var i = 0; i < gameOverUI.transform.childCount; ++i) {
			gameOverUI.transform.GetChild(i).gameObject.SetActive(true);
		}
}

function OnBecameInvisible()
{
	//bgFlash();
	yield WaitForSeconds(1);
	 if (!gameObject.GetComponent.<Renderer>().isVisible)
    {
        destroyTrigger = 1;
    }
    else
    	destroyTrigger = 0;
	
	if(destroyTrigger == 1)
	{
		// var viewPos = camera.main.WorldToViewportPoint (transform.position);
		// if (viewPos.y > 0.5 && viewPos.x < 0.5)
		// {
		//    	 Instantiate(bigBad, Vector2(transform.position.x, transform.position.y + 10), Quaternion.identity);
	 //    }
	 //    else if (viewPos.y < 0.5)
	 //    {
 	// 		 Instantiate(bigBad, Vector2(transform.position.x, transform.position.y - 10), Quaternion.identity);
	 //    }
	 //    bigBad.GetComponent(bigBadScript).waitTime = 0.2;
	 //    yield WaitForSeconds(0.4);
		health = 0;

		//updateHealthText();
		updateHealth();
		Destroy(this.gameObject);
		enableGameOverUI();

	 }

 }
function waitBeforeDestroy()
{
	yield WaitForSeconds(1);
	 if (!gameObject.GetComponent.<Renderer>().isVisible)
    {
        destroyTrigger = 1;
    }
    else
    	destroyTrigger = 0;
}
// function OnBecameVisible()
// {
// 	destroyTrigger = 0;
// }
function hit()
{
	--health;
	if (health <= 0)
	{
		die();
	}
}

function hitFlash()
{
	
    for(var n = 0; n < 5; n++)

    {

        GetComponent.<Renderer>().material.color = Color.white;

        yield WaitForSeconds(.1);

        GetComponent.<Renderer>().material.color =  Color(1, 0.0, 0.0, 0.75);

        yield WaitForSeconds(.1);

    }

    GetComponent.<Renderer>().material.color = Color.white;
}

// function bgFlash()
// {
//     for(var n = 0; n < 2; n++)
//     {
//         bg.renderer.material.color = Color.white;

//         yield WaitForSeconds(.1);

//         bg.renderer.material.color =  Color(1, 0.99, 0.99, 0.05);

//         yield WaitForSeconds(.1);
//     }
//     bg.renderer.material.color = Color.white;
// }

function SpawnPts(points: float, x: float, y: float){

    x = Mathf.Clamp(x,0.05,0.95); // clamp position to screen to ensure
    y = Mathf.Clamp(y,0.05,0.9);  // the string will be visible
    var cam = GetComponent(Camera);
    var gui: Transform = Instantiate(ptsPrefab, Camera.main.WorldToViewportPoint(Vector3(transform.position.x,transform.position.y,0)),Quaternion.identity);
    gui.GetComponent.<GUIText>().text = "+" + points.ToString();
}