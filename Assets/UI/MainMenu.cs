using UnityEngine;
using System.Collections;

public class Play : MonoBehaviour {

	// Use this for initialization
	void OnClick()
	{
		GameObject panel  = GameObject.Find("MainMenu");
		 NGUITools.SetActive(panel,false);  
	}
}
