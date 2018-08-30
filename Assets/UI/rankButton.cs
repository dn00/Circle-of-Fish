using UnityEngine;
using System.Collections;

public class rankButton : MonoBehaviour {
	public GameObject scoreMenu;
	public GameObject mainMenu;
	public GameObject logo;
	// Use this for initialization
	void Start () {
		
	}
	
	void OnClick()
	{
		NGUITools.SetActive(scoreMenu,true);
		NGUITools.SetActive(mainMenu,false);
		NGUITools.SetActive(logo,false);
	}
	// Update is called once per frame
	void Update () {
	
	}
}
