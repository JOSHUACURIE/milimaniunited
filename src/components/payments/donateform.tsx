// components/payment/DonationForm.tsx
import React, { useState } from 'react';
import '../../styles/globals.css';

interface DonationFormProps {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ onSuccess, onError }) => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('KES');
  const [paymentMethod, setPaymentMethod] = useState<string>('mpesa');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [country, setCountry] = useState<string>('KE');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  // Payment methods configuration
  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      type: 'mobile_money',
      country: 'KE',
      currencies: ['KES'],
      icon: '📱'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      type: 'card',
      currencies: ['USD', 'EUR', 'GBP', 'KES'],
      icon: '💳'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      type: 'card',
      currencies: ['USD', 'EUR', 'GBP'],
      icon: '🔵'
    }
  ];

  // Currency options
  const currencies = {
    KES: { symbol: 'KES', name: 'Kenyan Shilling', presetAmounts: [100, 500, 1000, 2000, 5000] },
    USD: { symbol: '$', name: 'US Dollar', presetAmounts: [10, 25, 50, 100, 250] },
    EUR: { symbol: '€', name: 'Euro', presetAmounts: [10, 25, 50, 100, 250] },
    GBP: { symbol: '£', name: 'British Pound', presetAmounts: [10, 25, 50, 100, 250] }
  };

  const currentCurrency = currencies[currency as keyof typeof currencies];

  const handleAmountSelect = (amt: number) => {
    setSelectedAmount(amt);
    setAmount(amt.toString());
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    setSelectedAmount(null);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    // Add spaces every 4 digits
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length >= 2) {
      setExpiryDate(value.slice(0, 2) + '/' + value.slice(2));
    } else {
      setExpiryDate(value);
    }
  };

  const formatPhoneNumber = (phone: string): string => {
    if (phone.startsWith('0')) {
      return '254' + phone.slice(1);
    }
    if (phone.startsWith('+254')) {
      return phone.slice(1);
    }
    if (phone.startsWith('254')) {
      return phone;
    }
    return '254' + phone;
  };

  const validateForm = (): boolean => {
    if (!amount || parseFloat(amount) <= 0) {
      onError?.('Please enter a valid amount');
      return false;
    }

    if (paymentMethod === 'mpesa') {
      if (!phoneNumber || phoneNumber.length < 9) {
        onError?.('Please enter a valid M-Pesa phone number');
        return false;
      }
    }

    if (paymentMethod === 'card') {
      if (!name.trim()) {
        onError?.('Please enter your name');
        return false;
      }
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
        onError?.('Please enter a valid email address');
        return false;
      }
      if (!cardNumber || cardNumber.replace(/\s/g, '').length !== 16) {
        onError?.('Please enter a valid card number');
        return false;
      }
      if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
        onError?.('Please enter a valid expiry date (MM/YY)');
        return false;
      }
      if (!cvv || cvv.length < 3) {
        onError?.('Please enter a valid CVV');
        return false;
      }
    }

    return true;
  };

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const donationData = {
        amount: parseFloat(amount),
        currency,
        paymentMethod,
        phoneNumber: paymentMethod === 'mpesa' ? formatPhoneNumber(phoneNumber) : undefined,
        email: paymentMethod === 'card' ? email : undefined,
        name: paymentMethod === 'card' ? name : undefined,
        cardNumber: paymentMethod === 'card' ? cardNumber.replace(/\s/g, '') : undefined,
        expiryDate: paymentMethod === 'card' ? expiryDate : undefined,
        cvv: paymentMethod === 'card' ? cvv : undefined,
        country
      };

      // Simulate payment processing
      setTimeout(() => {
        setIsLoading(false);
        onSuccess?.({
          transactionId: (paymentMethod === 'mpesa' ? 'MPESA' : 'CARD') + Date.now(),
          amount: parseFloat(amount),
          currency,
          paymentMethod,
          phoneNumber: donationData.phoneNumber,
          timestamp: new Date().toISOString()
        });
      }, 2000);

    } catch (error) {
      setIsLoading(false);
      onError?.('Payment failed. Please try again.');
    }
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'mpesa':
        return (
          <div className="payment-fields">
            <div className="form-group">
              <label className="form-label">M-Pesa Phone Number</label>
              <input
                type="tel"
                placeholder="e.g., 07XX XXX XXX"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="form-input"
                required
              />
              <small className="input-hint">Enter your M-Pesa registered number</small>
            </div>
          </div>
        );

      case 'card':
        return (
          <div className="payment-fields">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                placeholder="As shown on card"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="form-input"
                maxLength={19}
                required
              />
            </div>

            <div className="card-details">
              <div className="form-group">
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={handleExpiryChange}
                  className="form-input"
                  maxLength={5}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="form-input"
                  maxLength={4}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 'paypal':
        return (
          <div className="payment-fields">
            <div className="paypal-notice">
              <p>You will be redirected to PayPal to complete your donation securely.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="donation-form-container">
      <div className="donation-header">
        <h3>Support Our Mission</h3>
        <p>Your donation helps transform communities worldwide</p>
      </div>

      <form onSubmit={handleDonation} className="donation-form">
        {/* Currency Selection */}
        <div className="form-group">
          <label className="form-label">Currency</label>
          <div className="currency-selector">
            {Object.entries(currencies).map(([code, currencyInfo]) => (
              <button
                key={code}
                type="button"
                className={`currency-btn ${currency === code ? 'selected' : ''}`}
                onClick={() => {
                  setCurrency(code);
                  setAmount('');
                  setSelectedAmount(null);
                }}
              >
                {currencyInfo.symbol} {code}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div className="form-group">
          <label className="form-label">Select Amount ({currency})</label>
          <div className="amount-buttons">
            {currentCurrency.presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                className={`amount-btn ${selectedAmount === amt ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amt)}
              >
                {currentCurrency.symbol}{amt.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="custom-amount">
            <input
              type="number"
              placeholder={`Or enter custom amount in ${currency}`}
              value={amount}
              onChange={handleCustomAmount}
              className="custom-amount-input"
              min="1"
            />
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <div className="payment-methods">
            {paymentMethods
              .filter(method => method.currencies.includes(currency))
              .map((method) => (
                <label key={method.id} className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="payment-method-content">
                    <span className="payment-icon">{method.icon}</span>
                    <span className="payment-name">{method.name}</span>
                  </span>
                </label>
              ))}
          </div>
        </div>

        {/* Dynamic Payment Fields */}
        {renderPaymentFields()}

        {/* Submit Button */}
        <button 
          type="submit" 
          className="donate-button"
          disabled={isLoading || !amount || parseFloat(amount) <= 0}
        >
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Processing...
            </>
          ) : (
            `Donate ${currentCurrency.symbol}${parseFloat(amount || '0').toLocaleString()}`
          )}
        </button>

        {/* Security Badge */}
        <div className="security-badge">
          <span>🔒 Secure Payment · PCI Compliant</span>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;