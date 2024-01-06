package ma.dnaengineering.backend.service;

import ma.dnaengineering.backend.model.Employee;

import java.util.List;
import java.util.Map;

public interface CsvService {
    List<Employee> processCsv(String filePath);
    Map<String, Double> getJobTitleAvgSalary(List<Employee> employees);
}
