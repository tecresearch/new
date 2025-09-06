package com.hackerrank.restcontrolleradvice.exception;

import com.hackerrank.restcontrolleradvice.dto.BuzzException;
import com.hackerrank.restcontrolleradvice.dto.FizzBuzzException;
import com.hackerrank.restcontrolleradvice.dto.FizzException;
import com.hackerrank.restcontrolleradvice.dto.GlobalError;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class FizzBuzzExceptionHandler extends ResponseEntityExceptionHandler {

  //TODO:: implement handler methods for FizzException, BuzzException and FizzBuzzException
    @ExceptionHandler
    public ResponseEntity<GlobalError> FizzException(FizzException ex){
        GlobalError errors=new  GlobalError();
        errors.setMessage(ex.getMessage());
        errors.setErrorReason(ex.getErrorReason());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errors);
    }
    @ExceptionHandler
    public ResponseEntity<GlobalError> BuzzException(BuzzException ex){
        GlobalError errors=new  GlobalError();
        errors.setMessage(ex.getMessage());
        errors.setErrorReason(ex.getErrorReason());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
    @ExceptionHandler
    public ResponseEntity<GlobalError> FizzBuzzException(FizzBuzzException ex){
        GlobalError errors=new  GlobalError();
        errors.setMessage(ex.getMessage());
        errors.setErrorReason(ex.getErrorReason());
        return ResponseEntity.status(HttpStatus.INSUFFICIENT_STORAGE).body(errors);
    }
}
