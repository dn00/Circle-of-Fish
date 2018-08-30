//using UnityEngine;
//using System.Collections;
//
//
//public class PlayButton : MonoBehaviour {
//	// Use this for initialization
//	// private JS1 jsScript;   
//   void Start () {
//
//	}
//	void OnClick()
//	{
//
//		//GameObject mainMenu = GameObject.Find("MainMenu");
//		Application.LoadLevel ("cof");
//		//spawner.respawn();
//	//	NGUITools.SetActive(mainMenu,false);
//		//jsScript = this.GetComponent<JS1>();
//		//jsScript.respawn();
//		//print("test");
//	}
//}

using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayButton : MonoBehaviour
{
	public void loadGameScene()
	{
		SceneManager.LoadScene("cof");
//		var gameOverUI = GameObject.FindGameObjectWithTag ("GameOverUI");
//		if (gameOverUI != null) {
//			gameOverUI.gameObject.SetActive (false);
//		}
	}
		
}