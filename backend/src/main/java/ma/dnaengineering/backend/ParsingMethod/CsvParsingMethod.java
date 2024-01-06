package ma.dnaengineering.backend.strategy;

import ma.dnaengineering.backend.model.Employee;
import ma.dnaengineering.backend.model.JobSummary;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public interface CsvParsingStrategy {

    List<Employee> parseEmployees(MultipartFile file) throws IOException;

    List<JobSummary> calculateJobSummary(List<Employee> employees);

    List<String[]> parse(InputStream inputStream) throws IOException;
}