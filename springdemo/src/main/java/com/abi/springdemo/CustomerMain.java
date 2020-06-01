package com.abi.springdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CustomerMain {

	static CustomerRepo repo;
	
	public CustomerMain(CustomerRepo repo) {
		this.repo = repo;
	}
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
		//CustomerRepo repo = (CustomerRepo)context.getBean("customerRepo");
		callAddCustomer();
	}
	private static void callAddCustomer() {
		repo.addCustomer();
	}

}
