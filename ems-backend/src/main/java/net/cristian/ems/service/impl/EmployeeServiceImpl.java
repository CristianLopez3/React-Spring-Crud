package net.cristian.ems.service.impl;

import lombok.AllArgsConstructor;
import net.cristian.ems.dto.EmployeeDto;
import net.cristian.ems.entity.Employee;
import net.cristian.ems.exception.ResourceNotFoundException;
import net.cristian.ems.mapper.EmployeeMapper;
import net.cristian.ems.repository.EmployeeRepository;
import net.cristian.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {


    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository
                .findById(employeeId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with the given id: " + employeeId )
                );
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

}
