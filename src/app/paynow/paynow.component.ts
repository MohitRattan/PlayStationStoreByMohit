import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { PaynowService } from '../paynow.service';
import { CartComponent } from "../cart/cart.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-paynow',
  standalone: true,
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css'],
  imports: [CartComponent]
})
export class PaynowComponent implements AfterViewInit, OnDestroy {
  private grandTotal: number = 0;
  private paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '01234567890123456789',
      merchantName: 'TechRBM',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: '', // Will be set in ngAfterViewInit
      currencyCode: 'INR'
    }
  };

  private subscription: Subscription = new Subscription();

  constructor(private paynowService: PaynowService) {}

  ngAfterViewInit() {
    this.subscription.add(this.paynowService.grandTotal$.subscribe(total => {
      this.grandTotal = total;
      this.paymentRequest.transactionInfo.totalPrice = this.grandTotal.toFixed(2);

      const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

      paymentsClient.isReadyToPay({
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: this.paymentRequest.allowedPaymentMethods
      })
      .then(response => {
        if (response.result) {
          this.addGooglePayButton(paymentsClient);
        }
      })
      .catch(err => {
        console.error('Error checking Google Pay readiness:', err);
      });
    }));
  }

  private addGooglePayButton(paymentsClient: google.payments.api.PaymentsClient) {
    const button = paymentsClient.createButton({
      buttonType: 'plain',
      onClick: () => this.onGooglePayButtonClick(paymentsClient)
    });
    document.getElementById('gpay-button-container')?.appendChild(button);
  }

  private onGooglePayButtonClick(paymentsClient: google.payments.api.PaymentsClient) {
    paymentsClient.loadPaymentData(this.paymentRequest)
      .then((paymentData: google.payments.api.PaymentData) => {
        console.log('Payment data received:', paymentData);
      })
      .catch(err => {
        console.error('Error during Google Pay payment:', err);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
