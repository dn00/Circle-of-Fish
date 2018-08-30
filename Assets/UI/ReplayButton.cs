using UnityEngine;
using System.Collections;

public class ReplayButton : MonoBehaviour {
	public GameObject GameOverMenu;
	// Use this for initialization
	void Start () {
		//NGUITools.SetActive(GameOverMenu,false);
	}
	
	// Update is called once per frame
	void OnClick () {
		//NGUITools.SetActive(GameOverMenu,false);
		Application.LoadLevel ("cof");
	}
}