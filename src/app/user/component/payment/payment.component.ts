import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { StripeService } from '../../../services/stripe.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  private stripe: any;
  private elements: any;
  private card: any;
  amount: number = 1000; // Example amount
  clientSecret: string = 'your-client-secret';

  constructor(private stripeService: StripeService) { }

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51PzFfeFoTp81ofWkg2JjvjfPhCy0lCbKkMWMJ1bUp2tRqcGuq9bo20r6vbMCMPiJMcb1qLUMG9PFPCp70M1Nx9uw007sAbMw3d');
    this.elements = this.stripe.elements();

    this.card = this.elements.create('card');
    this.card.mount('#card-element');
   // this.initializeStripe();
  }

  async pay() {
    try {
      const paymentIntentResponse = await this.stripeService.createPaymentIntent(this.amount).toPromise();
      
      // Ensure paymentIntentResponse is defined and has clientSecret
      if (paymentIntentResponse && paymentIntentResponse.clientSecret) {
        const { error, paymentIntent } = await this.stripe.confirmCardPayment(paymentIntentResponse.clientSecret, {
          payment_method: {
            card: this.card
          }
        });
  
        if (error) {
          console.error('Payment failed:', error.message);
        } else if (paymentIntent.status === 'succeeded') {
          console.log('Payment succeeded!');
        }
      } else {
        console.error('Failed to retrieve clientSecret.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  

}
