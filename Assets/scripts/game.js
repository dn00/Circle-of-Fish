import UnityEngine.UI;

var score : int = 0;
var guiScore: GUIText;
var scoreLabel: Text;
var bigBad : GameObject;
var f0 : GameObject;
var floatup;
var direction = 1.2;
var bubbleObject : GameObject;
var fCount :int;
var pScore :int;
var triggr :int;
var spawner0 : GameObject;
var rdyToSpawn :int;
var pearlObject : GameObject;
var invincible : boolean = false;

function Awake()
{
   fCount = 0;
   pScore = 0;
    triggr = 0;
    rdyToSpawn = 1;

}
function Start () {
	//Random.seed = 42;
	//guiScore.text = "Score: 0";
    scoreLabel = gameObject.Find("score2").GetComponent(Text);
   scoreLabel.text = "0";
	floatup = false;
}

function FixedUpdate(){
   if(floatup)
       floatingup();
   else if(!floatup)
       floatingdown();

}
function updateGUIScore() //change when updated gui
{
    //guiScore.text = "Score: " + score;
    var totalScore = (score * 3) + (pScore);
    scoreLabel.text = totalScore.ToString();
    // if (score == 0)
    // {
    //      scoreLabel.text = "GAME OVER";
    // }
}
function tScore()
{
     //return (score * 3) + (pScore);
     return int.Parse(scoreLabel.text);
}
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player")
		{
                // spawnBubblesOnHit();
            food();
			++score;

//            if (score % 2 == 0)
//            {
//                 spawnPearl();
//			}
//
//			spawn pearl all the time
			spawnPearl();
            updateGUIScore();
            bigBadInstantiate();
            //rand = Random.Range(0,2);
            if (fCount < 15 && rdyToSpawn == 1)
            {
                  f0.GetComponent(spawner).spawn();
                  ++fCount;
            }
            invincible = true;
            // if (score % 5 == 0)
            // {
            //     resetNMEFish();
            // }
            //if (score % 2 == 0 && score <= 36)
			// {
			// 	  f0.GetComponent(spawner).spawn(score);
			// }
            blinkOut();
    		}
		direction = direction * -1;
		transform.localScale = new Vector3(direction, 1, 1);
    }

function pScoreInc()
{
    ++pScore;
    updateGUIScore();
}
function pScoreBonusD()
{
    pScore = pScore + 3;
    updateGUIScore();
}
function pScoreBonusT()
{
    pScore = pScore + 6;
    updateGUIScore();
}
function spawnPearl()
{
     var rr = Random.Range(3,7);
     if (rr == 5) //higher chance of 6
        rr = 6;
     for(var i = 0; i < rr; ++i)
        {
         yield WaitForSeconds(0.1);
         PoolManager.Pools["pearls"].Spawn(pearlObject.transform, Vector2(f0.transform.position.x, f0.transform.position.y),  Quaternion.identity);
        }
}
while (true) {
    yield WaitForSeconds(Random.Range(3, 5));
    spawnBubbles();
    }
function spawnBubbles()
{   
    var v2Pos = transform.position;
 
  
         yield WaitForSeconds(0.5);
         v2Pos = transform.position;
         PoolManager.Pools["bubblePool"].Spawn(bubbleObject.transform, v2Pos,  Quaternion.identity);

}
function spawnBubblesOnHit()
{   
    var v2Pos = transform.position;
    var rNum = 3;
    for(var i = 0; i < rNum; ++i)
    {
         yield WaitForSeconds(0.15);
        
       PoolManager.Pools["bubblePool"].Spawn(bubbleObject.transform, v2Pos,  Quaternion.identity);
    }
}

function food()
{
    transform.position = Vector3(Random.Range(10.5,18),Random.Range(-1,11),0);

}


function floatingup(){
    transform.position.y += 0.4 * Time.deltaTime;
    transform.localScale.y += .2 * Time.deltaTime;
    yield WaitForSeconds(1);
    floatup = false;
}
function floatingdown(){
    transform.position.y -= 0.4 * Time.deltaTime;
        transform.localScale.y -= .2 * Time.deltaTime;
    yield WaitForSeconds(1);
    floatup = true;
}
public function blinkOut():IEnumerator {

    var duration:float = .8;

    var blinkTime:float = .1;

    var renderers = gameObject.GetComponentsInChildren(Renderer);

    for (var i = 0.0; i < 1.0; i += blinkTime * (1/duration)) {

        for (var r:Renderer in renderers) {

            r.enabled = !r.enabled;

        }

        yield new WaitForSeconds(blinkTime);

    }

}
function bigBadInstantiate()
{
    //if (score % 5 == 0 && score > 10)
    if (score == 8) //special case for first spawn
    {
        var bigBadObject = Instantiate(bigBad, Vector2(14,-15), Quaternion.identity);
                 bigBadObject.GetComponent(bigBadScript).deSpawnFish = 1;
    }
    if (score % 4 == 0 && score > 10)
    {
        var ranSpawn = Random.Range(0,2);
        if (ranSpawn == 0)
        {
          var bigBadObjectt = Instantiate(bigBad, Vector2(14,-15), Quaternion.identity);
                if (fCount == 15)
                {   
                     yield WaitForSeconds(2.4);
                     bigBadObjectt = Instantiate(bigBad, Vector2(14,23), Quaternion.identity);
                    bigBadObjectt.GetComponent(bigBadScript).deSpawnFish = 1;
                } 
        }
        else
        {
             bigBadObject = Instantiate(bigBad, Vector2(14,23), Quaternion.identity);
                 if (fCount == 15)
                            {   
                                yield WaitForSeconds(2.4);
                               bigBadObject = Instantiate(bigBad, Vector2(14,-15), Quaternion.identity);
                                bigBadObject.GetComponent(bigBadScript).deSpawnFish = 1;
                            } 
        }
    }
}

