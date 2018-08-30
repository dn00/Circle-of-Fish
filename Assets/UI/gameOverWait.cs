// using UnityEngine;
// using System.Collections;

// public class gameOverWait : MonoBehaviour {

// 	// Use this for initialization
// 	bool canSwitch = false;
// 	bool waitActive = false; //so wait function wouldn't be called many times per frame
//      GameObject replayB;

// 	IEnumerator Wait(){
//     yield return new WaitForSeconds (1);
//      NGUITools.SetActive(replayB,true);
//      canSwitch = true;
// 	}
// 	void Start () 
// 	{

// 		replayB = GameObject.Find("ReplayButton");
// 			NGUITools.SetActive(replayB,false);
// 	}
	
// 	// Update is called once per frame
// 	void Update () {
// 		if(replayB.active == false)
// 		{
// 		StartCoroutine(Wait());
// 		if (canSwitch)
// 		{
// 			StartCoroutine(Wait());
// 		}
// 		}
// 	}

// }

