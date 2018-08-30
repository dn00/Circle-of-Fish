var spawnObject : GameObject;
var oldFish : GameObject;
//var player : GameObject;
var spawner0 : GameObject;
var spawner1 : GameObject;
var spawner2 : GameObject;
var spawner3 : GameObject;
var playerPrefab : GameObject;
var player : GameObject;
//var fish : GameObject;
var eFollower : GameObject;
var food : GameObject;
var spawnPoint = 0;
var gameMode = 0 ;
var mainMenu : GameObject;
var gameOverMenu : GameObject;
var lastFish : GameObject;
var deadClip : AudioClip;
var gameOverTrig = 0;
var scoreLabel : GameObject;
var firstFish : GameObject;
//var speed = 0.15;
function Start()
{
	player = gameObject.FindWithTag("Player");
}
function spawn() {
	if (oldFish == null)
		{
			oldFish = eFollower;
		}
	//var v2Pos : Vector2 = Camera.main.ViewportToWorldPoint(new Vector2(1.1f, 0.5f));
	//var randomSpawn = Random.Range(0,4);
	var v2Pos : Vector2;
	var viewPosY = GetComponent.<Camera>().main.WorldToViewportPoint (player.transform.position).y;
	if (viewPosY < 0.5)
		spawnPoint = 0;
	else 
		spawnPoint = 1;

	if (spawnPoint == 0)
	{
		//v2Pos = Camera.main.ViewportToWorldPoint(new Vector2(-0.15f, 0.5f));
		v2Pos = spawner1.transform.position;
		//spawnPoint = 1;
	}
	else
	{
		v2Pos = spawner3.transform.position;
		//spawnPoint = 0;

	}
	//else if (randomSpawn == 1)
	//{
		//v2Pos = spawner1.transform.position;
		//v2Pos = spawner0.transform.position;
	//}

	//else if (randomSpawn == 3)
	//{
		//v2Pos = spawner3.transform.position;

	//}
	lastFish = oldFish;
	// if (oldFish.name == "fish(Clone)")
	// {
	// 	oldFish.GetComponent(rotate).exc();
	// }

	//var newFish = Instantiate(spawnObject, v2Pos, transform.rotation);
	var newFish = PoolManager.Pools["nme"].Spawn(spawnObject.transform, v2Pos, transform.rotation); //poolmanager
	newFish.GetComponent(rotate).target = oldFish.transform;
	newFish.GetComponent(Follow).target = oldFish.transform;
	//newFish.GetComponent(forward).moveSpeed = speed;
	//speed = speed - 0.05;
	//newFish.transform.localScale.x = (oldFish.transform.localScale.x + 0.05);
	//newFish.transform.localScale.y = (oldFish.transform.localScale.y + 0.05);
	if (oldFish.name == "emptyFollower")
	{
		firstFish = newFish.gameObject;
	}
	oldFish = newFish.gameObject; //for poolmanager
	//oldFish = newFish;

}
function Update()
{
	// if ( mainMenu.active == false && gameMode == 0)
	// 	{
	// 		respawn();
	// 		gameMode = 1;
	// 	}
	// player = gameObject.Find("player(Clone)");
	// if (player == null)
	// {
	// 	//respawn();
	// 	gameOver();
	// 	if (mainMenu.active == false && gameMode == 1)
	// 	{
	// 		gameOverMenu.SetActive(true);
	// 		gameMode = 2;
	// 	}
	// 	if (gameOverMenu.active == false && gameMode == 2)
	// 	{
	// 		respawn();
	// 		gameMode = 1;
	// 	}
	// }

	gameCheck();
}
function gameCheck()
{
	if (gameMode == 0)
	{
		// //mainMenu.SetActive(true);
		// if (mainMenu.active == false)
		// {
		// 	gameMode = 1;
		// 	respawn();
		// }
		respawn();
		gameMode = 1;
			
	}
	if (gameMode == 1)
	{	
		player = gameObject.FindWithTag("Player");	
		 if (player == null)
		{ 
			//gameOverMenu.SetActive(true);
			gameMode = 3;
			if (gameOverMenu.active == false && gameMode == 3)
			{
				//yield WaitForSeconds(1);
	       	 	gameOverMenu.SetActive(true);
				gameOver();
			//gameMode = 2;
			}
		}
		if (player!=null)
		{
			if (player.GetComponent(diewheninvis).health == 0)
			{
			if (gameOverMenu.active == false && gameMode !=3)
			{	
				yield WaitForSeconds(1);
				gameOverMenu.SetActive(true);
				//gameMode = 2;
				if (gameOverTrig == 0) //bug fix multiple
				{
					gameOver();
					gameOverTrig = 1;
				}
			}
		}
			GetComponent(followForEmptyFollower).target = player.transform;
		
		}
	}
	// if (gameOverMenu.active == false && gameMode == 2)
	// {
	// 	if (player == null || player.GetComponent(diewheninvis).health == 0)
	// 	{
	// 		respawn();
	// 		gameMode = 1;
	// 	}
	// }
}

function gameOver()
{
	// for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("enemy"))
	// {
	// 	//yield WaitForSeconds(0.1);
	//    	fooObj.GetComponent(Follow).target = spawner0.transform;
	//  	fooObj.GetComponent(rotate).target = spawner0.transform;
	// }
	oldFish = eFollower;
	GetComponent.<AudioSource>().PlayOneShot(deadClip);
	//food.GetComponent(game).score = 0;
	//var scoreLabel = gameObject.Find("score").GetComponent(UILabel);
	//food.GetComponent(game).updateGUIScore();
	scoreLabel.GetComponent(UILabel).text = "GAME OVER";
}
function respawn()
{
	for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("enemy"))
	{
		//yield WaitForSeconds(0.1);
	   //	fooObj.GetComponent(Follow).target = spawner0.transform;
	 	//fooObj.GetComponent(rotate).target = spawner0.transform;
	 	//Destroy(fooObj);

	 	 PoolManager.Pools["nme"].Despawn(fooObj.transform);
	}
	Destroy(player);
    Instantiate(playerPrefab, Vector3(14.0,6.2,0), Quaternion.identity);
    player = gameObject.FindWithTag("Player");
    GetComponent(followForEmptyFollower).target = player.transform;
	//oldFish = eFollower;
}

