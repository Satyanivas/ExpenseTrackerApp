package com.nivas.expensetracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nivas.expensetracker.model.Expense;
import com.nivas.expensetracker.repository.ExpenseRepository;

@Service
public class ExpenseServiceImpl implements ExpenseService{

	@Autowired
	ExpenseRepository expenseRepo;
	@Override
	public List<Expense> findAll() {
		// TODO Auto-generated method stub
		return expenseRepo.findAll();
	}
	@Override
	public Expense save(Expense expense) {
		// TODO Auto-generated method stub
		 expenseRepo.save(expense);
		 return expense;
	}
	@Override
	public Expense findById(Long id) {
		// TODO Auto-generated method stub
		if(expenseRepo.findById(id).isPresent()) {
			return expenseRepo.findById(id).get();
		}
		return null;
	}
	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		Expense exp=findById(id);
		expenseRepo.delete(exp);
		
	}

}
