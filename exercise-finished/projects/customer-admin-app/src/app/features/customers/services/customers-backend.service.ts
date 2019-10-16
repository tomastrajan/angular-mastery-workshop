import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { Customer } from '../model/customers';

const RESOURCE_URL = `${environment.API_URL}/customers`;

@Injectable()
export class CustomersBackendService {
  customers: Observable<Customer[]>;

  constructor(private httpClient: HttpClient) {
    this.customers = this.httpClient.get<Customer[]>(RESOURCE_URL);
  }

  create(customer: Partial<Customer>): Observable<Customer> {
    return this.httpClient.post<Customer>(RESOURCE_URL, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${RESOURCE_URL}/${customer.id}`, customer);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${RESOURCE_URL}/${id}`);
  }
}