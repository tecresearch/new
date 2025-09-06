package com.hackerrank.validator.validation;

import com.hackerrank.validator.model.Employee;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class EmployeeValidator implements Validator {

public static final DateTimeFormatter formater =DateTimeFormatter.ofPattern("yyyy-MM-dd");
    @Override
    public boolean supports(Class<?> clazz) {
        return Employee.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {

        Employee employee = (Employee) target;

        if(employee.getFullName()==null || employee.getFullName().trim().isEmpty()){
            errors.rejectValue("FullName","fullName.empty","The fullName is a mandatory field");
        }
        if(employee.getMobileNumber()==null || String.valueOf(employee.getMobileNumber()).length()!=10){
            errors.rejectValue("MobileNumber","mobileNumber.invalid","The mobileNumber is a mandatory field");
        }
        if(employee.getEmailId()==null || employee.getEmailId().trim().isEmpty()){
            errors.rejectValue("EmailId","emailId.empty","The emailId is a mandatory field");
        }else if(!employee.getEmailId().contains("@")){
            errors.rejectValue("EmailId","emailId.invalid","The emailId should be in a valid email format");
        }
        if(employee.getDateOfBirth()==null || employee.getDateOfBirth().trim().isEmpty()){
            errors.rejectValue("DateOfBirth","dateOfBirth.empty","The dateOfBirth is a mandatory field");
        }else{
            try {
                LocalDate.parse(employee.getDateOfBirth(),formater);
            } catch (Exception e) {
                errors.rejectValue("DateOfBirth","dateOfBirth.invalid","The dateOfBirth should be in YYYY-MM-DD format");
            }
        }

    }
}
