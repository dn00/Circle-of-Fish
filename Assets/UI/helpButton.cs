using UnityEngine;
using System.Collections;

public class helpButton : MonoBehaviour {
	public GameObject help;
	public GameObject mainMenu;
	public GameObject logo;
	// Use this for initialization
	void Start () {
		
	}
	
	void OnClick()
	{
		NGUITools.SetActive(help,true);
		NGUITools.SetActive(mainMenu,false);
		NGUITools.SetActive(logo,false);
	}
	// Update is called once per frame
	void Update () {
	
	}
}
