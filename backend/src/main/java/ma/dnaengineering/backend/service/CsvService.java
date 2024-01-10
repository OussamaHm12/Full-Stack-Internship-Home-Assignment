package ma.dnaengineering.backend.service;

import ma.dnaengineering.backend.strategy.CSVParserStrategy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CSVFileParser {

    private final CSVParserStrategy parser;

    public CSVFileParser(CSVParserStrategy parser) {
        this.parser = parser;
    }

    public List<String[]> parseCSV(String csvData) {
        try {
            return parser.parse(csvData);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error parsing CSV data", e);
        }
    }
}
