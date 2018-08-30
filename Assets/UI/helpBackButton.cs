using UnityEngine;
using System.Collections;

public class helpBackButton : MonoBehaviour {
	public GameObject help;
	public GameObject mainMenu;
	public GameObject logo;
	// Use this for initialization
	void Start () {
	
	}
	void OnClick()
	{
		 NGUITools.SetActive(help,false);
		 NGUITools.SetActive(logo,true);
		 NGUITools.SetActive(mainMenu,true);
	}
	// Update is called once per frame
	void Update () {
	
	}
}
