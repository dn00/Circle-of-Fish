using UnityEngine;
using System.Collections;

public class backButton : MonoBehaviour {
	public GameObject scoreMenu;
	public GameObject mainMenu;
	public GameObject logo;
	// Use this for initialization
	void Start () {
	
	}
	void OnClick()
	{
		 NGUITools.SetActive(mainMenu,true);
		 NGUITools.SetActive(logo,true);
		 NGUITools.SetActive(scoreMenu,false);
	}
	// Update is called once per frame
	void Update () {
	
	}
}
