import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private stripe: Stripe | null = null;

  constructor(private http: HttpClient) {
    this.initializeStripe();
  }

  async initializeStripe() {
    this.stripe = await loadStripe('pk_test_51PLHbLP9YTJ2hH7Cv5oLodCJ6CvigWOuKDfCWS7SGSHW5DiucVYTUr4uATHYK34WJtJnQx9Lpg7LJcEa2IvIPs9F00MmDsYZBy');
  }

  createPaymentIntent(amount: number) {
    return this.http.post<{ clientSecret: string }>('http://localhost:8080/api/payments/create-payment-intent', { amount });
  }

  getStripeInstance() {
    return this.stripe;
  }
}
