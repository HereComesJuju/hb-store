const toCurrency = (amount: any) => {
  if (!amount || isNaN(amount)) {
    return amount;
  }

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR"
  }).format(Number(amount));
};

export default toCurrency;
