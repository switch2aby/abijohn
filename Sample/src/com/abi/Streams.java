package com.abi;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Streams {

	public static void strStream() { 

		List<String> str = new ArrayList<>();
		str.add("Bchan");
		str.add("Jabi");
		str.add("Sibi");
		str.add("Abi");
		str.add("Joemon");
		str.add("Syam");

		long count = str
				.stream()
				.filter(s -> s.length()==4).count();
		
		System.out.println("Count is :"+count);
	}
	
	public static void streamFilter() {
		
		List<String> str = Arrays.asList("kunchakoboban","prithviraj","bijumenon","pakru","mammooty","nivin","dulquor");
		Stream<String> stream1 = str.stream();
		Stream<String> longNames = stream1.filter(st->st.length()>6);
		longNames.forEach(st2 -> System.out.print(st2+" ,"));
	}
}