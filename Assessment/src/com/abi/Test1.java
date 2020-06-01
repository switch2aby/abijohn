package com.abi;

interface Books {
	String type = "Falcon";
	static String getFalcon() {
		return "hello";
	}
	public void details();
}
class Quiz {
	public static String type = "Quiz";
}

class PractiseQuiz extends Quiz implements Books {

	
	@Override
	public void details() {
		System.out.println(type);
		
	}
	
}
public class Test1 {

	public static void main(String[] args) {
		System.out.println("Hello");
	}

}
