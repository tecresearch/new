package com.hackerrank.validator.controller;

import com.hackerrank.validator.model.Employee;
import com.hackerrank.validator.repository.EmployeeRepository;
import com.hackerrank.validator.validation.EmployeeValidator;
import com.hackerrank.validator.validation.FieldValidationMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.BindResult;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeRepository repository;

    @RequestMapping(value = "/employee", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> validateBody(@RequestBody Employee employee) throws BindException {
        EmployeeValidator validator = new EmployeeValidator();
        WebDataBinder binder=new WebDataBinder(employee);
        binder.setValidator(validator);
        BindingResult result=binder.getBindingResult();
        if (result.hasErrors()) {
            List<FieldValidationMessage> error=result.getAllErrors()
                    .stream()
                    .map(err->new FieldValidationMessage(err.getDefaultMessage())).collect(Collectors.toList());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
        }
        binder.validate();
        binder.close();
        return ResponseEntity.status(HttpStatus.OK).body( repository.save(employee));
    }
}