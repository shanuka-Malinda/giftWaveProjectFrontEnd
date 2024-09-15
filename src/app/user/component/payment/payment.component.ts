import { Component, OnInit } from '@angular/core';
import { StripeService } from '../../../services/stripe.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  clientSecret: string | null = null;

  constructor(private stripeService: StripeService) { }

  ngOnInit(): void {
  }

  async pay(amount: number) {
    this.stripeService.createPaymentIntent(amount).subscribe(async (data: { clientSecret: string }) => {
      this.clientSecret = data.clientSecret;

      const stripe = this.stripeService.getStripeInstance();
      if (!stripe || !this.clientSecret) {
        console.error('Stripe is not initialized or client secret is missing.');
        return;
      }

      const elements = stripe.elements();
      const cardElement = elements.create('card');
      cardElement.mount('#card-element');

      const result = await stripe.confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        console.error('Payment failed:', result.error.message);
      } else {
        if (result.paymentIntent?.status === 'succeeded') {
          console.log('Payment succeeded!');
        }
      }
    });
  }
}
