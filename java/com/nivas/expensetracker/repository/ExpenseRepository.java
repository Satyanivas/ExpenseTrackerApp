package com.nivas.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nivas.expensetracker.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}
