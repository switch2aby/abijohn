package com.abi;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@FunctionalInterface
interface MyInterface {

	public String sayHello();
}

@FunctionalInterface
interface MyInterface2 {

	public String sayHello(String a, String b);
}

public class ContactMain {

	public static void main(String[] args) {

		MyInterface msg = () -> {
			return "Hello all, this is my first Lambda example.";
		};

		//System.out.println(msg.sayHello());
		//listDemo();
		//loopDemo();
		Streams.strStream();
		Streams.streamFilter();
	}

	public static void listDemo() { 

		List<String> str = new ArrayList<>();
		str.add("Bchan");
		str.add("Jabi");
		str.add("Sibi");
		str.add("Abi");
		str.add("Joemon");
		str.add("Syam");

		str.forEach( (names) -> System.out.println(names) );
	}
	
	static void loopDemo() {
		
		MyInterface2 inter = (str1, str2) -> str1.concat(str2);
		System.out.println(inter.sayHello("Abi ", "John"));

		IntStream.rangeClosed(1, 10)
				.boxed()
				.collect(Collectors.toList())
				.forEach(item -> System.out.println(item));
				//.toString();
			
	}
}