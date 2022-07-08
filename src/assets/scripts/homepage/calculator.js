{
  const paymentResultRef = document.getElementById('paymentResult');
  const paymentOveralRef = document.getElementById('paymentOveral');
  const minPaymentRef = document.getElementById('minPayment');
  const minPaymentRangeRef = document.getElementById('minPaymentRange');
  const paymentDurationRef = document.getElementById('paymentDuration');
  const paymentDurationRangeRef = document.getElementById('paymentDurationRange');
  const costRef = document.getElementById('cost');
  const paymentMinLableRef = document.querySelector('.paymentMinLable');
  const paymentMaxLableRef = document.querySelector('.paymentMaxLable');

  paymentDurationRangeRef.min = 1;
  paymentDurationRangeRef.max = 24;
  paymentDurationRef.value = 1;

  const calculator = {
    _cost: 0,
    _minPayment: 0,
    _paymentDuration: 1,
    get cost() {
      return this._cost;
    },
    set cost(val) {
      if (val < 0) {
        this._cost = 0;
        this._minPayment = 0;
      } else {
        this._cost = val;
        this._minPayment = val / 2;
      }
      this.render();
    },
    get minPayment() {
      return this._minPayment;
    },
    set minPayment(val) {
      const isLowerThanHalfPrice = val < this.cost / 2;
      const isAboveTotalPrice = val > this.cost;
      if (isLowerThanHalfPrice) {
        this._minPayment = this.cost / 2;
      } else if (isAboveTotalPrice) {
        this._minPayment = this.cost;
      } else {
        this._minPayment = val;
      }

      this.render();
    },
    get paymentDuration() {
      return this._paymentDuration;
    },
    set paymentDuration(val) {
      const roundedValue = Math.round(val);
      if (roundedValue > 24) {
        this._paymentDuration = 24;
      } else if (roundedValue < 1) {
        this._paymentDuration = 1;
      } else {
        this._paymentDuration = val;
      }

      this.render();
    },
    calculateMonthlyPayment() {
      return (this.cost - this.minPayment) / this.paymentDuration;
    },

    render() {
      paymentOveralRef.textContent = this.cost;
      minPaymentRangeRef.value = this.minPayment;
      minPaymentRangeRef.min = this.cost / 2;
      minPaymentRangeRef.max = this.cost;
      paymentMinLableRef.textContent = this.cost / 2;
      paymentMaxLableRef.textContent = this.cost;
      minPaymentRef.value = this.minPayment;
      paymentDurationRef.value = this.paymentDuration;
      paymentDurationRangeRef.value = this.paymentDuration;
      costRef.value = this.cost;
      paymentResultRef.textContent = this.calculateMonthlyPayment().toFixed(2);
    },
  };
  calculator.cost = 0;
  costRef.addEventListener('input', (event) => {
    const { value } = event.target;
    calculator.cost = +value;
  });
  minPaymentRangeRef.addEventListener('change', (event) => {
    const { value } = event.target;
    calculator.minPayment = +value;
  });
  minPaymentRef.addEventListener('change', (event) => {
    const { value } = event.target;
    calculator.minPayment = +value;
  });

  paymentDurationRef.addEventListener('change', (event) => {
    const { value } = event.target;
    calculator.paymentDuration = +value;
  });

  paymentDurationRangeRef.addEventListener('change', (event) => {
    const { value } = event.target;
    calculator.paymentDuration = +value;
  });

  const handleChange = () => {};
}
